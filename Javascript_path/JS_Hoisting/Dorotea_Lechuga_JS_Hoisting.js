//Assignment: JavaScript Hoisting
//Predict the output of the following snippets. Do not plug these into the interpreter.


console.log(hello);
var hello = 'world';
//Prediction: it will run as var will be hoisted to the top
// correct answer = it is undefined as asked to print before the variable

var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}
//Prediction: It will recieve an error as the fucntion is called before it is delcared
// Correct Answer:  It runs because the fucntion is hoisted to the top

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//Prediction:  It will print 'super cool'
// Answer: It printed 'super cool'

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

//Prediction: It will print 'chicken' and run the eat function so print 'half-chicken'
//Answer: It printed chicken and half-chicken

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//Prediction: It will produce an error as food's definition is restricted to the mean's fucntion's local scope
//Answer: Produced mean is not a fucntion error

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//Prediction: It will print disco, rock and r&b as the fucntion and var are hosted to the top
//Answer: Prediction was correct!

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//Prediction: It will produce an error becuase global variable for dojo not declared
//Answer: It was able to print san jose seattle burbank and san jose
