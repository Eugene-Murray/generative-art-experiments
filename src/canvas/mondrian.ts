// src/main.ts
const canvas = document.getElementById('can-mondrian') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const colors = ['#FF0000', '#FFFF00', '#0000FF', '#FFFFFF'];

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawRectangle(x: number, y: number, width: number, height: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
}

function generateArt() {
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 5;

    const gridSize = getRandomInt(3, 6);
    const rectWidth = canvas.width / gridSize;
    const rectHeight = canvas.height / gridSize;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const x = i * rectWidth;
            const y = j * rectHeight;
            const color = colors[Math.floor(Math.random() * colors.length)];
            drawRectangle(x, y, rectWidth, rectHeight, color);
        }
    }
}

generateArt();
