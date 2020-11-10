const canvas = document.getElementById('draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop if not drawing
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath();

  //start from 
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // lastX = e.offsetX;
  // lastY = e.offsetY;
  hue ++; 
  // will increment the color of hue and so it permanently changes color
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction; // so it will increase and then decrease
  }

  if (direction) {
    ctx.lineWidth ++;
  } else {
    ctx.lineWidth --;
  }
    

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; 
  //otherwise all lines are always connected
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);