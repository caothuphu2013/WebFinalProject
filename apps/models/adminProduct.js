const db = require("./database.js");
const q = require('q');
const config = require('../../config/configproduct.js')

let adminProducts = {
    getProducts: function() {
        let d = q.defer();
        let sql = "select id, name, price,inware,picture from product";
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
        let sql = "select id, name, price, picture,inware from product where "+att+" = ?";
        db.query(sql,[id], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    lookPrice: function(word) {
        let d = q.defer();
        let sql = "select id, name, price, picture,inware from product where price = ?";
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
    lookBrandLike: function(word) {
        let d = q.defer();
        let sql = "select product.id, product.name, price, picture from product,brand where product.brand = brand.id and brand.name like ?";
        db.query(sql,[word], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getProductStatistic: function() {
        let d = q.defer();
        let sql = "select name, price, buyTimes, inware from product";
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    lookNameLike: function(word) {
        let d = q.defer();
        let sql = "select name, price, buyTimes, inware from product where name like ?";
        db.query(sql,[word], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getBrandStatistic: function() {
        let d = q.defer();
        let sql = `select b.name, sum(buyTimes) as soldProduct, sum(price*buyTimes) as revenue, sum(inware) as inware
                    from laptop_db.product p, laptop_db.brand b where p.brand = b.id
                    group by b.name`;
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
        let sql = `select t.name, sum(buyTimes) as soldProduct, sum(price*buyTimes) as revenue, sum(inware) as inware
                    from laptop_db.product p, laptop_db.type t
                    where p.type = t.id 
                    group by t.id, t.name`;
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getType: function() {
        let d = q.defer();
        let sql = "select id, name from laptop_db.type"
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getBrand: function() {
        let d = q.defer();
        let sql = "select id, name from laptop_db.brand"
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getOrders: function() {
        let d = q.defer();
        let sql = "select idBill, time, status, total from laptop_db.bill"
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getOrderInfo: function(idBill) {
        let d = q.defer();
        let sql = "select idBill_info, product, count from laptop_db.bill_info where idBill = ?"
        db.query(sql, [idBill], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
}

module.exports = adminProducts;