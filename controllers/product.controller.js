var db = require('../db');


module.exports.getProduct = function(req, res){
    var page = parseInt(req.query.page || 1); // n
    var perPage = 8; // 8
    var start = (page - 1)*perPage;
    var end = page*perPage;
    res.render('product/index', {
        products: db.get('Products').value().slice(start, end)
    });
}