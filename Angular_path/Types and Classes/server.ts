//Given the code below, re-write it using all TypeScript features you have learned
myNum = 5;
const myNum: number = 5;


myString = "Hello Universe";
const myString: string = "Hello Universe";

myArr = [1,2,3,4];
const myArr: number[1,2,3,4];

myObj = { name:'Bill'};
let myObj: { [key: string]: (string | number) } = { name: 'Bill' };

anythingVariable = "Hey";
let anythingVariable: any = "Hey";


anythingVariable = 25; 
let anythingVariable: any = 25;

arrayOne = [true, false, true, true]; 
var arrayOne: boolean[] = [true, false, true, false];


arrayTwo = [1, 'abc', true, 2];
var arrayTwo: (number | string | boolean)[] = [1, 'abc', true, 2];



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

class MyNode {
    private _priv: number;
  
    constructor(public val: number) {}
  
    doSomething(): void {
      this._priv = 10;
    }
  }
  


myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

const myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction() {
    console.log("Hello World");
    return;
}


function myFunction(): void {
    console.log('Hello World');
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}

function sendingErrors(): never {
	throw new Error('Error message');
}