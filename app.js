// This prints a message to the screen
console.log("Hello world!");

// This makes a box called 'a' and puts the number 10 inside
let a = 10; // set a to 10

// This shows us what is inside the box 'a'
console.log(a); // print the value of a

// This makes a random number between 0 and 99 and shows it
console.log(Math.floor(Math.random() * 100));

// This shows the date and time
console.log(Date());

// This makes a word called 'language' and puts 'JavaScript' in it
let language = "JavaScript";
// This makes a message using the word above
let message = `Let's learn ${language}`;
console.log(message);

// This is how we use quotes inside words
let str = 'Hello,what\'s your name? Is it"Mike"?';
console.log(str);
let str2 = 'Hello,what\'s your name? Is it"Mike"?';
console.log(str2);

// These are different types of things we can use
let str3 = "Hello "; // a word
let nr = 7; // a number
let bigNr = 12345678901234n; // a very big number
let bool = true; // true or false
let sym = Symbol("unique"); // a special symbol
let undef = undefined; // nothing inside
let unknown = null; // also means nothing

// This shows what type each thing is
console.log("str", typeof str3);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);

// This does math with numbers
let nr1 = 10;
let nr2 = 3;
let result1 = nr1 % nr2; // % means 'what is left over'
console.log(`${nr1} + ${nr2} = ${result1}`);

// This asks the user for something and shows it
let a1 = "world";
a1 = prompt("world");
console.log(a1);

// This asks for two numbers and uses a math rule to find the answer
let adj = prompt("enter adjascent");
let opp = prompt("Enter opposite");
let hypo = adj ** 2 + opp ** 2; // ** means 'times itself'
console.log(
  `using pythagorean theorem the hypotenuse of the triangle is ${hypo}`
);
