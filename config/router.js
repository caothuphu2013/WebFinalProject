const router = require("express").Router;

const index = require("../apps/controllers/index");
const admin = require("../apps/controllers/admin.js")

module.exports = function(app) {
    //home
    app.get("/", index.home.loadHomePage);
    // shop
    app.get("/shop", index.products.searchproducts);
    //admin
    app.get("/admin", admin.loadDashboard);

    //user
    app.get("/register", index.users.registerPage);
    app.post("/register", index.users.userRegister);
    app.get("/login", index.users.loginPage);
    app.post("/login", index.users.userLogin);
}
