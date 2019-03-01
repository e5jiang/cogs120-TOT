var tasks = require("../tasks.json");

exports.viewProfile = function(req, res) {
    res.render('profile', tasks);
};