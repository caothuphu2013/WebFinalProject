const express = require('express');
const router = express.Router();

router.use('/home', require(__dirname + '/home')); // localhost:port/home => gọi file home.js

router.get('/', (req, res) => {
    res.render('text');
});

module.exports = router;