class Stopwatch {
  constructor() {
    let duration = 0;
    let running = false;
    let startTime = null;
    let endTime = null;

    this.start = () => {
      if (running) throw new Error('Stopwatch has already started');

      running = true;

      startTime = new Date();
    };

    this.stop = () => {
      if (!running) throw new Error('Stopwatch is not started');

      running = false;

      endTime = new Date();

      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    };

    this.reset = () => {
      duration = 0;
      running = false;
      startTime = null;
      endTime = null;
    };

    Object.defineProperty(this, 'duration', {
      get() {
        return duration;
      },
    });
  }
}

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
