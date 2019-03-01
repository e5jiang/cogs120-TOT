var tasks = require("../tasks.json");

exports.addOptions = function(request, response) {
	// Your code goes here
	json = {'option1': request.query.option1, 'option2':  request.query.option2};
	console.log(json);
	tasks.options.push(json);
	response.render('options', tasks);
}