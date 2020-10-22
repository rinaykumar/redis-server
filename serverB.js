const express = require('express');

const app = express();

app.get('/api/serverB', (req, res) => {
  // Data we want to get

  // Simulate something that takes a long time
  setTimeout(() => {
    res.send('Hello From Server B')
  }, 3000);  
});

app.listen(4002, () => console.log('Server B on port 4002'));
