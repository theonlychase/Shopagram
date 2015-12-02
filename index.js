////////////////
//Dependencies//
////////////////
var express = require('express'),
    hash = require('bcrypt-nodejs'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

///////////////
//User Schema//
///////////////
var User = require('./server/models/users.js');

///////////////
//Controllers//
///////////////


////////////
//Express//
///////////
var app = express();

///////////////////
//Require Routes//
//////////////////
var routes = require('./server/routes/api.js');

//////////////////////
//Express MiddleWare//
/////////////////////
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '/public')));

//////////////////////
//Configure Passport/
/////////////////////
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

///////////
//Routes//
//////////
app.use('/user/', routes);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

///////////////////
//Error Handlers//
//////////////////
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

module.exports = app;

////////////////
//Connections//
///////////////

var port = 8090;
var mongoUri = "mongodb://localhost:27017/shopagram";

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
  console.log('listening on port: ', port);
});
