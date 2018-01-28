var mssql = require("./mssql");
var nosql = require("./nosql");

var config = {
    mmssql: mssql,
    nosql: nosql
};


module.exports = config;