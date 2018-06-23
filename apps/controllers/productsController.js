const categoryDB = require('../models/products');
const q = require('q');

let productsController = {
    searchProducts : function(req, res) {
        let p1 = categoryDB.getProducts().catch(err => {
                console.log("Error: " + err);});
        q.all([p1]).spread(function(temp1) {
            res.render("_shop/shop", {
                user: req.session.user,
                productsList: temp1,
                noProducts: temp1.length === 0,
                layout: "index"
            });
        })
    }
    ,
    searchProductsAuto : function(req, res) {
        let id = req.query.id;
        let att = req.query.att;
        let p1 = categoryDB.lookProduct(att,id).catch(err => {
                console.log("Error: " + err);});
        q.all([p1]).spread(function(temp1) {
            res.render("_shop/shop", {
                user: req.session.user,
                productsList: temp1,
                noProducts: temp1.length === 0,
                layout: "index"
            });
        })
    }
    ,
    search : function(req, res) {
        let word = req.body.searchWhat;
        word = '%' + word + '%';
        let type = req.body.typeSearch;
        var p1;
        if (type === "name") {

            p1 = categoryDB.lookNameLike(word).catch(err => {
                console.log("Error: " + err);});
        }
        else if (type === "type") {
            p1 = categoryDB.lookTypeLike(word).catch(err => {
                console.log("Error: " + err);});
        }     
        q.all([p1]).spread(function(temp1) {
            res.render("_shop/shop", {
                user: req.session.user,
                productsList: temp1,
                noProducts: temp1.length === 0,
                layout: "index"
            });
        })
    }
}

module.exports = productsController;