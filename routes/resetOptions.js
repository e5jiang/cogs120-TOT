var data = require("../data.json");

exports.addResetOptions = function(request, response) {
	// Your code goes here
	console.log(json);
    data.options.length = 0
	response.render('index', data);
}