// src/main.ts
const canvas = document.getElementById('can-bridget-riley') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawStripes() {
    const stripeWidth = 20;
    const color1 = '#000';
    const color2 = '#FFF';
    
    for (let i = 0; i < canvas.width / stripeWidth; i++) {
        ctx.fillStyle = i % 2 === 0 ? color1 : color2;
        ctx.fillRect(i * stripeWidth, 0, stripeWidth, canvas.height);
    }
}

function drawWaves() {
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 5;

    for (let i = 0; i < canvas.width; i += 10) {
        ctx.moveTo(i, 0);
        for (let j = 0; j < canvas.height; j += 40) {
            ctx.quadraticCurveTo(i + 5, j + 20, i, j + 40);
        }
    }
    
    ctx.stroke();
}

function generateArt() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStripes();
    drawWaves();
}

generateArt();
