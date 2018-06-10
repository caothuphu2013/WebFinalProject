const router = require("express").Router;

const index = require("../apps/controllers/index");

module.exports = function(app) {
    //home
    app.get("/", index.home.loadHomePage);
    // shop
    app.get("/shop", index.products.searchproducts);
    //admin
  

    //user
    app.get("/register", index.users.registerPage);
    app.post("/register", index.users.userRegister);
    app.get("/login", index.users.loginPage);
    app.post("/login", index.users.userLogin);
}
