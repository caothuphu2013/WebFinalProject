var path = require("path");
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var moment = require('moment');
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
        },
        datetime: function(date) {
            date = date || moment();
            return moment(date).format('ddd, DD MMM YYYY');
        },
        multiple: (a,b) => {
            return a * b;
        },
        downOne: (a) => {
            return a-1;
        }
    }
  }));

  app.set('view engine', 'hbs');
  app.set("views", path.resolve("apps/views"));
};
