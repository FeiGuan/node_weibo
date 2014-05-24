#Step1

---
###Get Express working
---
-Get [node.js](http://nodejs.org/download/) and [npm](https://www.npmjs.org/).
-Create directory /step1, cd into it.
```javascript
mkdir step1
```
```javascript
cd step1/
```
-Create a file package.json, write in the basic info of the project.
In terminal, type in 
```javascript
npm install 
```
to install all modules.
-Create file app.js, write in the server code.
In terminal, type in
```javascript
node app.js
```
-Server running on localhost:3000. Use your browser to see the results.
***
####--app.js
First, get server object from Express:
```javascript
	var app = module.exports = express.createServer();
```
After we get the server object, we should configure it, using <b>app.set</b> provided by Express
```javascript
	app.configure(function(){
		app.set([key], [value]);
	})
```
What parameters could be set:

Key | Value | Example
--- | --- | ---
views | location of view files | __dirname+'/views'
view engine | view template engine | ejs, jade, haml
basepath | used for 'res.redirect()' | /
view cache | enable view caching | true
strict routing | slashes are not ignored when enabled | true

As Express is based on [connect](http://www.senchalabs.org/connect/)
```javascript
app.use([middleware])
```
can be called to use middleware, there are 5:
Middleware | Function 
--- | ---
bodyParser | parse client request
methodOverride | customed HTTP method
router | routing support
static | static files
errorHandler | handles error

Then server uses <b>app.get</b> to route the requests, as the controller will expose a function to handle the request by <b>exports.[function_name]=function(req, res){}</b> Finally, launch the server.



####--package.json
