function main() {
    const area = 20;
    const perimeter = 18;
    const literals = `The area is ${area}. The perimeter is ${perimeter}`
    console.log(sides(literals, area, perimeter));
}

function sides(literals, ...expressions) {
    let a = expressions[0]; // area
    let p = expressions[1]; // perimeter
    
    let s1 = (p + Math.sqrt(p * p - 16 * a)) / 4;
    let s2 = (p - Math.sqrt(p * p - 16 * a)) / 4;

    let arr = [s1, s2];
    const arrAsc = arr.sort((a, b) => a - b); // Ordena os lados em ordem crescente

    //console.log(literals);

    return arrAsc;
}

main();