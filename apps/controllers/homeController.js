const categoryDB = require('../models/products');
const q = require('q');

let homeController = {
    loadHomePage : function(req, res) {
		categoryDB.getProducts();
        res.render('_home/home', {
            layout: "index"
        })
    }
}

module.exports = homeController;