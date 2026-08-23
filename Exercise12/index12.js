// ADD & CHANGE HTML

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I Like pizza";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1, box3);

const boxes = document.querySelectorAll(".box");// if there is no id's for the elements
document.body.insertBefore(newH1, boxes[1]);

// STEP 4 REMOVE HTML ELEMENT
//document.body.removeChild(newH1);
document.getElementById("box1").removeChild(newH1);