const categoryDB = require('../models/adminEditProduct');
const q = require('q');

let editProductsController = {
    loadProductEditInfo : function(req, res) {
        let id = req.query.id;
        let p = categoryDB.getProductEdit(id).catch(err => {
                console.log("Error: " + err)});
        q.all([p]).spread(function(temp1) {
            res.render("_editproduct/editProduct", {
                products: temp1,
                isProduct: true,
                layout: "admin"
            });
        })
    },
}

module.exports = editProductsController;
