const canvas = document.getElementById('can-jackson-pollock') as HTMLCanvasElement;
const context = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//document.body.appendChild(canvas);

function drawPollockSplashes() {
    for (let i = 0; i < 100; i++) {
        context.beginPath();
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = Math.random() * 20 + 5;
        const height = Math.random() * 20 + 5;
        context.ellipse(x, y, width, height, Math.random() * Math.PI, 0, Math.PI * 2);
        context.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        context.fill();
    }
}

drawPollockSplashes();
