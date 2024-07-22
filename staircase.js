function main() {
    const n = 6;
    staircase(n);
}

function staircase(n) {
    if (n < 1) {
        throw "Stair level must be positive";
    }

    for (let i = 1; i <= n; i++) {
        // Cria uma linha da escada com espaços e hashes
        let line = ' '.repeat(n - i) + '#'.repeat(i);
        console.log(line);
    }
}
/*
function staircase(n) {
    if (n < 1) {
        throw "Stair level must be positive"
    }
    let stair = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        let horiz = [];

        for (let j = 0; j < n; j++) {
            if (i == count && j >= n - 1 - count) {
                horiz[j] = '#';
            } else {
                horiz[j] = ' ';
            }
        }
        count++;
        stair.push(horiz.join(''));
    }

    console.log(stair.join('\n'));
}

*/
main();