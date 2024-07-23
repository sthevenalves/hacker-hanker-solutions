function main() {
    const PI = Math.PI;
    let r = parseFloat(readLine());
    let area = PI * Math.pow(r,2);
    let perimeter = 2 * (r * PI);
    console.log(area);
    console.log(perimeter);
}

main();