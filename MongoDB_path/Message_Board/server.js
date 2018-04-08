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
app.use(bodyParser.urlencoded({extended: false}));

// Setting our Views Folder Directorycopy
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/Message_Board');

//set up one to many relationship so can post comments

//define schema variable
var Schema = mongoose.Schema;

//define post schema
var PostSchema = new mongoose.Schema({
 text: { type: String, required: true },
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.

//define comment schema
var CommentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: { type: String, required: true },
}, {timestamps: true });
// store our models in variables
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/', function(req, res) {
    res.render('index');
})

// route for getting a particular post and comments
//app.get('/posts/:id', function (req, res){
 //Post.findOne({_id: req.params.id})
 //.populate('comments')
 //.exec(function(err, post) {
//      res.render('post', {post: post});
//        });
//})

// route for creating one comment with the parent post id
//app.post('/posts/:id', function (req, res){
//Post.findOne({_id: req.params.id}, function(err, post){
  //       var comment = new Comment(req.body);
  //       comment._post = post._id;
  //       post.comments.push(comment);
  //       comment.save(function(err){
//                 post.save(function(err){
//                       if(err) { console.log('Error'); }
//                       else { res.redirect('/'); }
//                 });
//         });
//   });
 //});
