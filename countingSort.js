function sortWithStrings(arr) {
    // Ordena os pares com base nos inteiros
    arr.sort((a, b) => a[0] - b[0]);

    // Extrai e retorna as strings na ordem correta
    return arr.map(item => item[1]).join(' ');
}

let input = [
    [4, 'that'],
    [3, 'be'],
    [0, 'to'],
    [1, 'be'],
    [5, 'question'],
    [1, 'or'],
    [2, 'not'],
    [4, 'is'],
    [2, 'to'],
    [4, 'the']
];
let sortedOutput = sortWithStrings(input);
console.log(sortedOutput); // Saída esperada: 'to be be or not to that is the question'