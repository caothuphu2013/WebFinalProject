const categoryDB = require('../models/adminProduct');
const q = require('q');

let dashboardController = {
    loadDashboard: function (req, res) {
        if (!req.session.user) {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
            let p = categoryDB.getProductStatistic().catch(err => {
                console.log("Error: " + err);
            });
            q.all([p]).spread(function (temp1) {
                res.render("_admin/dashboard", {
                    products: temp1,
                    statistic: 'admin_StatisticProduct',
                    layout: "admin"
                });
            });
        }
        else
            res.redirect('/error');

    },
    loadDashboardBrand: function (req, res) {
        if (!req.session.user) {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
            let p = categoryDB.getBrandStatistic().catch(err => {
                console.log("Error: " + err);
            });
            q.all([p]).spread(function (temp1) {
                res.render("_admin/dashboard", {
                    brand: temp1,
                    statistic: 'admin_StatisticBrand',
                    layout: "admin"
                });
            })
        }
        else
            res.redirect('/error');
    },
    loadDashboardType: function (req, res) {
        if (!req.session.user) {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {

            let p = categoryDB.getTypeStatistic().catch(err => {
                console.log("Error: " + err);
            });
            q.all([p]).spread(function (temp1) {
                res.render("_admin/dashboard", {
                    type: temp1,
                    statistic: 'admin_StatisticType',
                    layout: "admin"
                });
            })
        }
        else
            res.redirect('/error');
    },
    searchProduct: function (req, res) {
        if (!req.session.user) {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type === 1) {
            let word = req.body.searchWhat;
            word = '%' + word + '%';
            let p = categoryDB.lookNameLike(word).catch(err => {
                console.log("Error: " + err);
            });
            q.all([p]).spread(function (temp1) {

                res.render("_admin/dashboard", {
                    products: temp1,
                    statistic: 'admin_StatisticProduct',
                    layout: "admin"
                });
            })
        }
        else
            res.redirect('/error');
    },
}

module.exports = dashboardController;
