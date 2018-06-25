const q = require('q');

let contactController = {
    contactPage: function(req, res) {
        res.render('_contact/contact', {
            user: req.session.user,
            layout: 'contact'
        })
    }
}

module.exports = contactController;