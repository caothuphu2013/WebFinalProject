const router = require("express").Router;

const index = require("../apps/controllers/index");
const admin = require("../apps/controllers/admin.js")

module.exports = function(app) {
    //home
    app.get("/", index.home.loadHomePage);
    // shop
    app.get("/shop", index.products.searchproducts);
    app.get("/shop/brand", index.products.searchproductsbrand);
   // app.get("/shop/type", index.products.searchproductstype);


    //admin
  	app.get("/admin", admin.loadDashboard);
    //Khác
  

    //user
    app.get("/register", index.users.registerPage);
    app.post("/register", index.users.userRegister);
    app.get("/login", index.users.loginPage);
    app.post("/login", index.users.userLogin);
}
