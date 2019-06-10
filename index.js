var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var db = require('./db');
var userRouter = require('./routers/user.router'); 
var authLogin = require('./routers/auth.route');
var authMiddleware = require('./middleware/auth.middleware');

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use('/users', authMiddleware.requireAuth, userRouter);
app.use('/auth', authLogin);


app.listen(port, function(){
    console.log('Server listening on port' + port);
});