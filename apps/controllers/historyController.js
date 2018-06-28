const historyDB = require('../models/history');
const q = require('q');

let historyController = {
    historyPage: function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else {
            let username = req.session.user.username;
            historyDB.getHistory(username)
            .then(rows => {
                if (rows.length > 0) {
                    res.render('_history/allHistory', {
                        user: req.session.user,
                        info: rows,
                        layout: 'index',
                    }) 
                }
                else {
                    res.render('_history/allHistory', {
                        user: req.session.user,
                        layout: "index",
                        noHistory: 1
                    })
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
    billInfo: function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else {
            let id = req.query.id;
            let username = req.session.user.username;
            let p1 = historyDB.getBill(id,username).catch(err => {
                console.log("Error: " + err);});
            let p2 = historyDB.getNotiBill(id,username).catch(err => {
                console.log("Error: " + err);});
            let p3 = historyDB.getProductBill(id,username).catch(err => {
                console.log("Error: " + err);});

            q.all([p1,p2,p3]).spread(function(temp1,temp2,temp3) {
                res.render("_history/buy_info", {
                    layout: "index",
                    user: req.session.user,
                    bill: temp1[0],
                    report: temp2,
                    productGroup: temp3
                });
            })
        }
    }
}
module.exports = historyController;