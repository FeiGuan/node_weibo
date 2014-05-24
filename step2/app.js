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
app.get('/user/:username', routes.user);
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
