var Connection = require("tedious").Connection;

var config = {
    userName: "sa",
    password: "12NikV@r",
    server: "hapy",
    options: { database: "hapy" }
}

var connectionMSSQL = new Connection(config);

connectionMSSQL.on("connect", (err) => {
    console.log(err);
});


module.exports = connectionMSSQL;