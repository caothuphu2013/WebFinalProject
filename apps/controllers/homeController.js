const  categoryDB = require('../models/home');

let homeController = {
    loadHomePage : function(req, res) {
        res.render('_home/home', {
            layout: "index"
        })
    }
}

module.exports = homeController;