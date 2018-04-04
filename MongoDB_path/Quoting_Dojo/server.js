//npm install Express
//npm install ejs
//npm install body-parser
//npm install mongoose

// Require the Express Module
const express = require('express');

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
mongoose.connect('mongodb://localhost/Quoting_Dojo');

//create Schemto model a QuoteSchema
const QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String,
  quote_date: {type: Date, default: Date.now}
});
//set up schema in our Models as 'quote'
mongoose.model('Quote', QuoteSchema);

// Retrieve this Schema from our Models, named 'quote'
const Quote =  mongoose.model('Quote')

// Use native promises
mongoose.Promise = global.Promise;

//Set up the routes
app.get('/', function(req, res) {
    res.render('index');
})

app.post('/quotes', function(req, res) {
  Quote.create(req.body,function(err){
    if (err) {console.log(err)}
    res.redirect('/quotes');
  });
})

app.get('/quotes', function(req, res) {
  // Logic to grab all quotes and pass into the rendered view
  Quote.find({}, function(err, quotes) {
    if (err) { console.log(err); }
    res.render('quotes', { quotes: quotes });
  });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
