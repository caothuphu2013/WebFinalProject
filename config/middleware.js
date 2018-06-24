const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const flash = require('connect-flash');
const layout = require('../apps/models/layout');
const q = require('q');

const config = require('./database');
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;

module.exports = function(app) {

    app.use(express.static("public"));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    //Express Session
    app.use(session({
        secret: 'secret',
        saveUninitialized: true,
        resave: true
    }))
    
    app.use(expressValidator({
        errorFormatter: function(param, msg, value) {
            var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

            while(namespace.length) {
                formParam += '[' + namespace.shift() + ']';
            }
            return {
                param: formParam,
                msg: msg,
                value: value
            }
        }
    }));

    app.use(flash());

    app.use(function(req, res, next) {
        res.locals.success_msg = req.flash('success_msg');
        res.locals.error_msg = req.flash('error_msg');
        res.locals.error = req.flash('error');
        next();
    });

    app.use(function(req, res, next) {
        q.all([layout.getBrands(),layout.getTypes()]).spread(function(temp1,temp2) {
            res.locals.layoutVM = {
            brandsList: temp1, 
            typesList: temp2
            }
        })
        next();
    });

    
    app.use(passport.initialize());
    app.use(passport.session());

    //passpor
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    })

    // Use the FacebookStrategy within Passport.
    passport.use(new facebookStrategy({
        clientID: config.facebook_api_key,
        clientSecret: config.facebook_api_secret,
        callbackURL: config.callback_url
    }, 
        function (accessToken, refreshToken, profile, done) {
            process.nextTick(function() {
                //Check whether the User exists or not using profile.id
                return done(null, profile);
            })
        }
    ));
}