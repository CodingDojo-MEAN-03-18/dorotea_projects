//npm init-y
//npm install Express
//npm install body-parser
//npm install mongoose

// Require the Express Module
const express = require('express');

// Create an Express App
const app = express();

// Integrate body-parser with our App
const bodyParser = require('body-parser');

// configure body-parser to read JSON
app.use(bodyParser.json());

// Require path
const path = require('path');

//Require mongoose
const mongoose = require('mongoose');

//Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/1955_API');

//create Schema model for user
const UserSchema = new mongoose.Schema({
  name: String,
});

//set up schema in our Models as 'quote'
mongoose.model('User', UserSchema);

// Retrieve this Schema from our Models, named 'quote'
const User =  mongoose.model('User')

// Use native promises
mongoose.Promise = global.Promise;

//route to server all the users
app.get('/', function(req, res){
    User.find({}, function(err, users){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: users})
        }
     })
})

//route to add new name

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
});
