const categoryDB = require('../models/products');
const q = require('q');

let manageController = {
    loadProductManagement : function(req, res) {
        let p = categoryDB.getProducts().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                products: temp1,
                manageSession: 'admin_Manage_Product',
                layout: "admin"
            });
        })
    },
    loadTypeManagement : function(req, res) {
        let p = categoryDB.getType().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                types: temp1,
                manageSession: 'admin_Manage_Type',
                layout: "admin"
            });
        })
    },
    loadBrandManagement : function(req, res) {
        let p = categoryDB.getBrand().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                brands: temp1,
                manageSession: 'admin_Manage_Brand',
                layout: "admin"
            });
        })
    },
    loadOrdersManagement : function(req, res) {
        let p = categoryDB.getOrders().catch(err => {
                console.log("Error: " + err);});
        let temp = [1];
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                manageSession: 'admin_Manage_Orders',
                layout: "admin",
                true: 1 == 1,
                orders: temp1,
                isempty: temp1.length === 0,
            });
        })
    },
}

module.exports = manageController;
