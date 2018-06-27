const historyDB = require('../models/history');
const q = require('q');

let historyController = {
    historyPage: function(req, res) {
        if (!req.session.user)
            res.redirect('/login');
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
    }
}
module.exports = historyController;