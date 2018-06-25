const q = require('q');
let emailer = require('../helper/email');
const emailUs = 'dackweb2018@gmail.com';

let contactController = {
    contactPage: function(req, res) {
        res.render('_contact/contact', {
            user: req.session.user,
            layout: 'contact'
        })
    }
    ,
    formContactPage: function(req, res) {
        res.render('_contact/formContact', {
            user: req.session.user,
            layout: 'contact'
        })
    }
    ,
    sendMessage: function (req, res) {
        let name = req.body.name;
        let email = req.body.email;
        let message = req.body.message;

        req.checkBody('name', 'Họ tên đang trống').notEmpty();
        req.checkBody('email', 'Email sai định dạng').isEmail();
        var errors = req.validationErrors();
        if (errors) {
            res.render('_contact/contact', {
                errors: errors,
                layout: "index"
            })
        }
        else {
            try {
                emailer = new emailer(email, emailUs, `${email} + ${name}` ,message);
                emailer.SendEmail();
                req.flash('success_msg', 'Tin nhắn gửi thành công');
                res.redirect('/contact/form');
            }
            catch (err) {
                req.flash('error_msg', 'Tin nhắn gửi thất bại');
                res.redirect('/contact/form');
            }
            
        }

    }
}

module.exports = contactController;