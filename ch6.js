// This is a function that adds two numbers
function addnum(a, b) {
  return a + b;
}
let addition = addnum(2, 3);
console.log(addition);

// This is a special function called an arrow function
let doingArrowStuff = (x) => console.log(x);
doingArrowStuff("Great");

// Another arrow function that adds two numbers and prints it
let addtwonumbers = (x, y) => console.log(x + y);
addtwonumbers(5, 3);

// This is a list of animals
const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach((e) => console.log(e));

// This function can see a value inside itself
function testAvailability(x) {
  console.log("Available here:", x);
}
testAvailability("hi");
// If you try to use x outside, it won't work

// This is a function that runs right away (IIFE)
(function () {
  console.log("IIFE!");
})();

// This is an arrow function that runs right away
(() => {
  console.log("Run right away");
})();

// This changes a string inside a function
let string = "1000";
(function () {
  string = "3400";
  console.log(string);
})();

// This is a function that calls itself again and again (recursion)
function getRecursive(nr) {
  console.log(nr);
  getRecursive(--nr);
}
// getRecursive(3) // This would never stop!

// This is a safe recursive function that stops at 0
function getRecursive2(nr) {
  console.log(nr);
  if (nr > 0) {
    getRecursive2(--nr);
  }
}
getRecursive2(3);

// This function multiplies numbers until it gets to 0
function check(x) {
  console.log(x);
  if (x == 0) {
    console.log(x);
    return 1;
  } else {
    console.log(x);
    return x * check(x - 1);
  }
}
console.log(check(5));

// This is a function inside a function
function doOuterFunctionStuff(nr) {
  console.log("Outer Function");
  doInnerFuntionStuff(nr);
  function doInnerFuntionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer variables: ", nr);
  }
}
doOuterFunctionStuff(2);

// This counts down from a number
let start = 4;
function countdown(x) {
  console.log(x);
  if (x < 1) {
    console.log(start);
  } else {
    countdown(x - 1);
  }
}
countdown(start);

// This is a function with no name (anonymous)
function doingStuffAnonymously() {
  console.log("Not so secret though.");
}
// You can also put a function in a box (variable)
let functionVariable = function () {
  console.log("Not so secret though.");
};
functionVariable();

// Another anonymous function
let functionName = function (x) {
  console.log(x);
};
functionName(4);

// This is a function that takes another function and runs it (callback)
function doFlexibleStuff(executeStuff) {
  executeStuff();
  console.log("Inside doFlexibleStuffFunction.");
}
doFlexibleStuff(functionVariable);

// This is a function to cheer you on!
let youGotThis = function () {
  console.log("You are doing really well, keep coding!");
};
// setTimeout(youGotThis, 1000); // Waits 1 second then runs

// These are arrow functions for printing numbers
let output1 = () => console.log("one");
let output2 = () => console.log("Two");
let output3 = () => console.log("Three");
let printNum1 = () => {
  output3();
  output1();
  output2();
};
let output4 = () => console.log("Four");
let printNum = () => {
  output4();
  setTimeout(printNum1, 0);
  setTimeout(output1, 0);
};
printNum();

// This function keeps adding 10 until it gets to 100
let val = 10;
function tester(val) {
  val += 10;
  if (val < 100) {
    return tester(val);
  }
  return val;
}
tester(val);
console.log(val);

// These are two ways to add 2 to a number
var addFive1 = function addFive1(num) {
  return num + 2;
};
let addFive2 = (num) => num + 2;
console.log(addFive1(14));
