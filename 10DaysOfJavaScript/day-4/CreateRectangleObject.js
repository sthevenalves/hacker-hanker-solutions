function main() {
    const a = 4;
    const b = 5;
    const rec = new Rectangle(a, b);
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: (2 * (a + b)),
        area: (a * b)
    };
}

main();