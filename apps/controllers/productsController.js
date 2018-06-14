const categoryDB = require('../models/products');
const q = require('q');

let productsController = {
    searchproducts : function(req, res) {
        // Ta xử lý phần thanh địa chỉ nhé... Tách ra thành danhmuc?a đó rời vào db tìm kiếm a

        q.all([categoryDB.getProducts()
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