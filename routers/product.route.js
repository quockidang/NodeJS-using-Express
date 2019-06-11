var express = require('express');
var router = express.Router();

var controller = require('../controllers/product.controller');

router.get('/', controller.getProduct);

//router.post('/login', controller.postLogin);

module.exports = router;