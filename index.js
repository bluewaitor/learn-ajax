/**
 * Created by waitor on 2015/10/23.
 */

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
//app.all('*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//    res.header("X-Powered-By",' 3.2.1');
//    res.header("Content-Type", "application/json;charset=utf-8");
//    next();
//});



var port = process.env.PORT || 8888;

require('./routes/users.routes.js')(app);

app.listen(port);
console.log('server start on port ' + port);
