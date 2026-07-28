// STOPWATCH PROGRAM

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunnung = false;

function start() {
    if (!isRunnung) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunnung = true;
    }
}

function stop() {
    if (isRunnung) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunnung = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunnung = false;
    display.textContent = `00:00:00,00`;
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);

    display.textContent = `${hours}:${minutes}:${seconds},${milliseconds}`
}