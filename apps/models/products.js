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
    }
}

module.exports = products;