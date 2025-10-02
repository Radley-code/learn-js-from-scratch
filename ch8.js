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
