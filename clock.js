function getTime() {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }


const now = new Date();

const hh = pad(now.getHours());
const mm = pad(now.getMinutes());
const ss = pad(now.getSeconds());

console.log(`${hh}:${mm}:${ss}`);
}

function tickClock() {
  getTime();
}
tickClock();
setInterval(tickClock, 5000);
