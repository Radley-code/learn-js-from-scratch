//script for pratice exercise 11.1
let darkMode = false;
window.onclick = () => {
  console.log(darkMode); //consol logs the darkMode
  if (!darkMode) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    darkMode = true;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    darkMode = false;
  }
}; //runs when click any where on the screen
