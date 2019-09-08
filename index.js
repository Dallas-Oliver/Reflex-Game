const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const container = document.getElementById("container");
const totalTimerDisplay = document.getElementById("total-timer");
const timer = new Timer();
let timerStarted;

function startButtonPressed(e) {
  totalTimerDisplay.textContent = "Get ready!";
  e.preventDefault();
  let randomTime = Math.floor(Math.random() * 10 * 1000) + 900;
  setTimeout(startTimer, randomTime);
}

function stopButtonPressed() {
  if (timerStarted) {
    timerStarted = false;
    timer.stop();
    displayResults(timer.elapsed());
    return timer.elapsed();
  }
}

function startTimer() {
  totalTimerDisplay.textContent = "NOW!";
  timerStarted = true;
  timer.start();
  changeStyles("red");
}

function resetTimer() {
  changeStyles("darkcyan");
  timer.reset();
  totalTimerDisplay.textContent = "";
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
