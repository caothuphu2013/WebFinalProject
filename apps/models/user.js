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
        });
        return d.promise;
    }
}

module.exports = users;