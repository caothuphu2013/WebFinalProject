const db = require("./database.js");
const q = require('q');


exports.getBrands = () => {
    let d = q.defer();
    let sql = "select * from brand";
    db.query(sql, (error, results) => {
        if (error) {
            d.reject(error);
        }
        d.resolve(results);       
    });
    return d.promise;
}
exports.getTypes = () =>{
    let d = q.defer();
    let sql = "select id, name from type";
    db.query(sql, (error, results) => {
        if (error) {
            d.reject(error);
        }
        d.resolve(results);       
    });
    return d.promise;
}
/*
exports.getCount = (idProduct_Cart) => {
    let d = q.defer();
    let sql = `Select c.total From cart c where customer = ?`;
    db.query(sql, [username], (error, results) => {
        if (error)
            d.reject(error);
        d.resolve(results);
    });
    return d.promise;
}
*/