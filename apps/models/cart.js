const db = require("./database.js");
const q = require('q');

let cart = {
    findByProductIntoCart: function(username) {
        let d = q.defer();
        let sql = `Select p.id, p.picture, p.name, p.price, pc.count, c.total
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
    findByIdProductCart: function(idProduct_Cart) {
        let d = q.defer();
        let sql = `Select * From product_cart Where idproduct_cart = ?`;
        db.query(sql, [idProduct_Cart], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    } 
    ,
    findByCart: function(id_cart) {
        let d = q.defer();
        let sql = `Select * From cart Where idCart = ?`;
        db.query(sql, [id_cart], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    insertProductCart: function(idProduct_cart, idCart, idProduct, count) {
        let d = q.defer();
        let sql = `Insert into product_cart(idproduct_cart, idCart, product, count)
            values(?, ?, ?, ?) `;
        db.query(sql, [idProduct_cart, idCart, idProduct, count], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    updateProductCart: function(idProduct_cart, count) {
        let d = q.defer();
        let sql = `update product_cart set count=? where idproduct_cart = ?`;
        db.query(sql, [count, idProduct_cart], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    },
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
    removeProduct: function(idProduct_cart) {
        let d = q.defer();
        let sql = `delete from product_cart where idproduct_cart = ?`;
        db.query(sql, [idProduct_cart], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }
    ,
    findByProducts: function(idProduct) {
        let d = q.defer();
        let sql = `Select p.id, p.name, p.price, p.picture From product p where id = ?`;
        db.query(sql, [idProduct], (error, results) => {
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
    findByCount: function(idCart) {
        let d = q.defer();
        let sql = `Select sum(pc.count) as count From product_cart pc where idCart = ? Group By idCart`;
        db.query(sql, [idCart], (error, results) => {
            if (error)
                d.reject(error);
            d.resolve(results);
        });
        return d.promise;
    }

}

module.exports = cart;