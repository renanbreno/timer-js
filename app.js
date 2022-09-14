const buttons = document.querySelectorAll(".btn");
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;
let isRunning = false;

/* Start */
buttons[0].addEventListener("click", (e) => {
    e.preventDefault();

    if (!isRunning) cron = setInterval(timer, 10);
    isRunning = true;
})

/* Pause */
buttons[1].addEventListener("click", (e) => {
    e.preventDefault();

    clearInterval(cron);
    isRunning = false;
})

/* Reset */
buttons[2].addEventListener("click", (e) => {
    e.preventDefault();

    clearInterval(cron);
    resetValues();
    writeDefaultText();
})

function resetValues() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    isRunning = false;
}

function writeDefaultText() {
    document.getElementById("cron").innerText = "00:00:00:000";
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('cron').innerText = writeDate();
}

function writeDate() {
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}:${millisecond.toString().padStart(3, '0')}`
}