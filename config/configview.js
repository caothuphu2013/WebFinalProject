var path = require("path");
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');

module.exports = function (app) {
  app.engine('hbs', exphbs({
      extname: ".hbs", 
      layoutsDir: path.resolve("apps/views/layouts/"), 
      partialsDir: path.resolve("apps/views/partials/"),
      helpers: {
        section: express_handlebars_sections(),
        number_format: n => {
            var nf = wnumb({
                thousand: ','
            });
            return nf.to(n);
        }
    }
  }));
  app.set('view engine', 'hbs');
  app.set("views", path.resolve("apps/views"));
};
