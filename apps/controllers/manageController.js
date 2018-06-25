const categoryDB = require('../models/products');
const q = require('q');

let manageController = {
    loadProductManagement : function(req, res) {
        let p = categoryDB.getProducts().catch(err => {
                console.log("Error: " + err);});
        let tab = req.query.manage;
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                products: temp1,
                manageSession: (tab === 'product') ? 'admin_Manage_Product' : (tab === 'type') ? 'admin_Manage_Type' : (tab === 'brand') ? 'admin_Manage_Brand' : (tab === 'orders') ? 'admin_Manage_Orders' : 'admin_Manage_Product',
                layout: "admin"
            });
        })
    },

}

module.exports = manageController;
