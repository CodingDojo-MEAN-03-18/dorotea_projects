//Given the code below, re-write it using all TypeScript features you have learned
myNum = 5;
var myNum: number = 5;


myString = "Hello Universe";
var myString: string = "Hello Universe";

myArr = [1,2,3,4];
var myArr: number[1,2,3,4];

myObj = { name:'Bill'};
function myObj(){
    var myObj = 'Bill';
}


anythingVariable = "Hey";
var anythingVariable: any = "Hey";


anythingVariable = 25; 
var anythingVariable: any = 25;

arrayOne = [true, false, true, true]; 
var arrayOne: boolean[true, false, true, false];


arrayTwo = [1, 'abc', true, 2];
var arrayTwo: any[1, 'abc', true, 2];



myObj = { x: 5, y: 10 };
const myObj = {
    x:5, y: 10
}


// object constructor
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}