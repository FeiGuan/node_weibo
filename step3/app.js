var express = require('express'),
routes = require('./routes');

var app = module.exports = express.createServer();

app.configure(function(){
	app.set('views', __dirname+'/views');
	app.set('view engine', 'ejs');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname+'/public'));
});

app.configure('development', function(){
	app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/hello', routes.hello);
var users = {
	'jason': {
		'name': 'Jason',
		'website': 'https://www.google.com'
	},
	'fei': {
		'name': 'Fei',
		'website': 'https://www.facebook.com'
	}
};
app.all('/user/:username', function(req, res, next){
	if(users[req.params.username]){
		next();
	}
	else{
		res.send(req.params.username + ' does not exist');
	}
});
app.get('/user/:username', function(req, res){
	res.send(JSON.stringify(users[req.params.username]));
});
app.put('/user/:username', function(req, res){
	res.send('Done');
});
app.get('/list', function(req, res){
	res.render('list', {
		title: 'List',
		items: [1990, 'fei', 'express', 'Node.js']
	});
};

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
