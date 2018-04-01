
//npm install Express
//npm install path
//npm install ejs


//load the necessary modules
var express = require("express");
var path = require("path");

//tell where to look for files
app.use(express.static(path.join(__dirname, "./static")))
app.set('views', path.join(__dirname, './views'));
app.set('images', path.join(__dirname, './images'));
app.set('css', path.join(__dirname, './css'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  //put styel sheet reding in a function that cna call
  //else if(request.url === '/stylesheets/style.css'){
  //  fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
  //   response.writeHead(200, {'Content-type': 'text/css'});
  //   response.write(contents);
  //   response.end();
//    })
//  }
    res.render('index');
})

app.get('/cars', function (req, res) {
    res.render('cars');
})

app.get('/cats', function (req, res) {
    res.render('cats');
})

app.get('/cars/news', function (req, res) {
    res.render('carnew');
})

app.listen(8000, function () {
    console.log('Listening on port 8000');
})
