const hands = {};
hands.sec = document.getElementById('sec');
hands.min = document.getElementById('min');
hands.hour = document.getElementById('hour');

function setDate(init) {
  const now = new Date();
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  const secDegrees = (secs / 60) * 360;
  const minDegrees = (mins / 60) * 360;
  const hourDegrees = (hours / 12) * 360;

  hands.sec.style.transitionProperty = init || secs === 0 ? 'none' : 'transform';
  hands.min.style.transitionProperty = init || mins === 0 ? 'none' : 'transform';
  hands.hour.style.transitionProperty = init || hours === 12 ? 'none' : 'transform';

  hands.sec.style.transform = `rotate(${secDegrees}deg)`;
  hands.min.style.transform = `rotate(${minDegrees}deg)`;
  hands.hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setDate(true);
setInterval(setDate, 1000);
