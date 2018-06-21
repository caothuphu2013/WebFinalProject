const layout = require('../models/layout');
const q = require('q');

let homeController = {
    loadHomePage : function(req, res) {
        let p1 = layout.getBrands().catch(err=>{
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