const layout = require('../models/layout');
const q = require('q');

let homeController = {
    loadHomePage : function(req, res) {
        let p1 = layout.getBrands().catch(err=>{
            console.log("Error: " + err);
        });
        q.all([p1]).spread(function(){
            res.render('_home/home', {
                layout: "index"
            });
        });
    }
}

module.exports = homeController;