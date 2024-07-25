function main(){
    const rect = new Rectangle(10, 25);
    const square = new Square(10);
    
    console.log(rect.area());
    console.log(square.area());
}

class Rectangle {
    constructor(width, height){
        this.w = width;
        this.h = height;
    }
    // area(){
    //     return (this.w * this.h);
    // }
}

Rectangle.prototype.area = function(){ // fora da class
    return (this.w * this.h);
}

class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
}

main();