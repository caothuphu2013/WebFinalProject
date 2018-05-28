var path = require("path");
var exphbs = require('express-handlebars');

module.exports = function (app) {
  app.engine('hbs', exphbs({
      extname: ".hbs", 
      layoutsDir: path.resolve("apps/views/layouts/"), // xác định lai layout nằm ở đâu
      partialsDir: path.resolve("apps/views/partials/")// xác định lại partials (những phần chung) đang ở đâu
  }));
  app.set('view engine', 'hbs');
  app.set("views", path.resolve("apps/views"));
};
