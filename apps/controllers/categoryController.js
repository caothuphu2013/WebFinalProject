const categoryDB = require('../models/category');
const q = require('q');

let categoryController = {
    x : function(req, res) {
        // Ta xử lý phần thanh địa chỉ nhé... Tách ra thành danhmuc?a đó rời vào db tìm kiếm a
        q.all([categoryDB.getCategory()]).spread(function(temp1) {
            //Xuly
            res.render("    Gửi trả về cho views nhận     ", {
                a: temp1
            });
        })
    } 
}