const index = require("../apps/controllers/index");
const admin = require("../apps/controllers/admin.js")

module.exports = function(app) {
    //home
    app.get("/", index.home.loadHomePage);
    // shop
    app.get("/shop", index.products.searchProducts);
    app.get("/shop/choose", index.products.searchProductsAuto);
    app.post("/shop/search", index.products.search);


    //single-product
    app.get("/product",index.singleproduct.getProduct);

    //admin
    app.get("/admin", admin.loadDashboard);

    //user
    app.get("/register", index.users.registerPage);
    app.post("/register", index.users.userRegister);
    app.get("/login", index.users.loginPage);
    app.post("/login", index.users.userLogin);
    app.get("/logout", index.users.userLogout);
    app.get("/changepassword", index.users.changePasswordPage);
    app.post('/changepassword', index.users.userChangePassword);

    //profile
    app.get("/profile", index.profile.defaultPage);
    app.get("/profile/update", index.profile.updatePage);
    app.post('/profile/update',index.profile.updateInfo);
}
