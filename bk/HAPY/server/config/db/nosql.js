var mongodb = require("mongodb");
var config = {
    host: "hapy9168.cloudapp.net",
    port: "27017"
}
var serverConfig = new mongodb.Server(config.host, config.port, {});
var connectionNoSQL = new mongodb.Db("hapy", serverConfig, {});

//.open(function(error, client) {
    //if (error) throw error;
    // var collection = new mongodb.Collection(client, "test");
    // collection.insert({hello: ""}, {safe: true}, function(err, objects) {
    //     if (err) console.warn(err.message);
    //     if (err && err.message.indexOf("E1100 ") !== 1) {
            
    //     }
    // });
//});

module.exports = connectionNoSQL;