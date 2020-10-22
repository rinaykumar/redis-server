const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const apiProxy = httpProxy.createProxyServer();

apiProxy.on('error', (err, req, res) => {
  res.status(500).send('Proxy error');
});

app.listen(4000, () => console.log('Proxy on port 4000'));
