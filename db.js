var mongoose = require('mongoose');
var Env = require('dotenv');

Env.load();

const uri = process.env.MONGO_URI;
mongoose.connect(uri, function() {
	console.log('mongodb is connected');
});

module.exports = mongoose;
