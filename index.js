const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const ref = {
  body: document.querySelector("body"),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColors = {
 intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.timer = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      const randomColor = randomIntegerFromInterval(min, max);
      ref.body.style.backgroundColor = colors[randomColor];
    }, 1000);
  },

  stop() {
    clearInterval(this.timer);
    this.isActive = false;
  },
};

ref.btnStart.addEventListener("click", () => {
  changeColors.start()
});
ref.btnStop.addEventListener("click", () => {
  changeColors.stop()
});