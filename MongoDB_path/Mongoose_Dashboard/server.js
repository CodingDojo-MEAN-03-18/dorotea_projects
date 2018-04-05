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

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

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
  name: {
    type: String,
    required: true,
    minLength: 3},
  color: String,
  weight: Number,
  isAlive:{
    type: Boolean,
    default: true,
  }
});

//set up schema in our Models as 'quote'
mongoose.model('Llama', LlamaSchema);

// Retrieve this Schema from our Models, named 'quote'
const Llama =  mongoose.model('Llama');

// Use native promises
mongoose.Promise = global.Promise;

//here are the routes!

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/llama/new', function(req, res) {
    res.render('new');
})

//when doing the page to show all llamas, try to make in in a table see screen shot from lecture

app.listen(8000, function() {
    console.log("listening on port 8000");
})
