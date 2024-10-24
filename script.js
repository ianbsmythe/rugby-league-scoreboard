// Score variables
let scoreHome = document.getElementById("home-score");
let scoreAway = document.getElementById("away-score");
let countHome = 0;
let countAway = 0;

// Timer variables
let timerInterval = null; // Declare timerInterval globally
let remainingTime = 60 * 40;
let timeDisplay = document.getElementById("time-display");
let startStopButton = document.getElementById("start-stop-button"); // Fixed button ID
const initialMainTimer = 2400;
let half = document.getElementById("half-display");

//functions for home team
function homeTry() {
    countHome += 4;
    scoreHome.textContent = countHome;
}

function homeConversion() {
    countHome += 2;
    scoreHome.textContent = countHome;
}

function homePenalty() {
    countHome += 2;
    scoreHome.textContent = countHome;
}

function homeDropGoal() {
    countHome += 1;
    scoreHome.textContent = countHome;
}

// functions for away team
function awayTry() {
    countAway += 4;
    scoreAway.textContent = countAway;
}

function awayConversion() {
    countAway += 2;
    scoreAway.textContent = countAway;
}

function awayPenalty() {
    countAway += 2;
    scoreAway.textContent = countAway;
}

function awayDropGoal() {
    countAway += 1;
    scoreAway.textContent = countAway;
}

// Timer functions
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    clearInterval(timerInterval); // Clear any existing interval
    
    timerInterval = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            half.textContent = parseInt(half.textContent) + 1;
            if (half.textContent > 2) {
                half.textContent = '1';
            }
        }
        remainingTime = timer;
    }, 1000);
}

function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        startStopButton.textContent = "PLAY"; // Updated button text
    } else {
        startTimer(remainingTime, timeDisplay);
        startStopButton.textContent = "PAUSE"; // Updated button text
    }
}

function newGame() {
    // Reset scores
    countHome = 0;
    countAway = 0;
    scoreHome.textContent = countHome;
    scoreAway.textContent = countAway;

    // Reset timer
    clearInterval(timerInterval);
    remainingTime = initialMainTimer;
    startTimer(initialMainTimer, timeDisplay);
    startStopButton.textContent = "PAUSE";

    // Reset half
    half.textContent = '1';
}

// Initialize timer when page loads
window.onload = function() {
    startTimer(remainingTime, timeDisplay);
}