const db = require("./database.js");
const q = require('q');

let products = {
    getProducts: function() {
        let d = q.defer();
        let sql = "select name, price, picture from product";
        db.query(sql, (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);       
        });
        return d.promise;
    }
}

module.exports = products;