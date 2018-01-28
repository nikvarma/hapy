var User = require("../models/users/index");

var newUser = User({
    name: "Nik Varma",
    password: "12nikvar"
});

newUser.save(function() {
    if (err) {
        throw err;
        console.log(err);
    }
});