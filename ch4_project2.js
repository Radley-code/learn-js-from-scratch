// This function just gives back what you put in
function getInput(value) {
  return value;
}
// Compare two numbers
let UserNum = getInput(19);
let myValue = 19;
if (UserNum > myValue) {
  console.log("Your Value is Greater");
} else if (UserNum < myValue) {
  console.log("Your value is less than");
} else {
  console.log("your value is equal to mine");
}

// Friend Checker game: see if we know your name
function getname(value) {
  return value;
}
let name = getname("Acha");
let response;
switch (name.toLowerCase()) {
  case "radley":
    response = "Hey, Radley How are you doing";
    break;
  case "acha":
    response = "Heloo, Acha";
    break;
  default:
    response = `sorry I don't know ${name}`;
}
console.log(response);

// Use a shortcut to say login or logout
let login = false;
let outputHolder = "";
let userOkay = login ? (outputHolder = "logout") : (outputHolder = "login");
console.log(userOkay);

// Check if a name is in the list
const userNames = ["Mike", "john", "Larry"];
const userInput = "Larry";
let htmlOutput = "";
if (userNames.indexOf(userInput) > -1) {
  htmlOutput = "Welcome, that is a user ";
} else {
  htmlOutput = "Denied, not a user";
}
console.log(htmlOutput + ":" + userInput);

// Rock paper Scissors game (pick a hand)
let array = ["Rock", "Paper", "Scissors"];
let playernum = Math.random();
playernum = Math.floor(playernum * 2);
let computernum = Math.random();
computernum = Math.floor(computernum * 2);
let player = array[playernum];
let computer = array[computernum];
let message;
playernum > computernum
  ? console.log(`${array[playernum]}`)
  : console.log(`${array[computernum]}`);

// AI version of Rock Paper Scissors
let choices = ["Rock", "Paper", "Scissors"]; // choices to pick from

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// See who wins the game
function determineWinner(playerChoice, computerchoice) {
  let result = "";

  if (playerChoice === computerchoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerchoice == "Scissors") ||
    (playerChoice === "Scissors" && computerchoice == "Paper") ||
    (playerChoice === "Paper" && computerchoice == "Rock")
  ) {
    result = `Player wins! ${playerChoice} beats ${computerchoice}`;
  } else {
    result = `Computer wins ${computerchoice} beats ${playerChoice}`;
  }

  return result;
}

// Pick a random choice for the player
function getPlayerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Main game function
function playGame() {
  let playerChoice = getPlayerChoice();
  let computerchoice = getComputerChoice();
  let result = determineWinner(playerChoice, computerchoice);

  console.log(`Player choose: ${playerChoice}`);
  console.log(`Computer chose: ${computerchoice}`);
  console.log(result);
}
// play the game
playGame();

// Try out some math
let a = 5;
let b = 10;
let c = 20;
let d = 30;
console.log(a > b || b > a);
