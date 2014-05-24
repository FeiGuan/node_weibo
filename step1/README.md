#Step1

---
###Get Express working
---
1. Get [node.js](http://nodejs.org/download/) and [npm](https://www.npmjs.org/).
2. Create directory /step1, cd into it.
...```javascript
...mkdir step1
...```
```javascript
cd step1/
```
3. Create a file package.json, write in the basic info of the project.
4. In terminal, type in 
```javascript
npm install 
```
to install all modules.
5. Create file app.js, write in the server code.
6. In terminal, type in
```javascript
node app.js
```
7. Server running on localhost:3000. Use your browser to see the results.
---
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
####--package.json
