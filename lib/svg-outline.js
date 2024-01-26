const Shape = require('./shape.js');
const { Square, Triangle, Circle } = require('./shapes');

let shapeSpecs = "";
let pickedShape;
const convertShape = (shapeInput) => {
    switch (shapeInput) {
        case "Square":
            pickedShape = new Square;
            shapeSpecs = pickedShape.render();
            return shapeSpecs;
            break;
        case "Triangle":
            pickedShape = new Triangle;
            shapeSpecs = pickedShape.render();
            return shapeSpecs;
            break;
        case "Circle":
            pickedShape = new Circle;
            shapeSpecs = pickedShape.render();
            return shapeSpecs;
    }
}

const generateSvg = (shapeSpecs, {chars, textColor, shapeColor}) =>
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<${shapeSpecs} fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${chars}</text>

</svg>`

module.exports = {
    generateSvg,
    convertShape,
}
