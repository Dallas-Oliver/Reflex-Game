const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const container = document.getElementById("container");
const totalTimerDisplay = document.getElementById("total-timer");
const timer = new Timer();
let timerStarted;

function startButtonPressed(e) {
  e.preventDefault();
  let randomTime = Math.floor(Math.random() * 10 * 1000) + 900;
  setTimeout(startTimer, randomTime);
}

function stopButtonPressed() {
  timerStarted = false;
  timer.stop();
  changeStyles("darkcyan");
  displayResults(timer.elapsed());
  return timer.elapsed();
}

function startTimer() {
  timerStarted = true;
  timer.start();
  changeStyles("red");
}

function changeStyles(color) {
  container.style.backgroundColor = color;
}

function displayResults(time) {
  totalTimerDisplay.textContent = timeInCorrectFormat(time);
}

function timeInCorrectFormat(time) {
  let seconds = Math.floor(Math.abs(time));
  let milliSeconds = Math.floor((Math.abs(time) * 60) % 60);
  console.log(seconds, milliSeconds);
  return (
    (seconds < 10 ? "0" : "") +
    seconds +
    ":" +
    (milliSeconds < 10 ? "0" : "") +
    milliSeconds +
    " " +
    "ms"
  );
}

startButton.addEventListener("click", e => startButtonPressed(e));
stopButton.addEventListener("click", e => stopButtonPressed(e));
resetButton.addEventListener("click", () => resetTimer());

// let seconds = 0;
// let milliseconds = 0;
// let s = "00";
// let ms = "00";
// let timer;
// let timerIsRunning = false;

// function timerSwitch() {
//   timerIsRunning = !timerIsRunning;

//   if (!timerIsRunning) {
//     stopTimer();
//   } else {
//     startTimer();
//   }
// }

// function startTimer() {
//   timer = setTimeout(countTimer, 10);
// }

// function countTimer() {
//   milliseconds++;

//   if (milliseconds >= 100) {
//     milliseconds = 0;
//     seconds++;
//   }

//   s = seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00";
//   ms = milliseconds > 9 ? milliseconds : "0" + milliseconds;

//   totalTimerDisplay.textContent = s + ":" + ms + " " + "ms";

//   startTimer();
// }

// function stopTimer() {
//   clearTimeout(timer);
// }

// function resetTimer() {
//   timerIsRunning = true;
//   changeStyles("Start", "darkcyan");

//   clearTimeout(timer);

//   seconds = 0;
//   milliseconds = 0;

//   s = "";
//   ms = "";
//   totalTimerDisplay.textContent = "00" + ":" + "00" + " " + "ms";
// }
