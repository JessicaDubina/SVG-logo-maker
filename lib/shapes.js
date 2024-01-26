const Shape = require('./shape.js');

class Square extends Shape {
    constructor() {
        super("rect")
        this.x = "50";
        this.y = "0";
        this.width = "200";
        this.height = "200";
    }
    render () {
        return `${this.type} x="${this.x}" y="${this.y}"  width="${this.width}" height="${this.height}"`;
    }
}

class Triangle extends Shape {
    constructor() {
        super("polygon")
        this.points = "0, 200 300, 200 150, 0"
    }
    render () {
        return `${this.type} points="${this.points}"`
    }
}

class Circle extends Shape {
    constructor()  {
        super("circle")
        this.cx = "150";
        this.cy = "100";
        this.radius = "100"
    }
    render () {
        return `${this.type} cx="${this.cx}" cy="${this.cy}" r="${this.radius}"`;
    }
}

module.exports = {
    Square,
    Triangle,
    Circle,
}