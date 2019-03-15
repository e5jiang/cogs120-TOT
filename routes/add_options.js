var data = require("../data.json");

exports.addOptions = function(request, response) {
	// Your code goes here
	json = {'option1': request.query.option1, 'option2':  request.query.option2};
	console.log(json);
	data.options.push(json);
	data.history.push(json);
	response.render('decision', data);
}