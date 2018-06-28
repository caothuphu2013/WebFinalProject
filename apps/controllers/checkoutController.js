const checkoutDB = require('../models/checkout');
const q = require('q');
let dateToString = require('../helper/date');
const _PENDING = 'pending';

let checkoutController = {
    checkoutPage: function (req, res) {
        if (!req.session.user)
            res.redirect('/login');
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
    ,
    buyProduct: function(req, res) {
        let checkbox = req.body.ship_to_different_address;
        let username = req.session.user.username;
        let name, address, email, phone, comment;

        if (checkbox == 0) {
            name = req.body.billing_name;
            address = req.body.billing_address;
            email = req.body.billing_email;
            phone = req.body.billing_phone;
        }
        else {
            name = req.body.shipping_name;
            address = req.body.shipping_address;
            comment = req.body.order_comments;
            email = req.body.billing_email;
            phone = req.body.billing_phone;
        }

   
            let time = Date.now();
            let idBill = username + time;
            let obj = {
                idBill,
                username,
                name,
                time: new dateToString(new Date()).convertDateToString(),
                state: _PENDING,
                address,
                phone,
                email,
                payMethod: 'Tiền mặt',
                total: req.session.user.total
            }

            p1 = checkoutDB.insertBill(obj)
                .catch (err => console.log(err));
            p2 = checkoutDB.deleteProductIntoCart(username + '_1')
                .catch(err => console.log(err));
            p3 = checkoutDB.updateCart(username+ '_1', 0)
                .catch(err => console.log(err));
            

            q.all([p1,p2,p3]).spread((temp1, temp2, temp3, temp4) => {
                req.session.user.total = 0;
                req.session.user.count = 0;
                res.redirect('/history');
            })
        }
}

module.exports = checkoutController;