var mongodb = require("mongodb");
var Schema = mongodb.Schema;

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});