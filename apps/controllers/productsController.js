const categoryDB = require('../models/products');
const q = require('q');

let productsController = {
    searchproducts : function(req, res) {
        // Ta xử lý phần thanh địa chỉ nhé... Tách ra thành danhmuc?a đó rời vào db tìm kiếm a
        let p1 = categoryDB.getProducts().catch(err => {
                console.log("Error: " + err);});
        let p2 = categoryDB.getBrands().catch(err => {
                console.log("Error: " + err);});
        q.all([p1,p2]).spread(function(temp1,temp2) {
            res.render("_shop/shop", {
                user: req.session.user,
                productsList: temp1,
                brandsList:temp2,
                layout: "index"
            });
        })
    }
    ,
    searchproductsbrand : function(req, res) {
        let brand = req.query.id;
        console.log(brand);
        q.all([categoryDB.lookProductBrand(brand)
            .catch(err => {
                console.log("Error: " + err);
            })]).spread(function(temp1) {
            res.render("_shop/shop", {
                user: req.session.user,
                productsList: temp1,
                layout: "index"
            });
        })
    }
}

module.exports = productsController;