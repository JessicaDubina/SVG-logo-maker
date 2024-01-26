const {generateSvg, convertShape} = require('../lib/svg-outline.js');

describe('generateSvg', () => {
    it("should generate svg text given proper inputs" , () => {
        let text="this-text";
        inputObj = {
            chars: "ABC",
            textColor: "Blue",
            shapeColor: "Green",
        }
        expect(generateSvg(text, inputObj)).toBe(
        `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<this-text fill="Green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="Blue">ABC</text>

</svg>`
        );
    })
});

describe('convertShape', () => {
    it("should create a text string with the shape specs based on the shape input" , () => {
        expect(convertShape("Square")).toBe('rect x="50" y="0"  width="200" height="200"');
        expect(convertShape("Triangle")).toBe('polygon points="0, 200 300, 200 150, 0"');
        expect(convertShape("Circle")).toBe('circle cx="150" cy="100" r="100"');
        expect(convertShape("Star")).toBe(undefined);
    })
});