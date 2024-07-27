function main() {
    let matrix = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ];
    console.log(diagonalDifference(matrix));
}

function diagonalDifference(arr) {
    let n = arr.length;
    let diagonalPrincipal = 0;
    let diagonalSecundary = 0;
    for (let i = 0; i < n; i++) {
        diagonalPrincipal += arr[i][i];
        diagonalSecundary += arr[i][n - 1 - i];
    }
    return Math.abs(diagonalPrincipal - diagonalSecundary);
}

main();