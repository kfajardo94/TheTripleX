//Install express server
const express = require('express');
const path = require('path');
const morgan = require("morgan");
const createProxyMiddleware = require('http-proxy-middleware');

const app = express();

const API_SERVICE_URL = "https://thetriplex-backend.herokuapp.com";
const HOST = process.env.HOST || "https://thetriplex.herokuapp.com";
const PORT = process.env.PORT || "4200";

app.use(morgan('dev'));

app.get('/video/getByPage', (req, res, next) => {
  res.send('This is a proxy service which proxies to Billing and Account APIs.');
});

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/the-triple-x'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/the-triple-x/index.html'));
});

app.use('/video/getByPage', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/video/getByPage`]: '',
  },
}));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081);


app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
