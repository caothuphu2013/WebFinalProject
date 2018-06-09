//Tổng hợp các controllers
const productsController = require('./productsController');
const userController = require('./userController');

module.exports = {
    products : productsController,
    users: userController
}