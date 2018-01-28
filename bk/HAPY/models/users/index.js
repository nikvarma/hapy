var mongodb = require("mongodb");
var userSchema = require("../schema/index");

var User = mongodb.model('User', userSchema);

module.exports = User;

