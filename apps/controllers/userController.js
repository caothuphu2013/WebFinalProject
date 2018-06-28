const userDB = require('../models/user');
const q = require('q');
const helper = require('../helper/bcrypt_password');
let emailer = require('../helper/email');
const emailUs = 'dackweb2018@gmail.com'
const request = require('request');
let email_temp = '';

let userController = {
    registerPage: function (req, res) {
        res.render("_user/register", {
            layout: "index",
            user: req.session.user
        });
    }
    ,
    loginPage: function (req, res) {
        res.render("_user/login", {
            layout: "index"
        });
    }
    ,
    forgetPasswordPage: function (req, res) {
        res.render("_user/forgetPassword", {
            layout: "index"
        })
    }
    ,
    createNewPasswordPage: function (req, res) {
        res.render("_user/createNewPassword", {
            layout: "index"
        })
    }
    ,
    userRegister: function (req, res) {
        let username = req.body.username;
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let password = req.body.password;
        let password2 = req.body.password2;
        let email = req.body.email;
        let phone = req.body.phone;

        req.checkBody('username', 'Username đang trống').notEmpty();
        req.checkBody('firstname', 'Họ đang trống').notEmpty();
        req.checkBody('lastname', 'Tên đang trống').notEmpty();
        req.checkBody('password', 'Password không hợp lệ').notEmpty();
        req.checkBody('password2', 'Password không tương xứng').equals(password);
        req.checkBody('email', 'Email sai định dạng').isEmail();
        req.checkBody('phone', 'Số điện thoại sai định dạng').isMobilePhone('vi-VN');
        req.checkBody('g-recaptcha-response','Vui lòng điền reCapcha').notEmpty(); 

        let secretKey = "6Lc9HmEUAAAAANwb6sGEj9q9Hq3SCLtxolRTDOBO";
        var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
       
        var errors = req.validationErrors();
        if (errors) {
            res.render('_user/register', {
                errors: errors,
                layout: "index"
            })
        }
        else {
            request(verificationUrl,function(error,response,body)
            {
                body = JSON.parse(body);
                if(!body.success){
                    res.render('_user/register', {
                    errors: errors,
                    layout: "index"
                    })
                }
            });

            let p1 = userDB.findByEmail(email).catch(err => {
                console.log("Error: " + err);});
            let p2 = userDB.findByPhone(phone).catch(err => {
                console.log("Error: " + err);});
            let p3 = userDB.findByUsername(username).catch(err => {
                console.log("Error: " + err);});
            q.all([p1,p2,p3]).spread(function(temp1,temp2,temp3) {
                if (temp1.length > 0) {
                    req.flash('error_msg', 'Email đã tồn tại');
                    res.redirect("/register");
                }
                else if (temp2.length > 0) {
                    req.flash('error_msg', 'Số điện thoại đã tồn tại');
                    res.redirect("/register");
                }
                else if (temp3.length > 0) {
                    req.flash('error_msg', 'Username bị trùng');
                    res.redirect("/register");
                }
                else
                {
                    let hashPassword = helper.encryptPassword(password);
                    let obj = {
                        username,
                        password: hashPassword,
                        image: '/img/avatar.jpg',
                        name: firstname + ' ' + lastname,
                        email,
                        phone
                    }
                    let p4 = userDB.insertUser(obj)
                        .then(success => {
                            req.flash('success_msg', 'Bạn đã đăng kí thành công và có thể đăng nhập');
                            res.redirect("/login");
                        })

                        .fail(err => {
                            req.flash('error_msg', 'Bạn không đăng kí thành công');
                            res.redirect("/register");
                        })

                    let p5 = userDB.insertInfo(obj).catch(err => {
                        console.log(err);
                    });

                    let idCart = obj.username + '_1';
                    let p6 = userDB.insertCart(idCart, obj.username, 0);
                    q.all([p4, p5, p6]).spread(err => {
                        console.log(err);
                    })
                }
            });
        }
    }
    ,
    userLogin: function (req, res) {
        let username = req.body.username;
        let password = req.body.password;

        req.checkBody('username', 'Username đang trống').notEmpty();
        req.checkBody('password', 'Password đang trống').notEmpty();

        var errors = req.validationErrors();
        if (errors) {
            res.render('_user/login', {
                errors: errors,
                layout: "index"
            })
        }
        else {
            userDB.findByUsername(username)
                .then(rows => {
                    if (rows.length > 0) {
                        let type = rows[0].type;
                        let passwordSQL = rows[0].password;
                        let image = rows[0].image;

                        //Tạo object để truyền session
                        let user = {
                            username,
                            passwordSQL,
                            type,
                            image
                        }

                        if (type < 0) {
                            req.flash('error_msg', 'Tài khoản bị khóa');
                            req.redirect('/login');
                        }
                        else {
                            var checkPass = helper.validPassword(password, passwordSQL);
                            if (checkPass === true) {
                                // create session
                                req.session.user = user;
                                p1 = userDB.getTotal(user.username).catch(err => console.log(err));
                                p2 = userDB.getCount(user.username + '_1').catch(err => console.log(err));
                            
                                q.all([p1,p2]).spread(function(temp1, temp2){
                                    if (temp1[0].total === 0) {
                                        req.session.user.total = temp1[0].total;
                                        req.session.user.count = 0;
                                    }
                                    else {
                                        req.session.user.total = temp1[0].total;
                                        req.session.user.count = temp2[0].count;
                                    }

                                    if (user.type == 0)
                                        if (req.session.prePage)
                                            res.redirect(req.session.prePage);
                                        else
                                            res.redirect('/shop');
                                    else
                                        res.redirect("/dashboard");
                                })
                            }
                            else {
                                req.flash("error_msg", "Mật khẩu không đúng");
                                res.redirect('/login');
                            }
                        }
                    }
                    else {
                        req.flash('error_msg', 'Username không tồn tại');
                        res.redirect('/login');
                    }
                })
                .fail(err => {
                    req.flash("error_msg", "Đăng nhập thất bại");
                    res.redirect('/login');
                });
        }

    }
    ,
    userLogout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    }
    ,
    userForgetPassword: function (req, res) {
        let email = req.body.email;
        req.checkBody('email', 'Email sai định dạng').isEmail();
        var errors = req.validationErrors();
        if (errors) {
            res.render('_user/forgetPassword', {
                errors: errors,
                layout: "index"
            })
        }
        else {
            userDB.findByEmail(email)
                .then(rows => {
                    if (rows.length > 0) {
                        email_temp = email;
                        //create nodemailer to send message
                        emailer = new emailer(emailUs, email, 'Tạo mật khẩu mới',
                            `Chào bạn, chúng tôi nhận được thông báo rằng bạn quên mật khẩu của mình.\n
                                Vì vậy, để reset mật khẩu, bạn vui lòng truy cập đường link bên dưới. \n
                                   \t http://localhost:8080/newpassword \n
                                Thân.
                                `);
                        emailer.SendEmail();

                        req.flash('success_msg', 'Tin nhắn xác nhận đã được gửi.');
                        res.redirect('/forgetpassword');
                    }
                    else {
                        req.flash('error_msg', 'Email không tồn tại');
                        res.redirect('/forgetpassword');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
                .fail((error) => {
                    req.flash('error_msg', 'Không gửi được tin nhắn tới email của bạn');
                    res.redirect('/forgetpassword');
                });
        }
    }
    ,
    userCreateNewPassword: function (req, res) {
        let password = req.body.password;
        let password_confirmation = req.body.password_confirmation;

        req.checkBody('password', 'Password đang trống').notEmpty();
        req.checkBody('password_confirmation', 'Password không tương xứng').equals(password);

        var errors = req.validationErrors();
        if (errors) {
            res.render('_user/createNewPassword', {
                errors: errors,
                layout: "index"
            })
        }
        else {
            userDB.findByEmail(email_temp)
                .then(rows => {
                    if (rows.length > 0) {
                        // Create session
                        let username = rows[0].username;
                        let hashPassword = helper.encryptPassword(password);

                        let user = {
                            username,
                            password: hashPassword,
                        }

                        userDB.updatePassword(user)
                            .then((success) => {
                                req.flash('success_msg', 'Bạn tạo mật khẩu mới thành công');
                                res.redirect('/login');
                            })
                            .fail((error) => {
                                res.flash('error_msg', 'Tạo mật khẩu thất bại');
                                res.redirect('/newpassword');
                            });
                    }
                    else {
                        req.flash('error_msg', 'Email không tồn tại');
                        res.redirect('/newpassword');
                    }
                })
                .fail(err => {
                    req.flash("error_msg", "Không thể đổi mật khẩu");
                    res.redirect('/login');
                });
        }
    }
}

module.exports = userController;