var express = require("express");
var router = express.Router();

var auth = require("./auth/auth");
var users = require("../api/v0.1/db/mssql/users/users");

router.post("/login", auth.login);

router.get("/api/v0.1/users/getallusers", users.getAll);

module.exports = router;