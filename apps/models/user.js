const db = require("./database.js");
const q = require('q');
const helper = require('../helper/crypto_password');

let users = {
    insertUser: function(user) {
        var d = q.defer();
        var sql = `INSERT INTO account(username, password, type) VALUES (?, ?, 0);`;
        db.query(sql, [user.email, user.password], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
            var sql = `INSERT INTO user_info(username, name, email) VALUES (SELECT username FROM account WHERE username = ?, ?, ?);`
            db.query(sql, [user.email, user.firstname + ' ' + user.lastname, user.email], (err, results) => {
                if (err) {
                    d.reject(error);
                }
                d.resolve(results);
            })
        });
        return d.promise;
    }
}

module.exports = users;