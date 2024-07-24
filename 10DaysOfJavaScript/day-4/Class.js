

function main() {
    const rectangle = new Polygon([10, 20, 10, 20]);
    const square = new Polygon([10, 10, 10, 10]);
    const pentagon = new Polygon([10, 20, 30, 40, 43]);
    
    console.log(rectangle.perimeter()); // 60
    console.log(square.perimeter()); // 40
    console.log(pentagon.perimeter()); // 143
}

class Polygon {
    constructor(sides) {
        this._sides = sides;
    }
    perimeter() {
        let sum = 0;
        for (let i=0; i < this._sides.length; i++) {
            sum += this._sides[i];
        }
        return sum;
    }
}

main();