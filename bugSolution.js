```javascript
// Correct use of $inc operator
db.collection.updateOne({ name: "John" }, { $inc: { age: 1 } });
//Alternative using $set for string fields
db.collection.updateOne({ name: "John" }, {$set: { "age": parseInt("25") + 1}});
//Ensure correct data type during insertion
db.collection.insertOne({ name: "Jane", age: 30 });
```