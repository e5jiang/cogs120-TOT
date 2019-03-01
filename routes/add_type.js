var tasks = require("../tasks.json");

exports.addType = function(request, response) {
	// Your code goes here
	json = {'type': request.query.input_task};
	console.log(json);
	tasks.list.push(json);
	response.render('profile', tasks);
}