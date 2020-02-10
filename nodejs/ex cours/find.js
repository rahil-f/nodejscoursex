const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoUrl = 'mongodb://localhost:27017/';
const dbName = 'oha';

MongoClient.connect(mongoUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});