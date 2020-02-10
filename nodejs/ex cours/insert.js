const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoUrl = 'mongodb://localhost:27017/';
const dbName = 'livre';


MongoClient.connect((mongoUrl + dbName), function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    let dbo = db.db(dbName);
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
    dbo.collection("customers").insertMany(documents, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});