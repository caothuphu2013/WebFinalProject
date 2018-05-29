var mysql  = require('mysql');

var configdb = require("../../config/database.js");

var connections = mysql.createConnection(configdb);

module.exports = connections;
