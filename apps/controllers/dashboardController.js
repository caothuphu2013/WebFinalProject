const categoryDB = require('../models/adminProduct');
const q = require('q');

let dashboardController = {
    loadDashboard : function(req, res) {
        let p = categoryDB.getProductStatistic().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/dashboard", {
                products: temp1,
                statistic: 'admin_StatisticProduct',
                layout: "admin"
            });
        })
    },
    loadDashboardBrand : function(req, res) {
        let p = categoryDB.getBrandStatistic().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/dashboard", {
                brand: temp1,
                statistic: 'admin_StatisticBrand',
                layout: "admin"
            });
        })
    },
    loadDashboardType : function(req, res) {
        let p = categoryDB.getTypeStatistic().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/dashboard", {
                type: temp1,
                statistic: 'admin_StatisticType',
                layout: "admin"
            });
        })
    },
    searchProduct : function(req, res) {
        let word = req.body.searchWhat;
        word = '%' + word + '%';
        let p = categoryDB.lookNameLike(word).catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
    
            res.render("_admin/dashboard", {
                products: temp1,
                statistic: 'admin_StatisticProduct',
                layout: "admin"
            });
        })
    },
}

module.exports = dashboardController;
