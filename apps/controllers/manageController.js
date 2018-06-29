const categoryDB = require('../models/adminProduct');
const q = require('q');

let manageController = {
    loadProductManagement : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
            let p = categoryDB.getProducts().catch(err => {
                console.log("Error: " + err)});
            q.all([p]).spread(function(temp1) {
                res.render("_admin/manage", {
                    products: temp1,
                    isProduct: true,
                    manageSession: 'admin_Manage_Product',
                    layout: "admin"
                });
            })
        }
        else
        res.redirect('/error');
    },
    loadTypeManagement : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
        let p = categoryDB.getType().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                types: temp1,
                isProduct: false,
                manageSession: 'admin_Manage_Type',
                layout: "admin"
            });
        })
        }
        else
        res.redirect('/error');
    },
    loadBrandManagement : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
        let p = categoryDB.getBrand().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                brands: temp1,
                isProduct: false,
                manageSession: 'admin_Manage_Brand',
                layout: "admin"
            
            });
        })
        }
        else
        res.redirect('/error');
    },
    loadOrdersManagement : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
        let p = categoryDB.getOrders().catch(err => {
                console.log("Error: " + err);});
        let temp = [1];
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                manageSession: 'admin_Manage_Orders',
                layout: "admin",
                true: 1 == 1,
                isProduct: false,
                orders: temp1,
                isempty: temp1.length === 0,
            });
        })
        }
        else
        res.redirect('/error');
    },
    addProduct : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
            res.render("_admin/manage", {
                manageSession: 'admin_Add_Product',
                layout: "admin",
                isProduct: false,
                true: 1 == 1
            });
        }
        else
        res.redirect('/error');

    },
    insertProductToDB : function(req, res) {
        let productName = req.body.productName;
        let productType = req.body.typeProduct;
    }
}

module.exports = manageController;
