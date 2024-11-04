
const canvas = document.getElementById('can-tyler-hobbs-2') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
    const width = canvas.width;
    const height = canvas.height;
    const numLines = 10000;

    ctx.lineWidth = 2;

    for (let i = 0; i < numLines; i++) {
        const startX = Math.random() * width;
        const startY = Math.random() * height;
        const controlX = Math.random() * width;
        const controlY = Math.random() * height;
        const endX = Math.random() * width;
        const endY = Math.random() * height;
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const opacity = Math.random();

        ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(controlX, controlY, endX, endY);
        ctx.stroke();
    }
}

