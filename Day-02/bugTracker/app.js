var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sessionHandler = require('./middlewares/session');

var routes = require('./routes/index');
var users = require('./routes/users');
var bugs = require('./routes/bugs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//incluse the session middleware
app.use(sessionHandler);
app.use(function(req,res,next){
    if (!req.session.bugs){
        req.session.bugs = [
            {"id":"1424758570222","title":"Login button is disabled","createdAt":"2015-02-24T06:16:10.222Z","isClosed":false},
            {"id":"1424758593366","title":"Application shutsdown frequently","createdAt":"2015-02-24T06:16:33.366Z","isClosed":false},
            {"id":"1424758602527","title":"Application denies access to valid users","createdAt":"2015-02-24T06:16:42.527Z","isClosed":false},
            {"id":"1424758602537","title":"Application unable to interact with the server","createdAt":"2015-02-24T06:16:42.527Z","isClosed":false}
        ];
    }
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/bugs', bugs);
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
