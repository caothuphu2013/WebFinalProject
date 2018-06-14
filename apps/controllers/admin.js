const categoryDB = require('../models/products');
const q = require('q');

let adminController = {
    loadDashboard : function(req, res) {
        q.all([categoryDB.getProducts()
            .catch(err => {
                console.log("Error: " + err);
            })]).spread(function(temp1) {
            res.render("_admin/admin", {
                products: temp1,
                layout: "admin"
            });
        })
    }
}

module.exports = adminController;
