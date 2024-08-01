function countSort(arr) {
    const n = arr.length;  
    const meio = Math.floor(n / 2);

    const grupos = Array(100).fill().map(() => []);

    for (let i = 0; i < n; i++) {
        const item = arr[i];  
        const indice = parseInt(item[0], 10);  
        let valor; 

        if (i < meio) {
            valor = '-';
        } else {
            valor = item[1]; 
        }

        grupos[indice].push(valor);
    }

    const resultado = grupos.flat();

    console.log(resultado.join(' '));
}


const input = [
    ['0', 'ab'],
    ['6', 'cd'],
    ['0', 'ef'],
    ['6', 'gh'],
    ['4', 'ij'],
    ['0', 'ab'],
    ['6', 'cd'],
    ['0', 'ef'],
    ['6', 'gh'],
    ['0', 'ij'],
    ['4', 'that'],
    ['3', 'be'],
    ['0', 'to'],
    ['1', 'be'],
    ['5', 'question'],
    ['1', 'or'],
    ['2', 'not'],
    ['4', 'is'],
    ['2', 'to'],
    ['4', 'the']
];

countSort(input);