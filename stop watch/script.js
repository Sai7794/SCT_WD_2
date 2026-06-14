let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;
let lapCount = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    display.textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
    if (!running) {
        running = true;

        timer = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    running = false;
}

function resetStopwatch() {
    clearInterval(timer);

    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 1;

    updateDisplay();
    laps.innerHTML = "";
}

function addLap() {
    if (running) {
        const lapTime = display.textContent;

        const li = document.createElement("li");
        li.textContent = `Lap ${lapCount}: ${lapTime}`;

        laps.prepend(li);
        lapCount++;
    }
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("pause").addEventListener("click", pauseStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);
document.getElementById("lap").addEventListener("click", addLap);

updateDisplay();