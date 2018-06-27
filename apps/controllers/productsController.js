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
        let type = req.body.typeSearch;
        var p1;
        if (type === "price") {
            p1 = categoryDB.lookPrice(word).catch(err => {
                console.log("Error: " + err);});
        } 
        else if (type === "name") {
            word = '%' + word + '%';
            p1 = categoryDB.lookNameLike(word).catch(err => {
                console.log("Error: " + err);});
        }
        else if (type === "type") {
            word = '%' + word + '%';
            p1 = categoryDB.lookTypeLike(word).catch(err => {
                console.log("Error: " + err);});
        }     
        else if (type === "brand") {
            word = '%' + word + '%';
            p1 = categoryDB.lookBrandLike(word).catch(err => {
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
    ,
    filter : function(req, res) {
        let brand = req.body.brand;
        let type = req.body.type;
        let brandstr = "";
        let typestr = "";
        for(let index in brand) { 
            brandstr += "'" + brand[index] + "',"; 
        } 
        brandstr = brandstr.slice(0, -1);

        for(let index in type) { 
            typestr += "'" + type[index] + "',"; 
        } 
        typestr = typestr.slice(0, -1);

        let p1 = categoryDB.filterProducts(brand,type).catch(err => {
                console.log("Error: " + err);});

        q.all([p1]).spread(function(temp1) {
            res.render("_shop/shop", {
                user: req.session.user,
                productsList: temp1,
                noProducts: temp1.length === 0,
                brandcheck:brand,
                typecheck:type,
                layout: "index"
            });
        })
    }
}

module.exports = productsController;