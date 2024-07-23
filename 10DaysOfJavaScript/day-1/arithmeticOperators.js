
function main() {
    const length = 2.5;
    const width = 4;
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}

function getArea(length, width) {
    return (length * width);
}

function getPerimeter(length, width) {
    return (2 * (length+width));
}

main();