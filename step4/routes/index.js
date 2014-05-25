exports.index = function(req, res){
	res.render('index', {title:'Weibo'});
};

exports.hello = function(req, res){
	res.send('The time is ' + new Date().toString());
};

exports.user = function(req, res){
	res.send('user: ' + req.params.username);
};


