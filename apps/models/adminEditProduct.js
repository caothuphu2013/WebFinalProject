const db = require("./database.js");
const q = require('q');
const config = require('../../config/configproduct.js')

let adminEditProduct = {
    getProductEdit: function(id) {
        let d = q.defer();
        let sql = "select * from laptop_db.product p, laptop_db.Configuration c, laptop_db.Description d where p.config = c.idConfig and d.idDescription = p.config and p.id = ?";
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