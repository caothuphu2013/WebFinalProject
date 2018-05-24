const express = require('express');
const exphbs = require('express-handlebars');
const express_handlebars_sections = require('express-handlebars-sections');
const bodyParser = require('body-parser');
const path = require('path');
const wnumb = require('wnumb');

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

var handleLayoutMDW = require('./middle-wares/handleLayout'),
    handle404MDW = require('./middle-wares/handle404');

var homeController = require('./controllers/homeController'),
    categoryController = require('./controllers/categoryController'),
    productController = require('./controllers/productController'),
    accountController = require('./controllers/accountController');

var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/_layouts/',
}));
app.set('view engine', 'hbs');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//
// session

/*
var sessionStore = new MySQLStore({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'qlbh',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));
*/

app.use(handleLayoutMDW);

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home', homeController);
app.use('/category', categoryController);
app.use('/product', productController);
app.use('/account', accountController);

app.use(handle404MDW);

app.listen(3000, () => {
    console.log('Site running on port 3000');
});