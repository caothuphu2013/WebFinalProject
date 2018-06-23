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
    }
}

module.exports = products;