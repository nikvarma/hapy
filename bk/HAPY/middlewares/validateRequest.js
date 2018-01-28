var jwt = require("jwt-simple");
var validateUser = require("../routes/auth/auth").validateUser;

module.exports = function(req, res, next) {
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers["x-access-token"];
    var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers["x-key"];

    if (token || key) {
        try {
            var decoded = jwt.decode(token, require("../server/config/secret/")());
            
            if (decoded.exp <= Date.now()) {
                res.status(400);
                res.json({
                    "status": 400,
                    "message": "Token Expired"
                });
                return;
            }
            
            var dbUser = validateUser(key);

            if (dbUser) {
                if ((req.url.indexOf("Administrator") >= 0 && dbUser.role == "admin") || (req.url.indexOf("admin") < 0 && req.url.indexOf("/api/v0.1/") >= 0)) {
                    next();
                } else {
                    res.status(403);
                    res.json({
                        "status": 403,
                        "message": "Not Authorized"
                    });
                    return;
                }
            } else {
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid User"
                });
                return;
            }
        } catch(err) {
            res.status(500);
            res.json({
                "status": 500,
                "message": "Oops something went wrong"
            });
        }
    } else {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid Token or Key"
        });
        return;
    }
}
