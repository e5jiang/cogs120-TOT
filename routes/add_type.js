var data = require("../data.json");

exports.addType = function(request, response) {
	// Your code goes here
	json = {'type': request.query.input_task, 'weight': request.query.input_weight};
	console.log(json);
	data.list.push(json);
	response.render('profile', data);
}