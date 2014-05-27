var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var user = new Schema({
	id: ObjectId
	, username: String
	, password: String
});

module.exports = mongoose.model('User', user);
