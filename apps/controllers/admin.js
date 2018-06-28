const dashboardController = require("./dashboardController");
const manageController = require("./manageController");
const editProductsController = require("./editProductsController");

module.exports = {
    dashboard: dashboardController,
    manage: manageController,
    editProducts: editProductsController,
}