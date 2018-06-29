const db = require("./database.js");
const q = require('q');
const config = require('../../config/configproduct.js')

let adminEditProduct = {
    getProductEdit: function(id) {
        let d = q.defer();
        let sql = "update laptop_db.product";
        db.query(sql,[id], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
}

module.exports = adminEditProduct;