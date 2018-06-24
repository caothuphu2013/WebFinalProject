const index = require("../apps/controllers/index");
const admin = require("../apps/controllers/admin")
const errorPage = require("../apps/controllers/errorController")

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
    app.get("/dashboard", admin.dashboard.loadDashboard);
    app.get("/dashboardtype", admin.dashboard.loadDashboardType);
    app.get("/dashboardbrand", admin.dashboard.loadDashboardBrand);

    //admin management
    app.get("/management", admin.manage.loadProductManagement);
    app.get("/management?manage=type", admin.manage.loadProductManagement);
    app.get("/management?manage=product", admin.manage.loadProductManagement);
    app.get("/management?manage=brand", admin.manage.loadProductManagement);
    app.get("/management?manage=orders", admin.manage.loadProductManagement);

    //user
    app.get("/register", index.users.registerPage);
    app.post("/register", index.users.userRegister);
    app.get("/login", index.users.loginPage);
    app.post("/login", index.users.userLogin);
    app.get("/logout", index.users.userLogout);

    //profile
    app.get("/profile", index.profile.defaultPage);
    app.get("/profile/update", index.profile.updatePage);
    app.post('/profile/update',index.profile.updateInfo);

    //Err0r
    app.use(errorPage);
}
