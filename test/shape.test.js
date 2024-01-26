const Shape = require('../lib/shape.js');

describe('Shape', () => {
    it("should generate a basic shape object given any shape type" , () => {
        let sq = new Shape("square");
        expect(sq.type).toBe("square");
    })
});