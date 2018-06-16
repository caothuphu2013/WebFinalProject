//Tổng hợp các controllers
const productsController = require('./productsController');
const userController = require('./userController');
const homeController = require('./homeController');
const profileController = require('./profileController');

module.exports = {
    products : productsController,
    users: userController,
    home: homeController,
    profile: profileController
}