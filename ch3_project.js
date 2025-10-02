// Make a list of things to buy
shoppinglist = ["Milk", "Bread", "Apples"];
// Add Bananas and Eggs to the list
shoppinglist.splice(1, 0, "Bananas", "Eggs");
// Take the last thing off the list
shoppinglist.pop();
// Show the list
console.log(shoppinglist);
// Put the list in order
shoppinglist.sort();
// Find where 'Milk' is in the list
let findindex = shoppinglist.indexOf("Milk");
console.log(findindex);
// Add Carrots and Lettuce to the list
shoppinglist.splice(1, 0, "Carrots", "Lettuce");
// Make a new list
newlist = ["Juice", "Pop"];
// Put both lists together
let combinedlist = shoppinglist.concat(newlist);
// Find where 'Pop' is in the new list
let findindex2 = combinedlist.indexOf("Pop");
console.log(findindex2);
console.log(combinedlist);

// Lists inside lists (like a box of boxes)
let value1 = [1, 2, 3];
let value2 = [1, 2, 3];
let value3 = [1, 2, 3];
let arrofvalues = [value1, value2, value3];
console.log(arrofvalues);
// Get a number from inside the boxes
let outputvalue = arrofvalues[0][1];
console.log(outputvalue);

// A car is an object with properties
let myCar = {
  make: "BMW",
  model: "M8",
  Year: 2006,
  colour: "Black",
  Used: true,
  forSale: true,
};
// Get the car's make and model
let make1 = myCar.make;
let model1 = myCar.model;
console.log(make1);
console.log(model1);
// Change the car's color
myCar["colour"] = "red";
console.log(myCar.colour);
console.log(myCar.forSale);

// People can have friends (objects in an array)
let people = {
  friends: [],
};
let friend1 = {
  firstname: "john",
  lastname: "micheal",
  id: "1",
};
let friend2 = {
  firstname: "jack",
  lastname: "Paul",
  id: "2",
};
let friend3 = {
  firstname: "john",
  lastname: "micheal",
  id: "3",
};
people.friends.push(friend1, friend2, friend3);
console.log(people);

// Play with a list that has many things
const theList = [
  "Laurence",
  "svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];
theList.pop(); // take last out
theList.shift(); // take first out
theList.splice(0, 0, "FIRST"); // put FIRST at start
theList[4] = "hello world";
theList[2] = "MIDDLE";
theList.push("LAST");
theList.splice(3, 3); // remove some things
theList[3] = "hello world";
console.log(theList);

// Inventory is a list of things in a store
let Inventory = {
  store: [],
};

let item1 = {
  name: "phones",
  model: "iphone",
  cost: 250,
  quantity: 340,
};
let item2 = {
  name: "Laptops",
  model: "HP",
  cost: 250,
  quantity: 432,
};
let item3 = {
  name: "Desktops",
  model: "HP",
  cost: 321,
  quantity: 200,
};
Inventory.store.push(item1, item2, item3);
console.log(Inventory);
let qtyitem3 = item3.quantity;
console.log(qtyitem3);

// Make a list with a hole in it
const myArr2 = [];
myArr2[10] = "test";
console.log(myArr2);
console.log(myArr2[2]); // this is empty

// Make a list and empty it
const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
myArr3.sort(); // put in order
myArr3.length = 0; // make empty
console.log(myArr3[0]); // nothing inside
