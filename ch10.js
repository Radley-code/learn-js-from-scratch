// In this chapter, we will do basic DOM traversing using the document object that we saw in the previous chapter
// we can do this by stepping into the document object and navigating our way from there onwards

// we'll be using the broswer's console, enter these code onto the browser's console

// Practice Exercise
//more practices on traversing element

document.body.children.greeting.innerText = "bye!";

//but we use this to return as plain text. if replace bye! in line 9 with <b>Bye!</b>
//it displays <b>Bye!</b>
//With HTML around it, we use innerHTML instead of innerText.
document.body.children.greeting.innerHTML = "<b>Bye!</b>"; //returns the Bye! in bold
//selecting element as objects

//Accessing elements in the DOM
// using the console in the browser
document.getElementById("two");
// returns the HTML element

//Practice exercise 10.2

//Accessing elements by tag name
document.getElementsByTagName("div");
// we can access them using the item() method to access them by index
document.getElementsByTagName("div").item(1);

document.getElementsByTagName("div").namedItem("one"); // we can also access them by name, using namedItem() method.

//Practice exercise 10.3
// create html elements
const myEles = document.getElementsByTagName("div");
console.log(myEles[1]);

//Accessing elements by class name
document.getElementsByClassName("example"); //returns the div tags with the example class.
//Practice exercise 10.4

//Accessing elements elements with a CSS selector
//we can also access using the a css selector. querySelector() and querySelectionAll().
document.querySelector("p"); //select the first element that matches the query

document.querySelectorAll("p"); // returns all elements that match the query
//Example
document.querySelectorAll("div"); // returns all divs in the html file.

//Element Click handler.
function stop() {
  alert("Ouch! Stop it!");
} //defining the alert function which triggers wen the div is clicked

//This and the DOM
//in html

//Practice Exercise 10.7



//Manupulating element style
//let's make the hello worlds disappear
function toggledisplay(){


const p = document.getElementById("magic");
if(p.style.display === "none") {
  p.style.display = "block";
}else{
  p.style.display = "none";
}
} // now this function will change the style display of the p element to none

//Make a rainbow
function rainbowify() {
  let divs = document.getElementsByClassName("rainbow-div");
  for(let i=0; i<divs.length; i++){
    divs[i].style.backgroundColor = divs[i].id;
  }
}