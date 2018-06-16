const db = require('./database');
const q = require('q');

let profile = {
    findByUserName: function(username) {
        let d = q.defer();
        let sql = `select * from user_info where username = ?`
        db.query(sql, [username], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    insertInfo: function(user) {
        let d = q.defer();
        let sql = `insert into user_info(username, name, birthday, sex, address, phone, email) values (?, ?, NULL, NULL, NULL, ?, ?)`;
        db.query(sql, [user.username, user.name, user.phone, user.email], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
}

module.exports = profile;