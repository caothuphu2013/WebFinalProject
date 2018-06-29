const categoryDB = require('../models/adminEditProduct');
const q = require('q');

let editProductsController = {
    loadProductEditInfo: function(req, res) {
        if (!req.session.user) {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        } else if (req.session.user.type == 1) {
            let id = req.query.id;
            let p = categoryDB.getProductEdit(id).catch(err => {
                console.log("Error: " + err)
            });
            q.all([p]).spread(function(temp1) {
                res.render("_editproduct/editProduct", {
                    products: temp1,
                    isProduct: true,
                    layout: "admin"
                });
            })
        }
    },
    updateProductInfo: function(req, res) {
        if (!req.session.user) {
            req.session.prePage = req.originalUrl;
            res.redirect('/login');
        } else if (req.session.user.type == 1) {
            let id = req.body.pd_id;
            let name = req.body.pd_name;
            let price = req.body.pd_price;
            let inware = req.body.pd_inware;
            let des_config = req.body.pd_des_config;
            let des_kbtp = req.body.pd_des_kbtp;
            let des_port = req.body.pd_des_port;

            let photo = req.file ? '/img/' + req.file.filename : req.body.pd_image;

            let cpu_name = req.body.pd_cpu_name;
            let cpu_type = req.body.pd_cpu_type;
            let cache = req.body.pd_cache;
            let ram_size = req.body.pd_ram_size;
            let ram_type = req.body.pd_ram_type;
            let ram_busspeed = req.body.pd_ram_busspeed;
            let disk_size = req.body.pd_disk_size;
            let disk_type = req.body.pd_disk_type;
            let disk_round = req.body.pd_disk_round;
            let monitor_tech = req.body.pd_monitor_tech;
            let monitor_size = req.body.pd_monitor_size;
            let monitor_resolution = req.body.pd_monitor_resolution;
            let graphic_size = req.body.pd_graphic_size;
            let chipset = req.body.pd_chipset;
            let network_connection = req.body.pd_network_connection;
            let bluetooth = req.body.pd_bluetooth;
            let hdmi = req.body.pd_hdmi;
            let cardreader = req.body.pd_cardreader;
            let usb = req.body.pd_usb;
            let videoport = req.body.pd_videoport;
            let speaker = req.body.pd_speaker;
            let madein = req.body.pd_madein;
            let manufacturer = req.body.pd_manufacturer;
            let typeproduct = req.body.pd_typeproduct;

            let obj_1 = {
                id,
                name,
                price,
                inware,
                des_config,
                des_kbtp,
                des_port,
                cpu_name,
                cpu_type,
                cache,
                ram_size,
                ram_type,
                ram_busspeed,
                disk_size,
                disk_type,
                disk_round,
                monitor_tech,
                monitor_size,
                monitor_resolution,
                graphic_size,
                chipset,
                network_connection,
                bluetooth,
                hdmi,
                bluetooth,
                cardreader,
                usb,
                videoport,
                speaker,
                madein,
                manufacturer,
                typeproduct,
            }

            let obj_2 = {
                    id,
                    photo,
                }
                //////////////////////////////////////////////
            let p1 = profileDB.updateInfo(obj_1)
                .then(rows => {
                    if (image !== '/img/avatar.jpg') {
                        profileDB.updateAvatar(obj_2)
                            .then(rows => {
                                if (rows) {
                                    req.session.user.image = obj_2.image;
                                    req.flash('success_msg', 'Cập nhật thông tin thành công');
                                    res.redirect('/profile');
                                } else {
                                    req.flash("'error_msg", 'Cập nhật ảnh đại diện thất bại');
                                    res.redirect('/profile');
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    } else {
                        req.flash('success_msg', 'Cập nhật thông tin thành công');
                        res.redirect('/profile');
                    }

                })
                /*
                .fail(err => {
                    req.flash('error_msg', 'Cập nhật thông tin thất bại');
                    res.redirect('/profile/update');
                })*/
                .catch(err => {
                    req.flash('error', 'Hệ thống bị lỗi');
                    console.log(err);
                });
        }
    }
}

module.exports = editProductsController;