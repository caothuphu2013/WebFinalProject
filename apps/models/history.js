const db = require("./database.js");
const q = require('q');

let history = {
    getHistory: function(user) {
        let d = q.defer();
        let sql = `select bill.idBill,time,state,total,product.name,count(*) as count,count(*) > 1 as isUpOne
        from bill, bill_info,product 
        where bill_info.idBill = bill.idBill and product.id = bill_info.product and bill.customer = ?
        group by bill.idBill`
        db.query(sql, [user], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
}

module.exports = history;