var md5 = require('md5');

var db = require('../db');





module.exports.login = function(req, res){
    res.render('auth/login');
}

module.exports.postLogin = function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({ email: email}).value();

    if(!user){
        res.render('auth/login', {
            errors: [
                'User dose not exists'
            ],
            values: res.body
        });
        return;
    }
    var hashPassword = md5(password);

    if(user.password != hashPassword){
        res.render('auth/login', {
            errors: [
                'Wrong Password'
            ],
            values: res.body
        });
        return;
    }
    res.cookie('userId', user.id);
    res.redirect('/users');
}