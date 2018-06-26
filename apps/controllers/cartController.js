const cartDB = require('../models/cart');
const q = require('q');

let cartController = {
    cartPage: function(req, res) {
        if (!req.session.user)
            res.redirect('/login');
        else {
            let username = req.session.user.username;
            cartDB.findByProductIntoCart(username)
            .then(rows => {
                if (rows.length > 0) {
                    res.render('_cart/cart', {
                        user: req.session.user,
                        info: rows,
                        layout: 'index',
                    }) 
                }
                else {
                    res.render('_cart/cart', {
                        user: req.session.user,
                        layout: "index",
                        noCart: 'ok'
                    })
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
    ,
    chooseProductToCart: function(req, res) {
        let idProduct = req.query.id;
        let price = req.query.price;
        if (!req.session.user)
            res.redirect('/login');
        else {
            let username = req.session.user.username;
            let idProduct_cart = username + '_' + idProduct;
            let idCart = username + '_1';
            let count = 1;

            cartDB.findByIdProductCart(idProduct_cart)
                .then(rows => {
                    let p1, p2;
                    if (rows.length > 0) {
                        // update count
                        let count_sql = rows[0].count;
                        p1 = cartDB.updateProductCart(idProduct_cart, +count_sql + count)
                            .catch(err => console.log(err));
                    }
                    else {
                        //insert idProductCart
                        let idCart = username + '_1';
                        p1 = cartDB.insertProductCart(idProduct_cart, idCart, idProduct, count)
                            .catch(err => console.log(err));
                    }
                    //Update cart
                    cartDB.findByCart(idCart).then(rows => {
                        if (rows.length > 0) {
                            let total = rows[0].total;
                            p2 = cartDB.updateCart(idCart, +total + (count * +price));
                        }
                    }).catch(err => console.log(err));

                    ////////////////
                    q.all([p1,p2]).spread(()=>{
                        res.redirect('/cart');
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        }

    }
    ,
    removeProductToCart: function(req, res) {
       let id = req.query.id;
       let money = req.query.money;
       let username = req.session.user.username;
       let idProduct_cart = username + '_' + id;
       let idCart = username + '_1';

       let p1, p2;
       p1 = cartDB.removeProduct(idProduct_cart).catch(err => console.log(err));
       
        cartDB.findByCart(idCart)
            .then(rows => {
                let total = rows[0].total;
                let total_new = total - money;
                p2 = cartDB.updateCart(idCart, total_new).catch(err => console.log(err));
            })
            .catch(err => console.log(err))
            /*
            .fail(err => {
                res.redirect('/error');
            });
            */
        
            q.all([p1,p2]).spread(() => {
                res.redirect('/cart');
            });
    }
}

module.exports = cartController;