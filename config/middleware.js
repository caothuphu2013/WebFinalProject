const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

module.exports = function(app) {
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(cookieParser());

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

}