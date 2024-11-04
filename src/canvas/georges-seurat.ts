// src/main.ts
const canvas = document.getElementById('can-georges-seurat') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawDot(x: number, y: number, size: number) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
}

function generateArt() {
    const dotCount = 5000;
    const maxDotSize = 3;
    
    for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * maxDotSize;
        drawDot(x, y, size);
    }
}

generateArt();
