const canvas = document.getElementById('can-joan-miro') as HTMLCanvasElement;
const context = canvas.getContext('2d');

function drawMiroShapes() {
    for (let i = 0; i < 100; i++) {
        context.beginPath();
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 50 + 10;
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        context.fill();
        context.stroke();
    }
}

drawMiroShapes();
