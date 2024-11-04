const canvas = document.getElementById('can-red-circles') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const numCircles = 20;
    const maxRadius = Math.min(centerX, centerY);

    for (let i = 0; i < numCircles; i++) {
        const radius = (i + 1) * 5; //(maxRadius / numCircles);
        const shadeOfRed = Math.floor((i + 10) * (255 / numCircles));
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = getRandomColor();//`rgb(${shadeOfRed}, 0, 0)`;
        ctx.fill();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
