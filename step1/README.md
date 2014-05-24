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
|Key|Value|Example|
|---|:---:|---:|
|views|location of view files|__dirname+'/views'|
|view engine|view template engine|ejs, jade, haml|
####--package.json
