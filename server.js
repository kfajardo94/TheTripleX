//Install express server
const express = require('express');
const morgan = require("morgan");
const createProxyMiddleware = require('http-proxy-middleware');
const app = express();

// Serve only the static files form the angularapp directory
// app.use(express.static(__dirname + '/dist/the-triple-x'));


const PORT = 8081;
const HOST = process.env.HOST;
const API_SERVICE_URL = "https://thetriplex-backend.herokuapp.com";

app.use(morgan('dev'));

app.get('/video', (req, res, next) => {
  res.send('This is a proxy service which proxies to Billing and Account APIs.');
});

// Authorization
app.use('', (req, res, next) => {
  console.log('req.headers.authorization: ', req.headers.authorization);
  if (req.headers.authorization) {
    next();
  } else {
    res.sendStatus(403);
  }
});

// Proxy endpoints
app.use('/getByPage', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/getByPage`]: '',
  },
}));

app.listen(PORT, () => {
  console.log(`Starting Proxy at ${PORT}`);
});
