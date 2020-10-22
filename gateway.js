const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const apiProxy = httpProxy.createProxyServer();

apiProxy.on('error', (err, req, res) => {
  res.status(500).send('Proxy error');
});

// Get, post, put, delete, etc
// Connect serverA
app.all('/api/serverA*', (req, res) => {
  apiProxy.web(req, res, {
    target: 'http://localhost:4001'
  });
});

app.listen(4000, () => console.log('Proxy on port 4000'));
