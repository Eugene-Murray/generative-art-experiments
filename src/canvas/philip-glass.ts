const canvas = document.getElementById('can-philip-glass') as HTMLCanvasElement;
const context = canvas.getContext('2d');



function drawGlassInspiredArt() {
    const colors = ["#1F77B4", "#FF7F0E", "#2CA02C", "#D62728", "#9467BD"];
    const patternSize = 30;
    const iterations = 15;
    
    for (let i = 0; i < canvas.width; i += patternSize) {
        for (let j = 0; j < canvas.height; j += patternSize) {
            const colorIndex = Math.floor(Math.random() * colors.length);
            context.fillStyle = colors[colorIndex];
            
            for (let k = 0; k < iterations; k++) {
                const size = patternSize - (k * (patternSize / iterations));
                context.fillRect(i + (patternSize - size) / 2, j + (patternSize - size) / 2, size, size);
            }
        }
    }
}

drawGlassInspiredArt();
