var express = require('express');
var router = express.Router();
var validate = require('../validate/user.validate');
var controller = require('../controllers/user.controller');


var db = require('../db');

// router.get('/', function(req, res){
//     res.render('index');
// });

router.get('/', controller.index);

router.get('/cookie', function(req, res, next){
    res.cookie('user-id', 12345);
    res.send('Hello');
})


router.get('/search', controller.search);

router.get('/create', controller.create)

router.get('/:id', controller.view);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;