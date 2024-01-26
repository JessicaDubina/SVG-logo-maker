const {Square, Triangle, Circle, } = require('../lib/shapes.js');

describe('Square', () => {
    it("should generate a Square class object with preset specs" , () => {
        let sq = new Square;
        expect(sq.type).toBe("rect");
        expect(sq.x).toBe("50");
        expect(sq.y).toBe("0");
        expect(sq.width).toBe("200");
        expect(sq.height).toBe("200");
    })
    it("should give a string with it's specs when shapeSpecs is called", () => {
        let sq = new Square;
        expect(sq.render()).toBe('rect x="50" y="0"  width="200" height="200"');
    })
});

describe('Triangle', () => {
    it("should generate a Triange class object with preset specs" , () => {
        let tri = new Triangle;
        expect(tri.type).toBe("polygon");
        expect(tri.points).toBe("0, 200 300, 200 150, 0");
    })
    it("should give a string with it's specs when shapeSpecs is called", () => {
        let tri = new Triangle;
        expect(tri.render()).toBe('polygon points="0, 200 300, 200 150, 0"');
    })
});

describe('Circle', () => {
    it("should generate a Circle class object with preset specs" , () => {
        let cir = new Circle;
        expect(cir.type).toBe("circle");
        expect(cir.cx).toBe("150");
        expect(cir.cy).toBe("100");
        expect(cir.radius).toBe("100");
    })
    it("should give a string with it's specs when shapeSpecs is called", () => {
        let cir = new Circle;
        expect(cir.render()).toBe('circle cx="150" cy="100" r="100"');
    })
});