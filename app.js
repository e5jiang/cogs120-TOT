
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var profile = require('./routes/profile');
var history = require('./routes/history');
var tips = require('./routes/tips');
var help = require('./routes/help');
var login = require('./routes/login');
var add_type = require('./routes/add_type');
var add_options = require('./routes/add_options');
var resetOptions = require('./routes/resetOptions');
var resetProfile = require('./routes/resetProfile');
var resetHistory = require('./routes/resetHistory');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/viewAlt', index.viewAlt);
app.get('/profile', profile.viewProfile);
app.get('/history', history.viewHistory);
app.get('/tips', tips.viewTips);
app.get('/help', help.viewHelp);
app.get('/login', login.viewLogin);
app.get('/add_type', add_type.addType);
app.get('/add_options', add_options.addOptions);
app.get('/resetOptions', resetOptions.addResetOptions);
app.get('/resetProfile', resetProfile.addResetProfile);
app.get('/resetHistory', resetHistory.addResetHistory);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
