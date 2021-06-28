//Install express server
const express = require('express');
const path = require('path');
const morgan = require("morgan");
const createProxyMiddleware = require('http-proxy-middleware');

const app = express();

const API_SERVICE_URL = "https://thetriplex-backend.herokuapp.com";

app.use(morgan('dev'));

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/the-triple-x'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/the-triple-x/index.html'));
});

app.use('/getByPage', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/getByPage`]: '',
  },
}));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081);
