export class MyTimer {
  interval = null;
  counter: number;
  pause: boolean;
  element: HTMLElement = null;
  ciclo: HTMLElement = null;
  lap: number;

  constructor(timer: HTMLElement, ciclo: HTMLElement) {
    this.element = timer;
    this.ciclo = ciclo;
  }

  start() {
    this.counter = 10;
    this.lap = 0;
    this.pause = true;
    this.ciclo.innerHTML = `${this.lap}`;
    this.element.innerHTML = `${this.counter}s`;
    this.interval = setInterval(() => {
      console.log(this.pause);
      if (this.lap === 8) {
        this.element.style.display = 'none';
        clearInterval(this.interval);
      }

      this.counter--;
      this.element.innerHTML = `${this.counter}s`;

      if (this.counter === 0 && this.pause === true) {
        this.counter = 20;
        this.pause = false;
      }

      if (this.counter === 0 && this.pause === false) {
        this.counter = 10;
        this.pause = true;
        this.lap++;
        this.ciclo.innerHTML = `${this.lap}`;
      }
    }, 100);
  }
}
