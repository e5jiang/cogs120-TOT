var tasks = require("../tasks.json");

exports.viewHistory = function(req, res) {
    res.render('history', tasks);
};