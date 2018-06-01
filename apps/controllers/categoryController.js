const categoryDB = require('../models/category');
const q = require('q');

let categoryController = {
    searchCategory : function(req, res) {
        // Ta xử lý phần thanh địa chỉ nhé... Tách ra thành danhmuc?a đó rời vào db tìm kiếm a
        q.all([categoryDB.getCategory()]).spread(function(temp1) {
            res.render("_shop/shop", {
                categoryList: temp1
            });
        })
    } 
}

module.exports = categoryController;