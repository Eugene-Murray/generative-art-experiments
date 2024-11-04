// src/main.ts
const canvas = document.getElementById('can-picasso') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawAbstractShape(x: number, y: number) {
    const numberOfSides = getRandomInt(3, 6);
    const size = getRandomInt(20, 100);
    ctx.beginPath();
    ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));          

    for (let i = 1; i <= numberOfSides; i += 1) {
        ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / numberOfSides), y + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }

    ctx.fillStyle = getRandomColor();
    ctx.fill();
}

function generateArt() {
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        drawAbstractShape(x, y);
    }
}

generateArt();
