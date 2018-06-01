const router = require("express").Router;

const index = require("../apps/controllers/index");

module.exports = function(app) {
    //home
    app.get("/shop", index.category.searchCategory);
    //admin
  
    //Khác
}
