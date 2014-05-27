var crypto = require('crypto');
var User = require('../models/user');
var Post = require('../models/post');


module.exports = function(app){
	app.get('/', function(req, res){
		var findAllPost = Post.find({}, function(err, posts){
				if(err){
					posts = [];
				}
				res.render('index', {
					title: 'Home',
					posts: posts
				});
			});
	});
	
	app.get('/reg', function(req, res){
		res.render('reg', {
			title: 'Register'
		});
	});

	app.post('/reg', function(req, res){
		if( req.body['password'].length < 6){
			req.flash('error', 'Password is too short');
			return res.redirect('/reg');
		}
		if( req.body['password-repeat'] != req.body['password']){
			req.flash('error', 'Passwords are not the same');
			return res.redirect('/reg');
		}
		var md5 = crypto.createHash('md5');
		var password = md5.update(req.body.password).digest('base64');
		var newUser = new User({
			username: req.body.username,
			password: password,
		});
		var findUser = User.find({username: newUser.username}, function(err, docs){
			if(docs.length)
				err = 'Username already exists.';
			if(err){
				req.flash('error', err);
				return res.redirect('/reg');
			}
		});
		
		newUser.save(function(err){
			if(err){
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
			req.session.user = user;
			req.flash('success', 'Login success!');
			res.redirect('/');
		});
		
	});

	app.post('/post', checkLogin);
	app.post('/post', function(req, res){
		var currentUser = req.session.user;
		var post = new Post({username: currentUser.username, content: req.body.content, time: new Date()});
		post.save(function(err){
			if(err){
				req.flash('error', err);
				return res.redirect('/');
			}
			req.flash('success', 'Post success!');
			res.redirect('/u/'+currentUser.username);
		});
	});

	app.get('/u/:user', function(req, res){
		var findTheUser =User.findOne({username: req.params.user}, function(err, userRec){
			if(userRec === null)
				err = 'User does not exist.';
			if(err){
				req.flash('error', err);
				return res.redirect('/');
			}
			var findAllPost = Post.find({username: userRec.username}, function(err, posts){
				if(err){
					req.flash('error', err);
					return res.redirect('/');
				}
				res.render('user', {
					title: userRec.username,
					posts: posts
				});
			});
		});
	});

	app.get('/logout', checkLogin);
	app.get('/logout', function(req, res){
		req.session.user = null;
		req.flash('success', 'Logout success!');
		res.redirect('/');
	});

	function checkLogin(req, res, next){
		if(!req.session.user){
			req.flash('error', 'You are not logged');
			return res.redirect('/login');
		}
		next();
	}

	function checkNotLogin(req, res, next){
		if(req.session.user){
			req.flash('error', 'You are already logged');
			return res.redirect('/');
		}
		next();
	}
};
