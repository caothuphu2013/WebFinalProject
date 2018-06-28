const categoryDB = require('../models/products');
const q = require('q');
const config = require('../../config/configproduct.js')

let productsController = {
    searchProducts : function(req, res) {
        var page = req.query.page;
        if (!page) {
            page = 1;
        }
        var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
        let p1 = categoryDB.getProducts(offset).catch(err => {
                console.log("Error: " + err);});
        let p2 = categoryDB.countProducts().catch(err => {
                console.log("Error: " + err);});
        q.all([p1,p2]).spread(function(pRows,countRows) {
            var total = countRows[0].count;
            var nPages = total / config.PRODUCTS_PER_PAGE;
            if (total % config.PRODUCTS_PER_PAGE > 0) {
                nPages++;
            }
            var numbers = [];
            for (i = 1; i <= nPages; i++) {
                numbers.push({
                value: i,
                isCurPage: i === +page
                });
            }
            res.render("_shop/shop", {
                user: req.session.user,
                allProduct:1,
                productsList: pRows,
                noProducts: pRows.length === 0,
                page_numbers: numbers,
                layout: "index"
            });
        })
    }
    ,
    searchProductsAuto : function(req, res) {
        var page = req.query.page;
        if (!page) {
            page = 1;
        }
        var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
        let id = req.query.id;
        let att = req.query.att;

        let p1 = categoryDB.lookProduct(att,id,offset).catch(err => {
                console.log("Error: " + err);});
        let p2 = categoryDB.countlookProduct(att,id).catch(err => {
                console.log("Error: " + err);});

        q.all([p1,p2]).spread(function(temp1,countRows) {
            var total = countRows[0].count;
            var nPages = total / config.PRODUCTS_PER_PAGE;
            if (total % config.PRODUCTS_PER_PAGE > 0) {
                nPages++;
            }
            var numbers = [];
            for (i = 1; i <= nPages; i++) {
                numbers.push({
                value: i,
                isCurPage: i === +page
                });
            }
            res.render("_shop/shop", {
                user: req.session.user,
                productsList: temp1,
                noProducts: temp1.length === 0,
                page_numbers: numbers,
                searchID:id,
                searchType:att,
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
        let beginPrice = +req.body.beginPrice;
        let endPrice = +req.body.endPrice;
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

        let p1 = categoryDB.filterProducts(brand,type,beginPrice,endPrice).catch(err => {
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