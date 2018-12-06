const express = require('express');
const path = require('path');
//const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const hsts = require('hsts');
const port = 8888;
// Server IP
const hostname = '10.1.1.52';
// Swap between these 2 for testing
const http = require('http');
const https = require('https');
var app = express();
// Swap http/https as needed for testing
var server = http.createServer(app);


// BEGIN CORS POLICY
// app.use(function (req, res, next) {
//
//    // Change with the domain you wish to have to allow CORS policy
//    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
//
//    // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//    // Request headers you wish to allow
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//
//    // Set to true if you need the website to include cookies in the requests sent to the API
//    res.setHeader('Access-Control-Allow-Credentials', true);
//
//    next();
//}); 
// END CORS POLICY

// Add hostname to server.listen on server
server.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Require the index route
const routes = require('./server/routes/index');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(hsts({
  maxAge: 15552000
}))
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Use the routes that were declared
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});
