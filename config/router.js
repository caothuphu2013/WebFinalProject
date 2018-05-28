const router = require("express").Router;

const index = require("../apps/controllers/index");

module.exports = function(app) {
    //home
   
    //admin
  
    //Khác
    
    // Handle Error Page checking.isLoggedIn, checking.checkingSeller,
    app.use(function(req, res, next){
        res.status(404);
        if (req.accepts('html')) {
          res.render('_errorPage/404', {
            url: '/',
            Topic: '404 Not Found',
            content: "Oh noes everything broke",
            layout: 'applicationnoHeader'
          });
          return;
        }
    });

    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('_errorPage/404', {
        Topic: 'Server Process Is Error',
        content: err.message,
        tryagain: req.url,
        layout: 'applicationnoHeader'
      });
    });
}
