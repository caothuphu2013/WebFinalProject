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
    ,
    insertBill: function(obj) {
        let d = q.defer();
        let sql = `insert into bill(idBill,customer, name, time, state, address, phone, email, payMethod, total)
        values(?,?,?,?,?,?,?,?,?,?)`;
        db.query(sql, [obj.idBill, obj.username, obj.name, obj.time, obj.state, obj.address, obj.phone, obj.email, obj.payMethod, obj.total], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    deleteProductIntoCart: function(id_Cart) {
        let d = q.defer();
        let sql = `delete from product_cart where idCart = ?`;
        db.query(sql, [id_Cart], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    updateCart: function(idCart, total) {
        let d = q.defer();
        let sql = `update cart set total=? where idCart = ?`;
        db.query(sql, [total, idCart], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    findChangeOfProduct: function(idCart) {
        let d = q.defer();
        let sql = `Select p.buyTimes, p.inware From product p, product_cart pc 
        Where pc.idCart = ? and pc.product = p.id `;
        db.query(sql, [idCart], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    insertBill_info: function(idBill_info, idBill, product, count) {
        let d = q.defer();
        let sql = `insert into bill_info(idbill_info, idBill, product, count) 
        Select   `;
        db.query(sql, [idBill_info, idBill, product, count], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
}

module.exports = cart;