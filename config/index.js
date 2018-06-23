const q = require('q');
const layout = require('../apps/models/layout');
module.exports = function(app) {
    require("./middleware.js")(app);
    require("./configview.js")(app);
    require("./router.js")(app);
}