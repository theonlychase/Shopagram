////////////////
//Dependencies//
////////////////
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

///////////////
//Controllers//
///////////////


////////////
//Express//
///////////
var app = express();

//////////////////////
//Express MiddleWare//
/////////////////////
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

//////////////
//Endpoints//
/////////////

////////////////
//Connections//
///////////////

var port = 3000;
var mongoUri = "mongodb://localhost:27017/ecommerce";

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
  console.log('listening on port: ', port);
});
