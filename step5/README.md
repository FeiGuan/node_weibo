#Step5

###Database accessing, sessions
---
####-1. MongoDB<br />
[Download MongoDB](http://www.mongodb.org/downloads)<br />
[Install MongoDB](http://docs.mongodb.org/manual/tutorial/getting-started/)<br />
After installation, type in
```javascript
mongo
```
to connect to database<br />

Useful commands:<br /><br />
<b>Database manipulation<b/>
display the curent database
```javascript
db
```
<br />
display the list of databases
```javascript
show dbs
```
<br />
switch to a database
```javascript
use mydb
```
<br />
show collections of current database
```javascript
show collections
```
<br />
<b>Insert and update</b>
<br />
create two documents named **j** and **k** in json format
```javascript
j = { name : "mongo"}
k = { x : 3 }
```
<br />
insert j and k into a collection named **testData**
```javascript
db.testData.insert( j )
db.testData.insert( k )
```
<br />
display all documents in a collection
```javascript
db.testData.find()
```
<br />
query for specific documents
```javascript
db.testData.find({x : 18})
```
<br />
update a document in the form of<br />
[db].[collection].update({query key-value pairs}, {$set: {update key-value pairs}}, {upsert: true})
```javascript
db.testData.update({type : "book", item : "journal" },{$set : {qty: 10}},{upsert : true})
```
Note if the desired document does not exist, MongoDB create a new document:

<br />
```javascript
{ "_id" : ObjectId("51e8636953dbe31d5f34a38a"), "item" : "journal", "qty" : 10, "type" : "book" }
```
_id is a unique value assigned to the document
<br />
<br />

save(): [if you provide _id in the document, it will update. If you don't it will insert](http://alvinalexander.com/source-code/scala/mongodb-whats-difference-between-save-and-insert-mongodb)
<br /><br />
<b>Query</b>
<br />
AND Condition: use , to separate conditions
```javascript
db.testData.find({type : 'find', price : {$lt: 9}})
```
OR Condition: use $or: [] to include the conditions
```javascript
db.testData.find(
	{ $or: [
		{ qty: {$gt: 100}},
		{ price: {$lt: 9}}
		]
	}
)
```
Comparison Operators:<br />
$gt $gte $in $lt $lte $ne $nin 
<br />
<b>Remove</b>
```javascript
db.testDate.remove({type : 'food'})
```

####-2. Connect to MongoDB<br />
In dependencies of <b>package.json</b>, add a dependency:<br />
```javascript
	"mongodb": ">= 0.9.9"
```
and run
```javascript
npm install
```
to update dependent modules<br /><br />
Create <b>settings.js</b> in project directory to save database configurations.<br /><br />
Create <b>models/db.js</b>

####-3. Session<br />
Cookie stored at client side can realize sessions on status-less HTTP. Express provides session middleware, storing user info in memory by default, but we can save it in MongoDB. To achieve this, we need a module named <b>mongoose</b>. Add it to dependencies.
```javascript
	"mongoose":"*"
```
In <b>app.js</b>, add database cookie parser configuration. So we can get session object via
```javascript
req.session
```

####-4. Register and login<br />
<b>Register UI design</b>
![alt text](https://raw.githubusercontent.com/FeiGuan/node_weibo/master/step5/Screenshot-register.png "Logo Title Text 1")
<br />
<b>Logic of register:</b><br/>
#####check if the passwords are the same, if not, display error and redirect to register page.
Call submitted data
```javascript
req.body['password']
```
Display error
```javascript
req.flash('error': 'error info');
```
Redirect
```
return res.redirect('/reg');
```



