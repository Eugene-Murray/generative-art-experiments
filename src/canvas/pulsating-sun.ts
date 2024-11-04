const canvas = document.getElementById('can-pulsating-sun') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let angle = 0;
let radius = 50;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const x = canvas.width / 2;
  const y = canvas.height / 2;

  radius = 50 + 20 * Math.sin(angle);
  angle += 0.05;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = 'yellow';
  ctx.fill();

  requestAnimationFrame(draw);
}

draw();
