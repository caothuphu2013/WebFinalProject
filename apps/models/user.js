const db = require("./database.js");
const q = require('q');


let users = {
    insertUser: function(user) {
        let d = q.defer();
        let sql = `INSERT INTO account(username, password, type, image) VALUES (?, ?, 0, ?);`;
        db.query(sql, [user.username, user.password, user.image], (error, results) => {
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
    },
    insertInfo: function(user) {
        let d = q.defer();
        let sql = `insert into user_info(username, name, birthday, sex, address, phone, email) values (?, ?, ?, ?, ?, ?, ?)`;
        
        db.query(sql, [user.username, user.name, user.birthday, user.sex, user.address, user.phone, user.email], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    },
    findByEmail: function(email) {
        let d = q.defer();
        let sql = `SELECT * FROM user_info WHERE email = ?`;
        db.query(sql, [email], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    },
    updatePassword: function(user) {
        let d = q.defer();
        let sql = `update account set password=? where username = ?`;
        db.query(sql, [user.password, user.username], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
}
module.exports = users;