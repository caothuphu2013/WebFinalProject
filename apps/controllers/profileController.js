const profileDB = require('../models/profile');
const q = require('q');

let profileController = {
    Defaultpage: function(req, res) {
        var username = req.session.user.username;
        profileDB.findByUserName(username).then(rows => {
            if (rows.length > 0) {
                let name = rows[0].name;
                let birthday = rows[0].birthday || '';
                let sex = rows[0].sex || '';
                let address = rows[0].address || '';
                let phone = rows[0].phone;
                let email = rows[0].email;

                //Kiểm tra giới tính
                let isMan;
                if (sex === 'Nữ')
                    isMan = false;
                else
                    isMan = true;

                let range_address, city;
                //Tách city
                if (address) {
                    let vtc = address.lastIndexOf(',');
                    range_address = address.substring(0, vtc);
                    city = address.substring(vtc, address.length);
                }

                let obj = {
                    username, 
                    name, 
                    birthday,
                    sex,
                    range_address,
                    city,
                    phone, 
                    email
                }
                req.session.user = obj;
                res.render('_profile/contentProfile', {
                    user: req.session.user,
                    layout: "index",
                    isMan
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    
    }
    ,
    updateInfo: function(req, res) {
        let username = req.session.user.username;
        let name = req.body.fullName;
        let birthday = req.body.date_Of_Birth;
        let sex = req.body.gender == 1 ? 'Nam' : 'Nữ';

        let range_address = req.body.range_address ? `${req.body.range_address}` : '';
        let city = req.body.city_Address ? `${req.body.city_Address}` : '';

        let address = range_address + ', ' + city;
        let phone = req.body.phone;
        let email = req.body.email;
        
        let obj = {
            username, name, birthday, sex, address, phone, email
        }

        profileDB.updateInfo(obj)
        .then(rows => {
            req.flash('success_msg', 'Cập nhật thông tin thành công');
            res.redirect('/profile_user');
        })
        .fail(err => {
            req.flash('error_msg', 'Cập nhật thông tin thất bại');
            req.redirect('/profile_user');
        })
        .catch(err => {
            req.flash('error', 'Hệ thống bị lỗi');
            console.log(err);
        })
    }
}

module.exports = profileController;