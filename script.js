let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const timeDisplay = document.querySelector('.time-display');


document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);


function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 100);
    }
}

function pauseStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
    }
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    startTime = null;
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
    lapsList.innerHTML = '';
}



function updateTime() {
    const currentTime = Date.now();
    const timeDiff = currentTime - startTime;
    timeDisplay.textContent = formatTime(timeDiff);
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}
