const getUserInput = require('./lib/input-handler.js');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

async function run() {
    const { shape, color, text } = await getUserInput();
  
    let svgShape;
    switch (shape.toLowerCase()) {
        case 'circle':
            svgShape = new Circle(color);
            break;
        case 'square':
            svgShape = new Square(color);
            break;
        case 'triangle':
            svgShape = new Triangle(color);
            break;
        default:
            throw new Error('Unknown shape');
    }
  
    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShape.render()}
    <text x="150" y="100" fill="white" font-size="60" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
  
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }
  
  run();