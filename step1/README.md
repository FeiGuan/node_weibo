#Step1

---
###Build a server based on Express
---
-1. Get [node.js](http://nodejs.org/download/) and [npm](https://www.npmjs.org/). <br/>
-2. Create directory /step1, cd into it.
```javascript
mkdir step1
```
```javascript
cd step1/
```
-3. Create a file package.json, write in the basic info of the project.
In terminal, type in 
```javascript
npm install 
```
to install all modules.
-4. Create file app.js, write in the server code.
In terminal, type in
```javascript
node app.js
```
-5. Server running on localhost:3000. Use your browser to see the results.
***
####--package.json
We use Express 2.5.8 and ejs template.

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

Then server uses <b>app.get</b> to route the requests, as the controller will expose a function to handle the request by 
```javascript
exports.[function_name]=function(req, res){}
```

Finally, launch the server.

####--routes/index.js
Router file, act as controller, make response to the request distributed by server.

<b>res.render()</b> takes the name of template file, and name-value pair of variables as json

```javascript
	res.render('index', {title: 'Express'});
```

####--views/index.ejs
The template file, using tag <b><%=  %></b> to render referenced variables.

```html
	<%= title %>
```

####--views/layout.ejs
The extended template file, using tag <b><%- body %></b> containing the unique contents of each template.

```html
	<%- body %>
```


