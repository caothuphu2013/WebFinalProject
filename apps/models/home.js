//Xu ly database
const db = require("./database.js")
const q = require("q");

exports.getLastestProduct = () => {
    let d = q.defer();
    let sql = "select * from product order by ngaydang DESC limit 10";
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
    let sql = "select * from product order by buyTimes DESC limit 10";
    db.query(sql, (error, results) => {
        if (error) {
            d.reject(error);
        }
        d.resolve(results);
    });
    return d.promise;
}

exports.getMostViewProduct = () => {
    let d = q.defer();
    let sql = "select * from product order by viewTimes DESC limit 10";
    db.query(sql, (error, results) => {
        if (error) {
            d.reject(error);
        }
        d.resolve(results);
    });
    return d.promise;
}