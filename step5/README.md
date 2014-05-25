#Step5

###Database accessing, sessions
---
-1. MongoDB<br />
[Download MongoDB](http://www.mongodb.org/downloads)<br />
[Install MongoDB](http://docs.mongodb.org/manual/tutorial/getting-started/)<br />
After installation, type in
```javascript
mongo
```
to connect to database
Useful commands:<br />
display the curent database
```javascript
db
```
display the list of databases
```javascript
show dbs
```
switch to a database
```javascript
use mydb
```
show collections of current database
```javascript
show collections
```
create two documents named **j** and **k** in json format
```javascript
j = { name : "mongo"}
k = { x : 3 }
```
insert j and k into a collection named **testData**
```javascript
db.testData.insert( j )
db.testData.insert( k )
```
display all documents in a collection
```javascript
db.testData.find()
```
query for specific documents
```javascript
db.testData.find({x : 18})
```
update a document in the form of<br />
[db].[collection].update({query key-value pairs}, {$set: {update key-value pairs}}, {upsert: true})
```javascript
db.testData.update({type : "book", item : "journal" },{$set : {qty: 10}},{upsert : true})
```
Note if the desired document does not exist, MongoDB create a new document:
```javascript
{ "_id" : ObjectId("51e8636953dbe31d5f34a38a"), "item" : "journal", "qty" : 10, "type" : "book" }
```
_id is a unique value assigned to the document


