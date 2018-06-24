const db = require("./database.js");
const q = require('q');

let products = {
    getProducts: function() {
        let d = q.defer();
        let sql = "select id, name, price, picture from product";
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    lookProduct: function(att,id) {
        let d = q.defer();
        let sql = "select id, name, price, picture from product where "+att+" = ?";
        db.query(sql,[id], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    lookNameLike: function(word) {
        let d = q.defer();
        let sql = "select id, name, price, picture from product where name like ?";
        db.query(sql,[word], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    lookTypeLike: function(word) {
        let d = q.defer();
        let sql = "select product.id, product.name, price, picture from product,type where product.type = type.id and type.name like ?";
        db.query(sql,[word], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    filterProducts: function(brand, type) {
        let d = q.defer();
        let sql = `select product.id, product.name, price, picture 
            from product,brand,type 
            where product.brand = brand.id and product.type = type.id
            and brand.name in (?) and type.name in (?)`;
        db.query(sql,[brand,type], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);       
        });
        return d.promise;
    },
    getProductStatistic: function() {
        let d = q.defer();
        let sql = "select name, price, buyTimes from product";
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getBrandStatistic: function() {
        let d = q.defer();
        let sql = "select b.name, sum(buyTimes) as soldProduct, sum(price*buyTimes) as revenue from laptop_db.product p, laptop_db.brand b group by b.id, b.name";
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getTypeStatistic: function() {
        let d = q.defer();
        let sql = "select t.name, sum(buyTimes) as soldProduct, sum(price*buyTimes) as revenue from laptop_db.product p, laptop_db.type t group by t.id, t.name";
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    }
}

module.exports = products;