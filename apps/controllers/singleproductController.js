const product = require('../models/single-product');
const q = require('q');

let singleproductController = {
    getProduct : function(req, res) {
        let id = req.query.id;
        let p1 = product.getThisProduct(id).catch(err => {
                console.log("Error: " + err);});
        let p2 = product.getSameBrandProduct(id).catch(err => {
                console.log("Error: " + err);});
        let p3 = product.getSameTypeProduct(id).catch(err => {
                console.log("Error: " + err);});
        q.all([p1,p2,p3]).spread(function(temp1,temp2,temp3){
            res.render("_product/single-product", {
                user: req.session.user,
                product: temp1,
                sameBrand: temp2,
                sameType: temp3,
                layout: "index"
            });         
        })
    }
}

module.exports = singleproductController;