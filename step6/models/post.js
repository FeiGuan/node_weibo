var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var post = new Schema({
	id: ObjectId
	, username: String
	, content: String
	, time: Date
});

module.exports = mongoose.model('Post', post);
