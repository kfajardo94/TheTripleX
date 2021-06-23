//Install express server
const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/the-triple-x'));

app.use('/video', proxy('https://thetriplex-backend.herokuapp.com'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/the-triple-x/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
