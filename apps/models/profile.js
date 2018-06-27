const db = require("./database.js");
const q = require('q');

let profile = {
    findByUserName: function(username) {
        let d = q.defer();
        let sql = `select user_info.*,account.image from user_info,account where user_info.username = account.username and account.username = ?`
        db.query(sql, [username], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    updateInfo: function(user) {
        let d = q.defer();
        let sql = `update user_info set name=?, birthday=?, sex=?, address=?, phone=?, email=? where username = ?`;
        db.query(sql, [user.name, user.birthday, user.sex, user.address, user.phone, user.email, user.username], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    },
    updateAvatar: function(user) {
        let d = q.defer();
        let sql = `update account set image=? where username = ?`;
        db.query(sql, [user.image, user.username], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
}
module.exports = profile;