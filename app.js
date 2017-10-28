var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 1234;
var router = require('./routes/router');
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

var ejs = require('ejs');
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(port, () => {
    console.log('Started at ' + port);
});
