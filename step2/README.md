#Step2

###Routing
---
-1. Add a routing rule:<br/>
in <b>app.js</b> add a routing rule:
```javascript
	app.get('/hello', routes.hello);
```
in <b>index.js</b> add a callback controller function:
```javascript
	exports.hello = function(req, res){
		res.send('The time is ' + new Date().toString());
	};
```
-2. Add a routing rule with parameters:<br/>
in <b>app.js</b> add a routing rule:
```javascript
	app.get('/user/:username', routes.user);
```
in <b>index.js</b> add a callback controller function:
```javascript
	exports.user = function(req, res){
		res.send('user: ' + req.params.username);
	};
```

-3. RESTful routing rules:<br/>
Express designed functions for each HTTP method:

Method | Functions
--- | ---
GET | app.get(path, callback)
POST | app.post(path, callback)
PUT | app.put(path, callback)
DELETE | app.delete(path, callback)
PATCH | app.trace(path, callback)
CONNECT | app.connect(path, callback)
OPTIONS | app.options(path, callback)
ALL | app.all(path, callback)

Note that Express will match front rules first.

About ALL method:<br/>
<b>All</b> method can take all kinds of request matching the path. Normally, put it to the front of rules to deal with error situation.

```javascript
	app.all('[path]', function(req, res, next){
		if ([positive]){
			next(); // pass to the next rule
		}	
		else{
			next(new Error("error")); // pass with error infomation
		}
	});
	app.get('[path]', function(req, res){
		res.send(req.params.username);
	});
```
