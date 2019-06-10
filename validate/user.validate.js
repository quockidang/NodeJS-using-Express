module.exports.postCreate = function (req, res, next){
    var erros = []
    if(!req.body.name){
        erros.push('Name is required');
    }
    if(!req.body.phone){
        erros.push('Phone is required');
    }
     
    if(erros.length){
        res.render('users/create', {
            errors: erros,
            values: req.body
        });
        return;
    }
    next();
}