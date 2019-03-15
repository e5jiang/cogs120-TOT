var data = require("../data.json");

exports.viewDecision = function(req, res) {
    res.render('decision', data);
}