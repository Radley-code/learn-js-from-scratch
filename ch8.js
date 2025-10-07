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

function printStuff(element, index){
  console.log("Printing stuff:", element, "on array position:", index);
}
arr.forEach(printStuff); //Prints out all the elemnts and their index

//Filtering an array
let arr2 = ["squirrel", 5, "Tjed", new Date(), true];

function checkString(element, index){
  return typeof element === "string";
}

let filterArr = arr2.filter(checkString);
console.log(filterArr);

//Mapping the values of an array
let arr3 = [1, 2, 3, 4];
let mapped_arr = arr3.map(x => x + 1); //Add 1 to all the elements of the array
console.log(mapped_arr); //Outputs the array values which has been increased by 1

//Finding the last occerence in an array
let bb = ["so", "bye", "bye","love"];
console.log(bb.lastIndexOf("bye")); // Outputs the Index 2 holds the last bye variable

//Practice Exercise 8.2
let people = ["Laurence", "Laurence", "Laurence", "Laurence", "Mike" ,"Mike", "Mike", "Larry", "Kim", "Joanne"];
let arr4 = people.filter ( (value, index, array) => {
  console.log(value,index,array.indexOf(value));
  return array.indexOf(value) === index;
});
console.log(arr4)

//Practice Exercise 8.3
let numbers = [89,5,4,3,42,1];
let mapped_num = numbers.map(x => x*2);
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
console.log(indexNotFound); //outputs -1 bcs the dtring we are searching for doesnt occur in the target string
if(poem.indexOf("python") != -1) {
  //do stuff (check before dealing with the result)
}

//search method (search for a particular substring within a string)
let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

//Creating substrings
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
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