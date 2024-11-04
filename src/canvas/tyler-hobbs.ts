const canvas = document.getElementById('can-tyler-hobbs') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
    const width = canvas.width;
    const height = canvas.height;
    const numShapes = 50;

    for (let i = 0; i < numShapes; i++) {
        const centerX = Math.random() * width;
        const centerY = Math.random() * height;
        const size = Math.random() * 50;
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const opacity = Math.random();

        ctx.beginPath();
        ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        ctx.fill();
    }
}
