var tasks = require("../tasks.json");

exports.viewOptions = function(req, res) {
    res.render('options', tasks);
};