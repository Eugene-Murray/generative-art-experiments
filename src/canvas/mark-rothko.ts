const canvas = document.getElementById('can-mark-rothko') as HTMLCanvasElement;
const context = canvas.getContext('2d');

function drawRothkoStyle() {
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = canvas.width / 2 + Math.random() * (canvas.width / 2);
        const height = canvas.height / 3 + Math.random() * (canvas.height / 3);
        context.fillStyle = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random() * 0.5 + 0.5})`;
        context.fillRect(x - width / 2, y - height / 2, width, height);
    }
}

drawRothkoStyle();
