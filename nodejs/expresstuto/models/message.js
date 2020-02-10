let conn = require('./connectionDb');

class Message {
    static create(content) {
        conn.query("INSERT INTO livreOr SET content = ?, submission_date = ?", [content, new Date()], (err, result) => {

            if (err) throw err;
            console.log("1 record inserted");
        });
    }
}


module.exports = Message;