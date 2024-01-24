const Shape = require('./lib/shape.js');
const shapes = require('./lib/shapes.js');

console.log(shapes);
console.log(shapes.Triangle);

const init = () => {
    //user input prompts to create desired svg logo
    inquirer.prompt([
        {
            type: "input",
            name: "chars",
            message: "Please enter up to 3 letters",
        },
        {
            type: "input",
            name: "textColor",
            message: "What color should the text be?",
        },
        {
            type: "list",
            name: "shape",
            message: "Please choose your preferred shape",
            choices: ["Triangle", "Square", "Circle"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color should the shape be?",
        }
    ])
    .then((answers) => {
        //populate svg file with answers
        //write svg file
    })
}

init();