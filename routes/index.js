var data = require("../data.json");

exports.view = function(req, res) {
    res.render('index', data);
    data['viewAlt'] = false;
};

exports.viewAlt = function(req, res){
	res.render('index', data);
	data['viewAlt'] = true;
};
