const router = require("express").Router;

const index = require("../apps/controllers/index");
const admin = require("../apps/controllers/admin.js")

module.exports = function(app) {
    //home
    app.get("/shop", index.products.searchproducts);
    //admin
  	app.get("/admin", admin.loadDashboard);
    //Khác
}
