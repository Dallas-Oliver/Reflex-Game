class Timer {
  constructor() {
    this.startTime = null;
    this.stopTime = null;
    this.running = false;
    this.seconds = 0;
    this.milliseconds = 0;
    this.s = "00";
    this.ms = "00";
  }

  getTime() {
    const day = new Date();
    return day.getTime();
  }

  start() {
    if (this.running == true) {
      return;
    } else if (this.startTime !== null) {
      this.stopTime = null;
    }
    this.running = true;
    this.startTime = this.getTime();
    return this.startTime;
  }

  stop() {
    if (this.running == false) {
      return;
    }

    this.stopTime = this.getTime();
    this.running = false;
    return this.stopTime;
  }

  elapsed() {
    if (this.startTime == null || this.stopTime == null) {
      return "undefined";
    } else {
      return (this.stopTime - this.startTime) / 1000;
    }
  }

  reset() {
    if (this.startTime !== null && this.stopTime !== null) {
      this.startTime = null;
      this.stopTime == null;
    }
  }
}
