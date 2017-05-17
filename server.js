var express = require('express');
var engines = require('consolidate');
var path = require('path');
var bodyParser = require('body-parser');

// var Groups = require('./models/groups');
var mongoose = require('mongoose');
var Env = require('dotenv');
var fs = require('fs');
var GroupController = require('./controllers/GroupController');

var UserController = require('./controllers/UserController');


Env.load();

var app = new express();

app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.set('port', port);

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/groups', GroupController);

app.use('/users', UserController);


app.get('/', function(request, response) {
    var data = {
        dateRows: [
            { dates : [1,2,3,4,5,6,7] }, 
            { dates : [8,9,10,11,12,13,14] }, 
            { dates : [15,16,17,18,19,20,21] },
            { dates : [22,23,24,25,26,27,28] },
            { dates : [29,30,31] }
        ]
    };
  response.render('index', data);
});

app.listen(app.get('port'), function() {
  console.log('Express app listening on port ' + app.get('port'));
});
