// const Shape = require('./lib/shape.js');
// const shapes = require('./lib/shapes.js');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const { convertShape, generateSvg } = require('./lib/svg-outline.js');

const init = () => {
    //user input prompts to create desired svg logo
    inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
    inquirer.prompt([
        {
            type: "maxlength-input",
            name: "chars",
            message: "Please enter up to 3 letters",
            maxLength: 3,
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
        console.log(answers)
        //convert shape rendering info to a string
        let shapeText = convertShape(answers.shape);
        //populate svg file with answers
        const svgText = generateSvg(shapeText, answers);
        
        //write svg file
        fs.writeFile(`logo.svg`, svgText, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg");
            }
        })
    })
}

init();