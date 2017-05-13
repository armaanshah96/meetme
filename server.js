var express = require('express');
var engines = require('consolidate');
var path = require('path');
var bodyParser = require('body-parser');

// var Groups = require('./models/groups');
var mongoose = require('mongoose');
var Env = require('dotenv');
var fs = require('fs');
//var mustache = require('express-mustache');

var GroupController = require('./controllers/GroupController');

var UserController = require('./controllers/UserController');


Env.load();

var app = new express();

app.engine('html', engines.mustache);
//app.engine('html', mustacheExpress());
// Static files are accessible from both public and node_modules directories
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.set('view engine', 'html');
//app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
var port = process.env.PORT || 3000;
app.set('port', port);

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/groups', GroupController);

app.use('/users', UserController);


app.get('/', function(request, response) {
  response.render('index.html');
});


app.get('/fillCal', function(request, response) {
  response.render('fillCal.html');
});

app.listen(app.get('port'), function() {
  console.log('Express app listening on port ' + app.get('port'));
});
