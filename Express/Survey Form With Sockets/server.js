//note: need to use npm to install the following modules:
//npm install Express
//npm install path
//npm install ejs
//npm install socket.io

// Load the necessary modules
var express = require("express");
var path = require("path");
//var bodyParser = require('body-parser');

var app = express();

// parse application
//app.use(bodyParser.urlencoded({extended: true}));

//tell where to look for files
app.use(express.static(path.join(__dirname, "./static")))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//create variable to hold user information
//var user = {};

app.get('/', function (req, res) {
    res.render('index');
})

//app.post('/submit', function (req, res) {
//    user['name'] = req.body['name'];
//    user['location'] = req.body['location'];
//    user['language'] = req.body['language'];
//    user['comment'] = req.body['comment'];
//    res.redirect('/result');
//})

//app.get('/result', function (req, res) {
//    res.render("result", {user: user});
//})

var server = app.listen(8000, function () {
    console.log('Listening on port 8000');
});
var io = require('socket.io').listens(server);

io.sockets.on('connection', function (socket){
  console.log("client socket is connected");
  console.log("client socket id is ", socket.id);
})

socket.on( "button_clicked", function (data){
    console.log( 'Someone clicked a button!  Reason: '  + data.reason);
    socket.emit( 'server_response', {response:  "sockets are the best!"});
})
