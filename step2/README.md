#Step2

---
###Routing
---
-Add a routing rule:
in <b>app.js</b> add a routing rule:
```javascript
	app.get('/hello', routes.hello);
```
in <b>index.js</b> add an exposed controller function:
```javascript
	exports.hello = function(req, res){
		res.send('The time is ' + new Date().toString());
	};
```
-Add a routing rule with parameters:
in <b>app.js</b> add a routing rule:
```javascript
	app.get('/user/:username', routes.user);
```
in <b>index.js</b> add an exposed controller function:
```javascript
	exports.user = function(req, res){
		res.send('user: ' + req.params.username);
	};
```
