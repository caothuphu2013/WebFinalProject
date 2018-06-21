const q = require('q');
const layout = require('../apps/models/layout');
module.exports = function(app) {
	app.use(function(req, res, next) {
        q.all([layout.getBrands(),layout.getTypes()]).spread(function(temp1,temp2) {
            res.locals.layoutVM = {
            brandsList: temp1, 
            typesList: temp2
            }
        })
        next();
    });
    require("./middleware.js")(app);
    require("./configview.js")(app);
    require("./router.js")(app);
}