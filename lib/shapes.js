const Shape = require('./shape.js');

class Square extends Shape {
    constructor() {
        super("rect", color)
        this.x = "50";
        this.y = "0";
        this.width = "200";
        this.height = "200";
    }
}

class Triangle extends Shape {
    constructor() {
        super("polygon", color)
        this.points = "0, 200 300, 200 150, 0"

    }
}

class Circle extends Shape {
    constructor()  {
        super("circle", color)
        this.cx = "150";
        this.cy = "100";
        this.radius = "100"
    }
}

module.exports = {
    Square,
    Triangle,
    Circle,
}