const categoryDB = require('../models/products');
const q = require('q');

let productsController = {
    searchProducts : function(req, res) {
        let p1 = categoryDB.getProducts().catch(err => {
                console.log("Error: " + err);});
        let p2 = categoryDB.getBrands().catch(err => {
                console.log("Error: " + err);});
        let p3 = categoryDB.getTypes().catch(err => {
                console.log("Error: " + err);});
        q.all([p1,p2,p3]).spread(function(temp1,temp2,temp3) {
            res.render("_shop/shop", {
                user: req.session.user,
                productsList: temp1,
                brandsList:temp2,
                typesList:temp3,
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

        let p2 = categoryDB.getBrands().catch(err => {
                console.log("Error: " + err);});

        let p3 = categoryDB.getTypes().catch(err => {
                console.log("Error: " + err);});

        q.all([p1,p2,p3]).spread(function(temp1,temp2,temp3) {
            res.render("_shop/shop", {
                user: req.session.user,
                productsList: temp1,
                brandsList:temp2,
                typesList:temp3,
                layout: "index"
            });
        })
    }
}

module.exports = productsController;