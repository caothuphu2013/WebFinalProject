const db = require("./database.js");
const q = require('q');

let singleproduct = {  
    getThisProduct: function(id) {
        let d = q.defer();
        let sql = "update product set viewTimes = viewTimes + 1 where id = ?";
        db.query(sql,[id],(error, results) => {     
        });
        sql = "select * from product, Configuration, Description where id = ? and Configuration.idConfig = product.config and product.config = Description.idDescription";
        db.query(sql,[id], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);       
        });

        return d.promise;
    },
    getSameBrandProduct: function(id) {
        let d = q.defer();
        let sql = "select id, name, price, picture from product where brand = (select brand from product where id = ?) and id != ? ORDER BY RAND() limit 10";
        db.query(sql,[id,id], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);       
        });
        return d.promise;
    },
    getSameTypeProduct: function(id) {
        let d = q.defer();
        let sql = "select id, name, price, picture from product where type = (select type from product where id = ?) and id != ? ORDER BY RAND() limit 10";
        db.query(sql,[id,id], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);       
        });
        return d.promise;
    }
}

module.exports = singleproduct;