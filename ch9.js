const eles = document.querySelectorAll(".output");
console.log(eles); //return a static NodeList, which represents a list of the document's element that match the selectors

//Practice Exercise 9.3
const output = document.querySelector('.output');
output.textContent = "Hello World";
output.classList.add("red");
output.id = "tester";
output.style.backgroundColor ="red";
console.log(document.URL);
output.textContent = document.URL;


