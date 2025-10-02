// Classes are like blueprints for making things

// This is how we used to make a Dog (old way)
// function Dog(DogName, weight, color, breed) { ... }

// This is the new way to make a Dog (using class)
class Dog {
  constructor(DogName, weight, color, breed) {
    this.DogName = DogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}

// Make a new dog
let dog = new Dog("Jacky", 2.4, "brown", "chihuahua");
console.log(dog.DogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

// Classes can have default values
class Person {
  constructor(firstname, lastname = "Doe") {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
let p = new Person("Acha", "Radley");
console.log("Hi", p.firstname);
let p2 = new Person("Maaike");
console.log("Hello", p2.firstname);
console.log("and yes my lastname", p2.lastname, "by default");

// Make a person class and use it
class person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
let friend1 = new person("Van", "Putten");
let friend2 = new person("Eden", "Gard");
console.log("Hello", friend1.firstname, friend1.lastname);
console.log("Hello", friend2.firstname, friend2.lastname);

// Properties are like boxes inside a class
class People {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
}
let P = new People("Maria", "Saga");
console.log(P.firstname); // Can't see #firstname from outside

// Getters and setters let us get and set values safely
class People2 {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
}
let p1 = new People2("Maria", "Saga");
console.log(p1.firstname);
p1.firstname = "Adnane"; // Now we can change the name
console.log(p1.firstname);

// This class makes sure the name starts with M
class Mname {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    if (firstname.startsWith("M")) {
      this.#firstname = firstname;
    } else {
      this.#firstname = "M" + firstname;
    }
  }
}
let Mname1 = new Mname("adame");
Mname1.firstname = "NOm";
console.log(Mname1.firstname);

// Inheritance: one class can use another class's stuff
class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log("moving at", this.currentSpeed);
  }
  accelerate(amount) {
    this.currentSpeed += amount;
  }
}
// Motorcycle is a kind of Vehicle
class Motorcycle extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
  doWheelie() {
    console.log("Driving on one wheelie!");
  }
}
let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

// Prototypes let us add new tricks to classes
class Someone {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there!");
  }
}
Someone.prototype.introduce = function () {
  console.log("Hi, I'm", this.firstname);
};
Someone.prototype.favoriteColor = "green";
let human = new Someone("Maria", "Saga");
console.log(human.favoriteColor);
human.introduce();

// Make an Animal class and add an action
class Animal {
  constructor(name, habitat, size) {
    this.name = name;
    this.habitat = habitat;
    this.size = size;
  }
  getname() {
    console.log(this.name);
  }
}
Animal.prototype.action = function () {
  console.log(`${this.name} is running around!`);
};
let doggie = new Animal("Max", "Home", "medium");
let cat = new Animal("Siriki", "Home", "small");
doggie.getname();
doggie.action();
console.log(doggie);

// Employee Tracking App: keep track of workers
class employee {
  constructor(fname, lname, numOfYrs) {
    this.fname = fname;
    this.lname = lname;
    this.numOfYrs = numOfYrs;
  }
}
employee.prototype.details = function () {
  return `Here's ${this.fname} ${this.lname}. Worked here for ${this.numOfYrs} years`;
};
let empArr = [
  (emp1 = new employee("Mac", "Alister", 4)),
  (emp2 = new employee("Bat", "Man", 5)),
];
empArr.forEach((employee) => {
  console.log(employee.details());
});

// Menu items price Calculator: add up food prices
class MenuCalculator {
  #item1Price = 500;
  #item2Price = 650;
  constructor(item1Qty, item2Qty) {
    this.item1Qty = item1Qty;
    this.item2Qty = item2Qty;
  }
  calculateTotal() {
    return this.item1Qty * this.#item1Price + this.item2Qty * this.#item2Price;
  }
  get totalCost() {
    return this.calculateTotal();
  }
}
const order1 = new MenuCalculator(3, 31);
const order2 = new MenuCalculator(26, 3);
const order3 = new MenuCalculator(2, 34);
console.log(`Order 1 total: $${order1.totalCost.toFixed(2)}`);
console.log(`Order 2 total: $${order2.totalCost.toFixed(2)}`);
console.log(`Order 3 total: $${order3.totalCost.toFixed(2)}`);
