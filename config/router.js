const router = require("express").Router;

const index = require("../apps/controllers/index");

module.exports = function(app) {
    //home
    app.get("/shop", index.products.searchproducts);
    //admin
  
    app.get("/login", index.users.loginPage);

    app.get("/register", index.users.registerPage);
    //Khác
    app.post("/register", index.users.userRegister);
}
