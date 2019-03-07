var data = require("../data.json");

exports.addResetProfile = function(request, response) {
	// Your code goes here
	console.log(json);
    data.list.length = 0
	response.render('profile', data);
}