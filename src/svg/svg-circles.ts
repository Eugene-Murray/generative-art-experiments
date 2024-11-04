const svgNS = 'http://www.w3.org/2000/svg';
// const svg = document.createElementNS(svgNS, 'svg');
// svg.setAttribute('width', '500');
// svg.setAttribute('height', '500');
// document.body.appendChild(svg);

const svg = document.getElementById('svg-circles');

const centerX = 250;
const centerY = 250;
const numCircles = 20;
const maxRadius = Math.min(centerX, centerY);

for (let i = 0; i < numCircles; i++) {
    const radius = (i + 1) * (maxRadius / numCircles);
    const shadeOfRed = Math.floor((i + 1) * (255 / numCircles));
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', centerX.toString());
    circle.setAttribute('cy', centerY.toString());
    circle.setAttribute('r', radius.toString());
    circle.setAttribute('fill', `rgb(${shadeOfRed}, 0, 0)`);
    svg?.appendChild(circle);
}
