class Stopwatch {
  constructor() {
    let duration = 0;
    let running = false;
    let startTime = null;
    let endTime = null;

    Object.defineProperty(this, 'running', {
      get() {
        return running;
      },
    });

    Object.defineProperty(this, 'startTime', {
      get() {
        return startTime;
      },
    });

    Object.defineProperty(this, 'endTime', {
      get() {
        return endTime;
      },
    });

    Object.defineProperty(this, 'duration', {
      get() {
        return duration;
      },
      set(value) {
        duration = value;
      },
    });
  }
}

Stopwatch.prototype.start = () => {
  if (this.running) throw new Error('Stopwatch has already started');

  this.running = true;

  this.startTime = new Date();
};

Stopwatch.prototype.stop = () => {
  if (!this.running) throw new Error('Stopwatch is not started');

  this.running = false;

  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = () => {
  this.duration = 0;
  this.running = false;
  this.startTime = null;
  this.endTime = null;
};

async function runStopwatch() {
  const sw = new Stopwatch();

  sw.start();
  console.log('Stopwatch started');

  await new Promise((resolve) => setTimeout(resolve, 5000));

  sw.stop();
  console.log('Stopwatch stopped');

  console.log(`Elapsed time: ${sw.duration} seconds`);
}

runStopwatch();
