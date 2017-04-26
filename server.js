var express = require('express');
var engines = require('consolidate');
var path = require('path');

var app = new express();

app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.set('port', port);


app.get('*', function(request, response) {
  response.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Express app listening on port ' + app.get('port'));
});
