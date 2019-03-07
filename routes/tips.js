var data = require("../data.json");

exports.viewTips = function(req, res) {
    res.render('tips', data);
};