const profileDB = require('../models/profile');
const q = require('q');

let profileController = {
    Defaultpage: function(req, res) {
        var username = req.session.user.username;
        profileDB.findByUserName(username).then(rows => {
            if (rows.length > 0) {
                let fullname = rows[0].name;
                let birthday = rows[0].birthday;
                let sex = rows[0].sex;
                let address = rows[0].address;
                let phone = rows[0].phone;
                let email = rows[0].email;

                //Kiểm tra giới tính
                let isMan;
                if (sex === 'Nữ')
                    isMan = false;
                else
                    isMan = true;


                let obj = {
                    username, fullname, birthday, sex, address, phone, email
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
}

module.exports = profileController;