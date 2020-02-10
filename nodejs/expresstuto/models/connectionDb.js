const mariadb = require('mariadb/callback');
const conn = mariadb.createConnection({
    user: 'felix',
    database: 'livre',
    host: 'localhost',
    password: ''
});

conn.connect(err => {
    if (err) {
        console.log("not connected due to error: " + err);
    } else {
        console.log("connected ! connection id is " + conn.threadId);
    }
});

module.exports = conn;