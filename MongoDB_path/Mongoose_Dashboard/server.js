//npm init-y
//npm install Express
//npm install ejs
//npm install body-parser
//npm install mongoose

// Require the Express Module
const express = require('express')

// Create an Express App
const app = express();

// Integrate body-parser with our App
const bodyParser = require('body-parser');

// Require path
const path = require('path');

//Require mongoose
const mongoose = require('mongoose');

const ejsLint = require('ejs-lint');

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: false}));

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directorycopy
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/Mongoose_Dashboard');

//create Schemto model a QuoteSchema
const LlamaSchema = new mongoose.Schema({
    name: String,
    color: String,
    weight: Number,
});

//set up schema in our Models as 'quote'
mongoose.model('Llama', LlamaSchema);

// Retrieve this Schema from our Models, named 'quote'
const Llama = mongoose.model('Llama');

// Use native promises
mongoose.Promise = global.Promise;

//here are the routes!
//index
app.get('/', function (req, res) {
    arr = Llama.find({}, function (err, llamas) {
        res.render('index', {arr: llamas});
    });
});

//New
app.get('/new', function (req, res) {
    res.render('new');
})


//create
app.post('/add', function (req, res) {
  console.log("POST DATA", req.body);
  var llama = new Llama({name: req.body.name, color: req.body.color, weight: req.body.weight});
  llama.save(function(err){
    if (err){
      console.log('Something went wrong');
      console.log(llama.errors);
      res.redirect("/")
    }
    else{
      console.log("succesffully added a llama");
      res.redirect('/');
    }
  })
});


app.get('/edit/:id', function(req, res) {
    meer = Llama.findOne({_id: req.params.id}, function(err, llama) {
        console.log(llama);
        res.render('edit', {meer:llama});
    })
})



//Update
//app.get('/:id/edit', function (req, res) {
//    Llama.find({_id: req.params.id}, function (err, response) {
//        if (err) {
//            console.log(err);
//        }
//        res.render('edit', {llama: response[0]});
//    })
//});

//app.post('/:id/edit', function (req, res) {
//    Llama.update({_id: req.params.id}, req.body, function (err, result) {
//        if (err) {
//           console.log(err);
//        }
//       res.redirect('/')
//   })
//});

//app.post('/:id/delete', function (req, res) {
//    Llama.remove({_id: req.params.id}, function (err, result) {
//        if (err) {
//            console.log(err);
//        }
//        res.redirect('/')
//    })
//});



app.listen(8000, function () {
    console.log("listening on port 8000");
})
