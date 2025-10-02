// Count from 0 to 9
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Look for a name in a list
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
  } else {
    someArray.shift();
  }
}

// Make a list of Fibonacci numbers
let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}

/*
// Guess the number game (commented out)
let maxvalue = 10;
let solution = Math.floor(Math.random()*maxvalue)
console.log(`Solution: ${solution}`);// for development purposes

let iscorrect = false;
while(!iscorrect){
    let userguess = Number(prompt(`Guess a number between 1 and ${maxvalue}`));

    if(userguess === solution){
        alert("Congratulations! You guessed the number correctly!");
        iscorrect = true;
    }else if (userguess > solution){
        alert("Your guess is higher. Try again");
    }else{
        alert("Your guess is too low. Try again");
    }
}
*/

// Make a table of arrays
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j > 7; j++) {
    arrOfArrays[i].push(j);
  }
}
console.log(arrOfArrays);
console.table(arrOfArrays);

// Make a 3x3 table with numbers
let myTable = [];
let numOfRows = 3;
let numOfCols = 3;
let counter = 0;
for (let i = 0; i < numOfRows; i++) {
  let tempTable = [];
  for (let j = 0; j < numOfCols; j++) {
    counter++;
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}
console.log(myTable);

// Make a list and fill it with numbers
let myarray = [];
let increment = 0;
for (let i = 0; i < 10; i++) {
  myarray[i] = increment + i;
}
for (let numArr of myarray) {
  console.log(numArr);
}

// Show all the parts of a car
let car = {
  make: "M8",
  model: "BMW",
  year: 2006,
};
for (let prop in car) {
  console.log(car[prop]);
}
for (let key of Object.keys(car)) {
  console.log(key);
}
for (let key of Object.values(car)) {
  console.log(key);
}
let arrKeys = Object.keys(car);
for (let i = 0; i < arrKeys.length; i++) {
  console.log(arrKeys[i] + ":" + car[arrKeys[i]]);
}

// Show all the parts of a boy
let boy = {
  name: "radley",
  age: 19,
};
for (let prop in boy) {
  console.log(boy[prop]);
}
for (let key of Object.keys(boy)) {
  console.log(key);
}
let boyKeys = Object.keys(boy);
for (let i = 0; i < boyKeys.length; i++) {
  console.log(boyKeys[i] + ":" + boy[boyKeys[i]]);
}
