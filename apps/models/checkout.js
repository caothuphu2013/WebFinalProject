const db = require("./database.js");
const q = require('q');

let cart = {
    findByProductIntoCart: function(username) {
        let d = q.defer();
        let sql = `Select p.id, p.picture, p.name, p.price, pc.count
                From cart c, product_cart pc, product p
                Where c.customer = ? and pc.idCart = c.idCart and pc.product = p.id`;
        db.query(sql, [username], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    findByTotal: function(username) {
        let d = q.defer();
        let sql = `Select c.total From cart c where customer = ?`;
        db.query(sql, [username], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
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
}

module.exports = cart;