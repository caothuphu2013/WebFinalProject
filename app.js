const express = require('express');
const bodyparser = require('body-parser');
const config = require('config');
const session = require('express-session');

const controllers = require(__dirname + '/apps/controllers');
const app = express();

const host = config.get("server.host");
const port = config.get("server.port");

//engine
app.set('views' , __dirname + '/apps/views');
app.set('view engine', 'hbs');

//static public
app.use('/static', express.static(__dirname + '/public'));

//controllers
app.use(controllers);

//create
app.listen(port, host, (req, res) => {
    console.log("Server is running on port " + port);
})