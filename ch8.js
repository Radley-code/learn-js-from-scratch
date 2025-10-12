// Built-in JavaScript methods are like magic tricks for words and numbers
let s = "Hello";
console.log(
  s
    .concat(" there!") // add more words
    .toUpperCase() // make all big letters
    .replace("THERE", "you") // change a word
    .concat("You're amazing!") // add more words again
); // you can do many tricks in a row (chaining)

// Global methods are special helpers
let x = "hello";
let y = 7;
console.log(Number.isNaN(y)); // is y not a number? (false)
console.log(isNaN(x)); // is x not a number? (true)

// encodeURI and decodeURI help with web addresses
let uri = "https://www.example.com/submit?name=maaike van putten";
let encode_uri = encodeURI(uri); // make it safe for the web
console.log("Encoded:", encode_uri);
let decode_uri = decodeURI(encode_uri); // turn it back
console.log("Decoded:", decode_uri);

// encodeURIComponent is even safer for web addresses
let uri2 = "https://www.basescripts.com?=Hello World";
let encode_uri2 = encodeURIComponent(uri2);
let decode_uri2 = decodeURIComponent(uri2);
console.log(encode_uri2);
console.log(decode_uri2);

// Change a word to a number
let str_int = "6";
let int_int = parseInt(str_int); // make it a number
console.log("Type of", int_int, "is", typeof int_int);

let float_float = parseFloat(str_int); // make it a number with a dot
console.log("Type of", int_int, "is", typeof float_float);

//Adding the ch8.html

// array methods
let arr = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(element, index) {
  console.log("Printing stuff:", element, "on array position:", index);
}
arr.forEach(printStuff); //Prints out all the elemnts and their index

//Filtering an array
let arr2 = ["squirrel", 5, "Tjed", new Date(), true];

function checkString(element, index) {
  return typeof element === "string";
}

let filterArr = arr2.filter(checkString);
console.log(filterArr);

//Mapping the values of an array
let arr3 = [1, 2, 3, 4];
let mapped_arr = arr3.map((x) => x + 1); //Add 1 to all the elements of the array
console.log(mapped_arr); //Outputs the array values which has been increased by 1

//Finding the last occerence in an array
let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye")); // Outputs the Index 2 holds the last bye variable

//Practice Exercise 8.2
let people = [
  "Laurence",
  "Laurence",
  "Laurence",
  "Laurence",
  "Mike",
  "Mike",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
];
let arr4 = people.filter((value, index, array) => {
  console.log(value, index, array.indexOf(value));
  return array.indexOf(value) === index;
});
console.log(arr4);

//Practice Exercise 8.3
let numbers = [89, 5, 4, 3, 42, 1];
let mapped_num = numbers.map((x) => x * 2);
console.log(mapped_num);

//String Methods

//Combining Strings
let s1 = "Hello";
let s2 = " JavaScript";
let result = s1.concat(s2);
console.log(result);

//Converting a string to an array
let st1 = "Hey";
let st2 = " JavaScript";
let result2 = result.split(" ");
console.log(result2);

// converting an array to a string
let letters = ["a", "b", "c"];
let arrstr = letters.join(); //Add this let arrstr = letters.join('-') to use - instead of comma
console.log(arrstr);

// Working With Index And Positions
let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re); //Outputs the first occurence of re is in are, and the re begins at index 7.

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound); //outputs -1 bcs the string we are searching for doesnt occur in the target string
if (poem.indexOf("python") != -1) {
  //do stuff (check before dealing with the result)
}

//search method (search for a particular substring within a string)
let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

//Creating substrings
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0, 3);
console.log("1:", substr1); //Outputs the value from index 5 and grabs the rest from there
console.log("2:", substr2); //return from index 0 to 3 in the string

//  Replacing parts of the string
let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal"); //replace buddy with pascal in the new string
console.log(new_hi);
// The original string will not be changed

let s3 = "hello hello";
let new_s3 = s3.replace("hello", "oh");
console.log(new_s3); //Only changing the first occerence by default

let s4 = "hello hello";
let new_s4 = s4.replaceAll("hello", "oh"); //This will replace all occurences with the specified string
console.log(new_s4);

// Uppercase And Lowercase
let low_bye = "bye!";
let up_bye = low_bye.toUpperCase(); // holds low_bye in a lowercase
console.log(up_bye); //this doesnt change the original string so we have to capture it.

let caps = "HI. HOW ARE YOU?!";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);

//Number Methods

//Checking if something is (not) a number
let num = 34;
console.log(isNaN(num));
console.log(!isNaN(num));
let str01 = "hi";
console.log(isNaN(str01));

//Specifying a number of decimals

let dec = 1.23456;
let newdec = dec.toFixed(3); // TO 3 DECIMAL PLACES
let newdec2 = dec.toPrecision(4); // precise the total numbers of numbers
console.log(dec, newdec);
console.log(dec, newdec2);

//Math Methods

//Find highest Number
let highest = Math.max(
  2,
  3,
  4,
  1,
  6,
  7,
  8,
  76,
  5,
  4,
  2,
  1,
  5,
  56,
  754,
  3,
  635,
  2,
  2,
  2
); //Max number
console.log(highest);

//Lowest Number
let lowest = Math.min(2, 3, 4, 5, 1, 4, 5, 0, 54, 3);
console.log(lowest);
//If text is the list of number. JavaScript ignores it

//Square Root And Raising to the power of
let rlt = Math.sqrt(64); //Square Root
console.log(rlt);
let rlt2 = Math.pow(5, 3); //5 to the power 3
console.log(rlt2);

// Turning decimals into Integers
let a = 6.78;
let b = 4.38;
console.log("a:", a, "becomes", Math.round(a));
console.log("b:", b, "becomes", Math.round(b));

//Celi
console.log("a:", a, "becomes", Math.ceil(a));
console.log("b:", b, "becomes", Math.ceil(b));

//turning to negative numbers
let negetiveA = -a;
let negetiveB = -b;
console.log("negativeA:", negetiveA, "becomes", Math.ceil(negetiveA));
console.log("negativeB:", negetiveB, "becomes", Math.ceil(negetiveB));
// Because -4 is higher than -6. Ceil() method is always rounding up to the first integer it encounters

//Floor
console.log("a", a, "becomes", Math.floor(a)); //Rounds up to the nearest integer number
console.log("negativeA:", negetiveA, "becomes", Math.floor(negetiveA));

//trunc() exactly same as floor for positive numbers, but it  gets to tese differently(not rounding down simply returns the integer part)
console.log("a:", x, "becomes", Math.trunc(a));

//Exponent And Logarithm
let z = 2;
let exp = Math.exp(z);
console.log(exp);
let log = Math.log(z);
console.log(log);

//Practice Exercise 8.6
let f = 5.7;
console.log(Math.ceil(f));
console.log(Math.floor(f));
console.log(Math.round(f));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); // 0-10
console.log(Math.floor(Math.random() * 10) + 1); // 1-10
console.log(Math.floor(Math.random() * 100) + 1); // 1-100

function ranNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let x = 0; x < 100; x++) {
  console.log(ranNum(1, 100));
}

//Date Methods
//Creating dates
let currentdateTime = new Date();
console.log(currentdateTime); //logs current time and date
//using built-in method, now()
let now2 = Date.now();
console.log(now2); // the current time, represented in seconds since January 1 1970.
//An arbitary date representing the Unix epoch

let milliDate = new Date(1000);
console.log(milliDate); //adding 1000 milliseconds to the unix epoch time

//Convert many string formulas to a date
let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate); // output may vary depending on the region

//You can also specify a certian date using the constructor
let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate); //second parameter is the month. 0 is for January and 11 is for December

//Methods to get and set the elements of a date
let d = new Date();
console.log("Day Of week:", d.getDay());
console.log("Day of month:", d.getMonth());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime()); // time is so high because it's the number of milliseconds since Janaury 1 1970

d.setFullYear(2010); //changing the year to 2010
console.log(d);
// You can search more on date methods

//Parsing Dates
let d1 = Date.parse("June 5, 2021");
console.log(d1); //Many zeros bcs no time or milliseconds arre specified in our string

let d2 = Date.parse("6/5/2021");
console.log(d2); //same example differently

//Converting a date to a string
console.log(d.toDateString()); //Dates back to strings
//Another Method that convert differently
console.log(d.toLocaleDateString());

//Practice Exercise 8.7
let future = new Date(2027, 10, 27);
console.log(future);
const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let day = future.getDay();
let year = future.getFullYear();
let month = future.getMonth();
let date = `${months[month - 1]} ${day} ${year}}`;
console.log(date);

//Chapter Project
//Word Scrambler
let Name = "RadleyCode";
function scramble(val) {
  let max = val.length;
  let temp = "";
  for(let i=0;i<max;i++) {
    console.log(val.length);
    let index = Math.floor(Math.random() * val.length);
    temp += val[index];
    console.log(temp);
    val = val.substr(0, index) + val.substr(index + 1);
    console.log(val);
  }
  return temp;
}

console.log(scramble(Name));

 let str2 = "JavaScript";
 console.log(scramble(str2))  
