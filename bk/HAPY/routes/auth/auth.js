var jwt = require("jwt-simple");

var auth = {
    login: function(req, res) {
        var username = req.body.username || "";
        var password = req.body.password || "";
        
        if (username == "" || password == "") {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid Credentials"
            });
            return;
        }
        var dbUserObj = auth.validate(username, password);

        if (!dbUserObj) {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }

        if (dbUserObj) {
            res.json(getToken(dbUserObj));
        }
    },
    validate: function(username, password) {
        var dbUserObj = {
            name: "Administrator",
            role: "admin"
        };
        return dbUserObj;
    },
    validateUser: function() {
        var dbUserObj = {
            name: "Administrator",
            role: "admin"
        };
        return dbUserObj;
    }
}

function getToken(user) {
    var expires = expiresIn(8);
    var token = jwt.encode({
        exp: expires
    },
    require("../../server/config/secret/")());

    return {
        token: token,
        expires: expires,
        username: user
    };
}

function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;