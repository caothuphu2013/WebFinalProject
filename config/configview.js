var path = require("path");
var exphbs = require('express-handlebars');

module.exports = function (app) {
  app.engine('hbs', exphbs({
      extname: ".hbs", 
      layoutsDir: path.resolve("apps/views/layouts/"), 
      partialsDir: path.resolve("apps/views/partials/")
  }));
  app.set('view engine', 'hbs');
  app.set("views", path.resolve("apps/views"));
};
