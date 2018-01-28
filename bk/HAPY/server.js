var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var dbConfig = require("./server/config/db/index");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());

app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type, Accept, X-Access-Token, X-Key");
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});

app.all("/api/v0.1/*", [require("./middlewares/validateRequest")]);
app.use("/", require("./routes"));

app.use(function() {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});


app.set("port", process.env.PORT || 3000);

var server = app.listen(app.get("port"), "10.0.0.4", function() {
    
});