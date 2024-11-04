// src/main.ts
const canvas = document.getElementById('can-van-gogh') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function getRandomColor() {
    const colors = ['#FFDD44', '#FFAA00', '#FF8800', '#DD4400', '#BB2200'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function drawSwirl(x: number, y: number, radius: number) {
    ctx.strokeStyle = getRandomColor();
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let i = 0; i < 100; i++) {
        const angle = 0.1 * i;
        const dx = x + (radius + i) * Math.cos(angle);
        const dy = y + (radius + i) * Math.sin(angle);
        ctx.lineTo(dx, dy);
    }
    
    ctx.stroke();
}

function generateArt() {
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 50;
        drawSwirl(x, y, radius);
    }
}

generateArt();
