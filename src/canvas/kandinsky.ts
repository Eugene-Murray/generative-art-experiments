// src/main.ts
const canvas = document.getElementById('can-kandinsky') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawCircle(x: number, y: number, radius: number) {
    ctx?.beginPath();
    ctx?.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = getRandomColor();
    ctx?.fill();
    ctx?.stroke();
}

function drawSquare(x: number, y: number, size: number) {
    ctx?.beginPath();
    ctx?.rect(x, y, size, size);
    ctx.fillStyle = getRandomColor();
    ctx?.fill();
    ctx?.stroke();
}

function drawLine(x1: number, y1: number, x2: number, y2: number) {
    ctx?.beginPath();
    ctx?.moveTo(x1, y1);
    ctx?.lineTo(x2, y2);
    ctx.strokeStyle = getRandomColor();
    ctx?.stroke();
}

function generateArt() {
    for (let i = 0; i < 30; i++) {
        drawCircle(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 50);
        drawSquare(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 50);
        drawLine(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * canvas.width, Math.random() * canvas.height);
    }
}

generateArt();
