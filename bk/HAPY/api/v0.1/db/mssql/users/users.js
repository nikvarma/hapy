var users = {
    getAll: function(req, res) {
        var allUsers = data || [];
        res.json(allUsers);
    }
}

module.exports = users;