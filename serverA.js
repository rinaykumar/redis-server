const express = require('express');
const axios = require('axios');
const redis = require('redis');

const client = redis.createClient();
const KEY = 'DATA_KEY';

const app = express();

let counter = 0;
app.get('/api/serverA/counter', (req, res) => {
  // res.send(`${counter++}`); naive
  client.incr('myCounter', (err, value) => {
    console.log(err);
    // Guaranteed to be synchronous 
    res.send(`${value}`);
  })
});

app.get('/api/serverA', (req, res) => {
  // Check if redis has data
  client.get(KEY, (err, cachedValue) => {
    if (!cachedValue) {
      console.log('Cache Miss');
      // Fetching data from server 
      axios.get('http://localhost:4002/api/serverB')
        .then(responseData => {
          client.set(KEY, responseData.data, 'EX', 10); // EX 10 - Expires after 10 seconds
          res.send('Cache Miss ' + responseData.data);
        })
        .catch(() => console.log('Failed to get data from server B'));
    } else {
      console.log('Cache Hit');
      // No call to server B required because we already know the data
      // This gets a large speed boost because does not have to do heavy work again
      res.send('Cache Hit ' + cachedValue);
    }
  });
});

app.listen(4001, () => console.log('Server A on port 4001'));
