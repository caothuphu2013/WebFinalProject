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
                layout: "index"
            });
        })
    }
}

module.exports = productsController;