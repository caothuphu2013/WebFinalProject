const categoryDB = require('../models/products');
const q = require('q');

let homeController = {
    loadHomePage : function(req, res) {
        let p1 = categoryDB.getProducts().catch(err=>{
            console.log("Error: " + err);
        });
        q.all([p1]).spread(function(temp1){
            res.render('_home/home', {
                productsList: temp1,
                layout: "index"
            });
        });
    }
}

module.exports = homeController;