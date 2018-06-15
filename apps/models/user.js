const db = require("./database.js");
const q = require('q');

let users = {
    insertUser: function(user) {
        let d = q.defer();
        let sql = `INSERT INTO account(username, password, type) VALUES (?, ?, 0);`;
        db.query(sql, [user.username, user.password], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    findByUsername: function(username) {
        let d = q.defer();
        let sql = `SELECT * FROM account WHERE username = ?`;
        db.query(sql, [username], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
}

module.exports = users;