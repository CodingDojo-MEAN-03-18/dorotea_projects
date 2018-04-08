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

//route to dispkay index and messsages
app.get("/", function(req, res) {
	Message.find({}, false, true).populate('_comments').exec(function(err, messages) {
	      res.render('index.ejs', { messages: messages });
	});
});

app.post("/message", function(req, res){
	var newMessage = new Message({ name: req.body.name, message: req.body.message });
	newMessage.save(function(err) {
		if (err) {
			console.log(err);
			res.render('index.ejs', { errors: newMessage.errors });
		} else {
			console.log("success");
			res.redirect('/');
		}
	})
})
app.post("/comment/:id", function(req, res) {
	const messageId = req.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
		const newComment = new Comment({ name: req.body.name, text: req.body.comment });
		newComment._message = message._id;
		Message.update({ _id: message._id }, { $push: { _comments: newComment }}, function(err) {

		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
				res.render('index.ejs', { errors: newComment.errors });
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});


//define schema variable
const Schema = mongoose.Schema;

//define sechmas
//set up one to many relationship by referencing Shema.Types.ObjectID, ref: comment
const MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

//set validation
MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model("Message", MessageSchema);

const Message = mongoose.model("Message");
const CommentSchema = new mongoose.Schema({
	name: String,
	text: String,
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('text').required(true, 'Comment cannot be blank');
mongoose.model("Comment", CommentSchema);

const Comment = mongoose.model("Comment");

app.listen(8000, function () {
    console.log("listening on port 8000");
})
