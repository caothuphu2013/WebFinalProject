//Xu ly database
const db = require("./database.js")
const q = require("q");

exports.getLastestProduct = () => {
    let d = q.defer();
    let sql = "select * from product where product.ngaydang > '2017-5-5'";
    db.query(sql, (error, results) => {
        if (error) {
            d.reject(error);
        }
        d.resolve(results);
    });
    return d.promise;
}

exports.getBestSellingProduct = () => {
    let d = q.defer();
    let sql = "select * from product where product.buyTimes > 5";
    db.query(sql, (error, results) => {
        if (error) {
            d.reject(error);
        }
        d.resolve(results);
    });
    return d.promise;
}