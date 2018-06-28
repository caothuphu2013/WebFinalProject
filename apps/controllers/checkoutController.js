const checkoutDB = require('../models/checkout');
const q = require('q');

let checkoutController = {
    checkoutPage: function (req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else {
            let username = req.session.user.username;
            let p1 = checkoutDB.findByProductIntoCart(username).catch(err => console.log(err));
            let p2 = checkoutDB.findByTotal(username).catch(err => console.log(err));
            let p3 = checkoutDB.findByUserName(username).catch(err => console.log(err));

            q.all([p1, p2, p3]).spread(function (temp1, temp2, temp3) {
                res.render('_checkout/checkout', {
                    info: temp1,
                    total: temp2[0].total,
                    profile: temp3[0],
                    layout: 'index',
                    user: req.session.user
                })
            })
        }
    }
}

module.exports = checkoutController;