const canvas = document.getElementById('draw');
const color = document.getElementById('color');
const lineWidth = document.getElementById('line-width');
const btnClear = document.getElementById('clear');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - (window.innerWidth * 0.1);
canvas.height = window.innerHeight * 0.5625;
ctx.strokeStyle = 'hsl(0, 100%, 50%)';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '10';
// ctx.globalCompositeOperation = 'color';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = 1;

function draw(e) {
  if (!isDrawing) { return; }
  ctx.strokeStyle = `hsl(${hue}, 75%, 60%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue = (hue + 1) % 360;
  direction *= hue % 180 === 0 ? -1 : 1;
  ctx.lineWidth += direction * 0.25;
  color.innerText = ctx.strokeStyle;
  lineWidth.innerText = parseFloat(ctx.lineWidth).toFixed(2);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => { isDrawing = false; });
canvas.addEventListener('mouseout', () => { isDrawing = false; });
btnClear.addEventListener('click', clearCanvas);
