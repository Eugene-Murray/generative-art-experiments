const canvas = document.getElementById('can-glowing-lines') as HTMLCanvasElement;
const context = canvas.getContext('2d');

function drawGlowingLines() {
    for (let i = 0; i < 50; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = "rgba(0, 0, 255, 0.7)";
        context.lineWidth = 2 + Math.random() * 3;
        context.shadowColor = "rgba(0, 0, 255, 1)";
        context.shadowBlur = 10;
        context.stroke();
    }
}

drawGlowingLines();
