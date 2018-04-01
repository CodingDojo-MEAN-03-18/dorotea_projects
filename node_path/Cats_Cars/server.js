
//npm install Express
//npm install path
//npm install ejs


//load the necessary modules
var express = require("express");
var path = require("path");

var app = express();

//this tells where to find the views/html files!
app.set('view engine', 'ejs');
//this telss express for any static files like css or images, look in the public folder!
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/cars', function (req, res) {
    res.render('cars');
})

app.get('/cats', function (req, res) {
    res.render('cats');
})

app.get('/cars/new', function (req, res) {
    res.render('carnew');
})

app.listen(8000, function () {
    console.log('Listening on port 8000');
})
