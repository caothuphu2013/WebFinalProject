const index = require("../apps/controllers/index");
const admin = require("../apps/controllers/admin")
const errorPage = require("../apps/controllers/errorController")
const multer = require('multer');

// Create Multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/account');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
});
var upload = multer({storage:storage});

//For product update
var storageProduct = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
});
var uploadProduct = multer({storage:storageProduct});

// Exports
module.exports = function(app) {
    //home
    app.get("/", index.home.loadHomePage);
    app.get("/index", index.home.loadHomePage);
    // shop
    app.get("/shop", index.products.searchProducts);
    app.get("/shop/choose", index.products.searchProductsAuto);
    app.post("/shop/search", index.products.search);
    app.post("/shop/filter", index.products.filter);

    //single-product
    app.get("/product",index.singleproduct.getProduct);

    //admin
    app.get("/dashboard", admin.dashboard.loadDashboard);
    app.post("/dashboard/search", admin.dashboard.searchProduct);
    app.get("/dashboardtype", admin.dashboard.loadDashboardType);
    app.get("/dashboardbrand", admin.dashboard.loadDashboardBrand);

    //admin management
    app.get("/management", (req, res) => {res.redirect('/management/product')});
    app.get("/management/type", admin.manage.loadTypeManagement);
    app.get("/management/product", admin.manage.loadProductManagement);
    app.get("/management/brand", admin.manage.loadBrandManagement);
    app.get("/management/orders", admin.manage.loadOrdersManagement);
    app.get("/management/product/addproduct", admin.manage.addProduct);
    app.get("/management/product/updateproduct", admin.editProducts.loadProductEditInfo);
    app.get("/management/product/updateproduct", upload.single('upload_photo'), admin.editProducts.loadProductEditInfo);
    app.post("/management/product/addproduct/add", admin.manage.insertProductToDB);

    //user
    app.get("/register", index.users.registerPage);
    app.post("/register", index.users.userRegister);
    app.get("/login", index.users.loginPage);
    app.post("/login", index.users.userLogin);
    app.get("/logout", index.users.userLogout);
    app.get("/forgetpassword", index.users.forgetPasswordPage);
    app.post("/forgetpassword", index.users.userForgetPassword);
    app.get("/newpassword", index.users.createNewPasswordPage);
    app.post("/newpassword", index.users.userCreateNewPassword);

    //profile
    app.get("/profile", index.profile.defaultPage);
    app.get("/profile/update", index.profile.updatePage);
    app.post('/profile/update', upload.single('upload_photo'), index.profile.updateInfo);


    //contact
    app.get('/contact', index.contact.contactPage);
    app.post('/contact', index.contact.sendMessage);
    app.get('/contact/form', index.contact.formContactPage);

    //cart
    app.get('/cart', index.cart.cartPage);
    app.get('/cart/choose',index.cart.chooseProductToCart);
    app.get('/cart/remove', index.cart.removeProductToCart);
    app.get('/cart/subtract', index.cart.subtractProductToCart);
    app.get('/cart/add', index.cart.addProductToCart);

    //checkout
    app.get('/checkout', index.checkout.checkoutPage);
    app.post('/checkout/buy', index.checkout.buyProduct);

    //history
    app.get('/history', index.history.historyPage);
    app.get('/history/bill', index.history.billInfo);

        //Err0r
    app.use(errorPage);
}
