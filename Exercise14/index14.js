// MOUSE EVENTS

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "lightpink";
    myBox.textContent = "Don't do it! 🫣";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightseagreen";
    myBox.textContent = "Click me 🙂";
})