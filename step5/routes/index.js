var crypto = require('crypto');
var User = require('../models/user')

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index', {
			title: 'Home'
		});
	});
	
	app.get('/reg', function(req, res){
		res.render('reg', {
			title: 'Register'
		});
	});

	app.post('/reg', function(req, res){
		if( req.body['password'].length < 6){
			console.log('not same');
			req.flash('error', 'Password is too short');
			return res.redirect('/reg');
		}
		if( req.body['password-repeat'] != req.body['password']){
			console.log('not same');
			req.flash('error', 'Passwords are not the same');
			return res.redirect('/reg');
		}
		var md5 = crypto.createHash('md5');
		var password = md5.update(req.body.password).digest('base64');
		var newUser = new User({
			username: req.body.username,
			password: password,
		});
		console.log(newUser);
		var findUser = User.find({username: newUser.username}, function(err, docs){
			console.log(docs);
			if(docs.length)
				err = 'Username already exists.';
			if(err){
				req.flash('error', err);
				return res.redirect('/reg');
			}
		});
		
		newUser.save(function(err){
			if(err){
				console.log(err);
				req.flash('error', err);
				return res.redirect('/reg');
			}
			req.session.user = newUser;
			req.flash('success', 'Register success!');
			res.redirect('/');
		});
	});

	app.get('/login', checkNotLogin);
	app.get('/login', function(req, res){
		res.render('login', {title: 'Login'});
	});

	
	app.post('/login', function(req, res){
		var md5 = crypto.createHash('md5');
		var password = md5.update(req.body.password).digest('base64');
		var newUser = new User({
			username: req.body.username,
			password: password,
		});
		var findUser = User.findOne({username: newUser.username}, function(err, user){
			if(user === null)
				err = 'User does not exist.';
			else if(newUser.password != user.password)
				err = "Authentication failed."
			if(err){
				req.flash('error', err);
				return res.redirect('/login');
			}
			console.log(user);
			req.session.user = user;
			console.log(req.session);
			req.flash('success', 'Login success!');
			res.redirect('/');
		});
		
	});

	app.get('/logout', checkLogin);
	app.get('/logout', function(req, res){
		req.session.user = null;
		req.flash('success', 'Logout success!');
		res.redirect('/');
	});

	function checkLogin(req, res, next){
		console.log(req.session);
		console.log(req.session.user);
		if(!req.session.user){
			console.log('not logged');
			req.flash('error', 'You are not logged');
			return res.redirect('/login');
		}
		next();
	}

	function checkNotLogin(req, res, next){
		console.log(req.session);
		console.log(req.session.user);
		if(req.session.user){
			console.log('logged');
			req.flash('error', 'You are already logged');
			return res.redirect('/');
		}
		next();
	}
};
