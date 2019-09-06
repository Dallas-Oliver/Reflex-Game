const startButton = document.getElementById("test");
const resetButton = document.getElementById("reset");
const container = document.getElementById("container");
const totalTimerDisplay = document.getElementById("total-timer");

let seconds = 0;
let milliseconds = 0;
let s = "00";
let ms = "00";
let timer;
let buttonSwitch = true;

function playGame() {
  startButton.textContent = "Stop";
  let randomTime = Math.floor(Math.random() * 10 * 1000) + 900;
  setTimeout(() => changeBackground(), randomTime);

  startButton.removeEventListener("click", () => playGame());
  startButton.addEventListener("click", () => stopTimer());
}

function changeBackground() {
  startTimer();
  startButton.textContent = "Stop";
  container.style.backgroundColor = "red";
}

function countTimer() {
  milliseconds++;

  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }

  s = seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00";
  ms = milliseconds > 9 ? milliseconds : "0" + milliseconds;

  totalTimerDisplay.textContent = s + ":" + ms + " " + "ms";

  timerDuration();
}

function timerDuration() {
  if (seconds !== 99) {
    timer = setTimeout(countTimer, 10);
  }
}

function stopTimer() {
  clearTimeout(timer);
}

function startTimer() {
  buttonSwitch = !buttonSwitch;

  if (buttonSwitch == false) {
    timerDuration();
  } else {
    stopTimer();
  }
}

function resetTimer() {
  buttonSwitch = true;
  startButton.textContent = "Start";
  container.style.backgroundColor = "darkcyan";
  clearTimeout(timer);

  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  m = "";
  s = "";
  ms = "";
  totalTimerDisplay.textContent = "00" + ":" + "00" + " " + "ms";
}

startButton.addEventListener("click", () => playGame());
resetButton.addEventListener("click", () => resetTimer());
