var data = require("../data.json");

exports.addResetHistory = function(request, response) {
	// Your code goes here
	console.log(json);
    data.history.length = 0
	response.render('history', data);
}