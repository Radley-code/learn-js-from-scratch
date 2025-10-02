// This brings in a tool to ask questions (for Node.js)
const prompt = require("prompt");

// If it is raining, take an umbrella
let rain = true;
if (rain) {
  console.log("**Taking my umbrella when I nees to go outside**");
} else {
  console.log("**I can leave my umbrella at home**");
}

// If you like coding, say so!
let hobby = "dancing";
if (hobby == "coding") {
  console.log("**I love coding too!**");
} else {
  console.log("**Can you teach me that?**");
}

// Practice: true or false
let myVariable = false;
console.log(myVariable);
if (myVariable == true) {
  console.log("The variable is true");
} else {
  console.log("The variable is false");
}
if (!myVariable) {
  console.log("!true");
} else {
  console.log("True");
}

// Practice: check age
let userAge = prompt("enter your age");
if (userAge >= 21) {
  message = "Entry confirmed And able to purchase alcohol";
} else if (userAge >= 19) {
  message = "Entry confirmed But not able to purchase alcohol";
} else {
  message = "Entry denied";
}
console.log(message);

// Practice: use a shortcut to check ID
let ID = true;
ID == true ? console.log("valid! Enter") : console.log("Entry denied");

// Practice: magic 8-ball game
let randomNumber = Math.random();
randomNumber = Math.floor(randomNumber * 6);
let userInput = prompt("Ask a question:");
let response;
switch (randomNumber) {
  case 0:
    response = "It is certain.";
    break;
  case 1:
    response = "It is decidedly so.";
    break;
  case 2:
    response = "Reply hazy, try again.";
    break;
  case 3:
    response = "Cannot predict.";
    break;
  case 4:
    response = "Do not count on it.";
    break;
  case 5:
    response = "Outlook not so good.";
    break;
  default:
    response = "Error: no answer.";
}

let finalResponse = `You asked: "${userInput}". The magic 8-ball says: ${response}`;
console.log(finalResponse);

// Practice: pick a prize
let prize = prompt("Enter a number between 0 and 10:");
prize = Number(prize);
let OutputMessage = "My Selection:";
switch (prize) {
  case 0:
    OutputMessage += "Sorry, no prize this time!";
    break;
  case 1:
  case 2:
  case 3:
    OutputMessage += "You won a small prize: a sticker!";
    break;
  case 4:
  case 5:
  case 6:
    OutputMessage += "You won a medium prize: a mug!";
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    OutputMessage += "You won a grand prize: a trip to Hawaii!";
    break;
  default:
    OutputMessage =
      "Invalid selection. Please choose a number between 0 and 10.";
}
alert(OutputMessage);
