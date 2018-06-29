const checkoutDB = require('../models/checkout');
const q = require('q');
let dateToString = require('../helper/date');
const _PENDING = 'pending';

let checkoutController = {
    checkoutPage: function (req, res) {
        if (!req.session.user) {
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
    ,
    buyProduct: function (req, res) {
        let checkbox = req.body.ship_to_different_address;
        let username = req.session.user.username;
        let name, address, email, phone, comment;
        if (!checkbox) {
            req.checkBody('billing_name', 'Tên đang trống').notEmpty();
            req.checkBody('billing_address', 'Địa chỉ đang trống').notEmpty();
            req.checkBody('billing_email', 'Email sai định dạng').isEmail();
            req.checkBody('billing_phone', 'Số điện thoại sai định dạng').isMobilePhone('vi-VN');
            name = req.body.billing_name;
            address = req.body.billing_address;
            email = req.body.billing_email;
            phone = req.body.billing_phone;
        }
        else {
            req.checkBody('shipping_name', 'Tên người nhận đang trống').notEmpty();
            req.checkBody('shipping_address', 'Địa chỉ người nhận đang trống').notEmpty();
            req.checkBody('billing_email', 'Email sai định dạng').isEmail();
            req.checkBody('billing_phone', 'Số điện thoại sai định dạng').isMobilePhone('vi-VN');
            name = req.body.shipping_name;
            address = req.body.shipping_address;
            comment = req.body.order_comments;
            email = req.body.billing_email;
            phone = req.body.billing_phone;
        }
        var errors = req.validationErrors();
        if (errors) {
            let username = req.session.user.username;
            let p1 = checkoutDB.findByProductIntoCart(username).catch(err => console.log(err));
            let p2 = checkoutDB.findByTotal(username).catch(err => console.log(err));
            let p3 = checkoutDB.findByUserName(username).catch(err => console.log(err));

            q.all([p1, p2, p3]).spread(function (temp1, temp2, temp3) {
                res.render('_checkout/checkout', {
                    errors: errors,
                    info: temp1,
                    total: temp2[0].total,
                    profile: temp3[0],
                    layout: 'index',
                    user: req.session.user
                })
            })
        }
        else {
            let p0 = checkoutDB.checkValid(username + '_1')
                .catch(err => console.log(err));
            let p = checkoutDB.checkEnough(username + '_1')
                .catch(err => console.log(err));
            q.all([p0, p]).spread((temp, temp2) => {
                if (temp[0]) {
                    req.flash('error_msg', 'Giỏ hàng trống');
                    res.redirect("/checkout");
                }
                else if (temp2[0]) {
                    req.flash('error_msg', 'Kho không đủ hàng');
                    res.redirect("/checkout");
                }
                else {
                    let time = Date.now();
                    let idBill = username + '_1' + time;
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
                    let p1 = checkoutDB.insertBill(obj)
                        .catch(err => console.log(err));
                    let p2 = checkoutDB.insertBill_info(username + '_1', time)
                        .catch(err => console.log(err));
                    let p3 = checkoutDB.increaseBuyTimes(username + '_1')
                        .catch(err => console.log(err));
                    let p4 = checkoutDB.decreaseInWare(username + '_1')
                        .catch(err => console.log(err));
                    let p5 = checkoutDB.deleteProductInCart(username + '_1')
                        .catch(err => console.log(err));
                    let p6 = checkoutDB.updateCart(username + '_1', 0)
                        .catch(err => console.log(err));


                    q.all([p1, p2, p3, p4, p5, p6]).spread((temp1, temp2, temp3, temp4, temp5, temp6) => {
                        req.session.user.total = 0;
                        req.session.user.count = 0;
                        req.flash('success_msg', 'Đơn hàng đang được xử lý, cảm ơn bạn đã đặt mua');
                        res.redirect('/history/bill?id=' + idBill);
                    });
                }
            })
        }

    }
}

module.exports = checkoutController;