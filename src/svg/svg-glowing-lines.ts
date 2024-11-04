 const svgNamespace = "http://www.w3.org/2000/svg";
// const svg = document.createElementNS(svgNamespace, "svg");

// svg.setAttribute("width", `${window.innerWidth}`);
// svg.setAttribute("height", `${window.innerHeight}`);
// document.body.appendChild(svg);

const svg = document.getElementById('svg-glowing-lines');


function createGlowingLine(x1: number, y1: number, x2: number, y2: number) {
    const line = document.createElementNS(svgNamespace, "line");
    line.setAttribute("x1", `${x1}`);
    line.setAttribute("y1", `${y1}`);
    line.setAttribute("x2", `${x2}`);
    line.setAttribute("y2", `${y2}`);
    line.setAttribute("stroke", "rgba(0, 0, 255, 0.7)");
    line.setAttribute("stroke-width", `${2 + Math.random() * 3}`);
    line.setAttribute("filter", "url(#glow)");
    svg?.appendChild(line);
}

const defs = document.createElementNS(svgNamespace, "defs");
const filter = document.createElementNS(svgNamespace, "filter");
filter.setAttribute("id", "glow");

const feGaussianBlur = document.createElementNS(svgNamespace, "feGaussianBlur");
feGaussianBlur.setAttribute("stdDeviation", "3.5");
feGaussianBlur.setAttribute("result", "coloredBlur");

const feMerge = document.createElementNS(svgNamespace, "feMerge");
const feMergeNode1 = document.createElementNS(svgNamespace, "feMergeNode");
feMergeNode1.setAttribute("in", "coloredBlur");
const feMergeNode2 = document.createElementNS(svgNamespace, "feMergeNode");
feMergeNode2.setAttribute("in", "SourceGraphic");

feMerge.appendChild(feMergeNode1);
feMerge.appendChild(feMergeNode2);
filter.appendChild(feGaussianBlur);
filter.appendChild(feMerge);
defs.appendChild(filter);
svg?.appendChild(defs);

for (let i = 0; i < 50; i++) {
    const x1 = Math.random() * window.innerWidth;
    const y1 = Math.random() * window.innerHeight;
    const x2 = Math.random() * window.innerWidth;
    const y2 = Math.random() * window.innerHeight;
    createGlowingLine(x1, y1, x2, y2);
}
