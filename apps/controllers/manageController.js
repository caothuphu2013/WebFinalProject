const categoryDB = require('../models/adminProduct');
const q = require('q');

let manageController = {
    loadProductManagement : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
            let p = categoryDB.getProducts().catch(err => {
                console.log("Error: " + err)});
            q.all([p]).spread(function(temp1) {
                res.render("_admin/manage", {
                    products: temp1,
                    isProduct: true,
                    manageSession: 'admin_Manage_Product',
                    layout: "admin"
                });
            })
        }
        else
        res.redirect('/error');
    },
    loadTypeManagement : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
        let p = categoryDB.getType().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                types: temp1,
                isProduct: false,
                manageSession: 'admin_Manage_Type',
                layout: "admin"
            });
        })
        }
        else
        res.redirect('/error');
    },
    loadBrandManagement : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
        let p = categoryDB.getBrand().catch(err => {
                console.log("Error: " + err);});
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                brands: temp1,
                isProduct: false,
                manageSession: 'admin_Manage_Brand',
                layout: "admin"
            
            });
        })
        }
        else
        res.redirect('/error');
    },
    loadOrdersManagement : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
        let p = categoryDB.getOrders().catch(err => {
                console.log("Error: " + err);});
        let temp = [1];
        q.all([p]).spread(function(temp1) {
            res.render("_admin/manage", {
                manageSession: 'admin_Manage_Orders',
                layout: "admin",
                true: 1 == 1,
                isProduct: false,
                orders: temp1,
                isempty: temp1.length === 0,
            });
        })
        }
        else
        res.redirect('/error');
    },
    addProduct : function(req, res) {
        if (!req.session.user)
        {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        }
        else if (req.session.user.type == 1) {
            res.render("_admin/manage", {
                manageSession: 'admin_Add_Product',
                layout: "admin",
                isProduct: false,
                true: 1 == 1
            });
        }
        else
        res.redirect('/error');

    },
    insertProductToDB : function(req, res) {
        let productName = req.body.productName;
        let productType = req.body.typeProduct;
        let price = req.body.price;
        let brand = req.body.brand;
        let date = req.body.date;
        let inware = req.body.inware;

        let cpuName = req.body.cpuName;
        let cpuType = req.body.cpuType;
        let cache = req.body.cache;

        let ramType = req.body.ramType;
        let ramSize = req.body.ramSize;
        let busSpeed = req.body.busSpeed;

        let diskSize = req.body.diskSize;
        let diskType = req.body.diskType;
        let round = req.body.round;

        let monitorTech = req.body.monitorTech;
        let monitorSize = req.body.monitorSize;
        let monitorResolution = req.body.monitorResolution;

        let graphicSize = req.body.graphicSize;
        let chipset = req.body.chipset;
        
        let networkConnection = req.body.networkConnection;
        let bluetooth = req.body.bluetooth;
        let hdmi = req.body.hdmi;
        let reader = req.body.reader;
        
        let usb = req.body.usb;
        let videoport = req.body.videoport;
        let lanport = req.body.lanport;
        let speaker = req.body.speaker;

        let xuatxu = req.body.export;
        let manufacture = req.body.manufacture;
        let quality = req.body.quality;

        let data = {
            productName,
            productType,
            price,
            brand,
            date,
            inware,
            cpuName, cpuType, cache,
            ramType, ramSize, busSpeed,
            diskSize, diskType, round,
            monitorTech, monitorSize, monitorResolution,
            graphicSize, chipset,
            networkConnection, bluetooth, hdmi, reader,
            usb, videoport, lanport, speaker,
            xuatxu, manufacture, quality
        }

        categoryDB.addProduct(data).then((success) => {
            req.flash('success_msg', 'Thêm sản phẩm thành công');
            res.redirect('/management/product')
        })
        .fail((error) => {

        })

    }
}

module.exports = manageController;
