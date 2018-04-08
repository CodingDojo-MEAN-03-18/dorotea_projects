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
const User = mongoose.model('User');

// Use native promises
mongoose.Promise = global.Promise;

//route to server all the users
app.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            console.log("Returned error", err);
            // respond with JSON
            res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
            res.json({message: "Success", data: users})
        }
    })
});

//route to add new name
app.get('/new/:name/', function (req, res) {
    console.log(req.params.name);
    User.create({name: req.params.name});
    res.redirect('/')
});

//route to remove a person
app.get('/remove/:name/', function (req, res) {
    console.log(req.params.name);
    User.remove({name: req.params.name}, function(err, user){
        if(err){
            console.log("Error: Unable to delete person");
        }else{
            console.log("Succes");
            res.redirect('/')
        }
    });

});

//route to remove a person
app.get('/:name', function (req, res) {
    console.log(`fetching ${req.params.name}`);
    User.find({name: req.params.name}, function(err, user){
        if(err){
            console.log('ERROR: unable to fetch person');
        } else {
            console.log(`successfully fetched ${req.params.name}!`);
            res.send(user);
        }
    })
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
