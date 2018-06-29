const categoryDB = require('../models/adminEditProduct');
const q = require('q');

let editProductsController = {
    loadProductEditInfo : function(req, res) {
        let id = req.query.id;
        let p = categoryDB.getProductEdit(id).catch(err => {
                console.log("Error: " + err)});
        q.all([p]).spread(function(temp1) {
            res.render("_editproduct/editProduct", {
                products: temp1,
                isProduct: true,
                layout: "admin"
            });
        })
    },
    updateProductInfo : function(req, res) {
        if (!req.session.user.username === "admin")//Kiểm tra session admin
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else
        {
            let name = req.body.fullName;
            let birthday = req.body.date_Of_Birth;
            let sex = req.body.gender == 1 ? 'Nam' : 'Nữ';

            let address = req.body.address ? `${req.body.address}` : '';
            //let city = req.body.city_Address ? `${req.body.city_Address}` : '';
            //let address = range_address + ', ' + city;
            let phone = req.body.phone;
            let email = req.body.email;

            let image = req.file ? '/img/' + req.file.filename : '/img/avatar.jpg';

            let obj_1 = {
                username, name, birthday, sex, address, phone, email
            }

            let obj_2 = {
                username,
                image
            }
            //////////////////////////////////////////////
            let p1 = profileDB.updateInfo(obj_1)
            .then(rows => {
                if (image !== '/img/avatar.jpg') {
                    profileDB.updateAvatar(obj_2)
                    .then(rows => {
                        if (rows) {
                            req.session.user.image = obj_2.image;
                            req.flash('success_msg', 'Cập nhật thông tin thành công');
                            res.redirect('/profile');
                        }
                        else {
                            req.flash("'error_msg", 'Cập nhật ảnh đại diện thất bại');
                            res.redirect('/profile');
                        }
                    })
                    .catch (err => {
                        console.log(err);
                    })
                }
                else {
                    req.flash('success_msg', 'Cập nhật thông tin thành công');
                    res.redirect('/profile');
                }

            })
            /*
            .fail(err => {
                req.flash('error_msg', 'Cập nhật thông tin thất bại');
                res.redirect('/profile/update');
            })*/
            .catch(err => {
                req.flash('error', 'Hệ thống bị lỗi');
                console.log(err);
            });
        }
    }
}

module.exports = editProductsController;
