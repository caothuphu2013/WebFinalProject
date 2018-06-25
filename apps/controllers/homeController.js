const home = require('../models/home');
const l = require('../models/layout');
const q = require('q');

let homeController = {
    loadHomePage : function(req, res) {
        let p1 = home.getLastestProduct().catch(err=>{
            console.log("Error: " + err);
        });
        let p2 = l.getBrands().catch(err=>{
            console.log("Error: " + err);
        });
        let p3 = home.getBestSellingProduct().catch(err=>{
            console.log("Error: " + err);
        });

        q.all([p1, p2, p3]).spread(function(temp1, temp2, temp3){
            res.render('_home/home', {
                user: req.session.user,
                ListProducts: temp1,
                ListBrands: temp2,
                ListBestSelling: temp3,
                layout: "index"
            });
        });
    }
}

module.exports = homeController;