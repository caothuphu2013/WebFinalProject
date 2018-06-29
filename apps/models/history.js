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
    getBill: function(id,user) {
        let d = q.defer();
        let sql = `select distinct bill.*
    from bill, bill_info,user_info
    where bill_info.idBill = bill.idBill and user_info.username = bill.customer and bill.customer = ? and bill.idBill = ?`
        db.query(sql, [user,id], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getNotiBill: function(id,user) {
        let d = q.defer();
        let sql = `select content, report_bill.time
                from bill, report_bill
                where report_bill.idBill = bill.idBill and bill.customer = ? and bill.idBill = ?
                `
        db.query(sql, [user,id], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    getProductBill: function(id,user) {
        let d = q.defer();
        let sql = `select product.name,product.id,product.price,product.picture,bill_info.count,bill_info.count * product.price as totalPrice
                from bill, bill_info,product
                where bill_info.idBill = bill.idBill and bill_info.product = product.id and bill.customer = ? and bill.idBill = ?
                `
        db.query(sql, [user,id], (error, results) => {
            if (error) {
                d.reject(error);
            }
            d.resolve(results);
        });
        return d.promise;
    },
    
}

module.exports = history;