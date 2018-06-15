//Tổng hợp các controllers
const productsController = require('./productsController');
const userController = require('./userController');
const homeController = require('./homeController');

module.exports = {
    products : productsController,
    users: userController,
    home: homeController
}