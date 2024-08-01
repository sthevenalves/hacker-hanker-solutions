function countSort(arr) {
    const n = arr.length;  // Número total de tuplas no array
    const meio = Math.floor(n / 2);  // Ponto médio do array

    // Inicializa o array de grupos com 100 arrays vazios
    const grupos = Array(100).fill().map(() => []);

    // Processa cada item da lista
    for (let i = 0; i < n; i++) {
        const item = arr[i];  // Obtém a tupla atual
        const indice = parseInt(item[0], 10);  // Converte o primeiro valor da tupla para número inteiro

        let valor;  // Variável para armazenar o valor a ser inserido no grupo

        // Se o índice atual é menor que o ponto médio, substitui o valor por '-'
        if (i < meio) {
            valor = '-';
        } else {
            valor = item[1];  // Caso contrário, mantém o valor original da tupla
        }

        // Adiciona o valor ao grupo correspondente ao índice
        grupos[indice].push(valor);
    }

    // Achata o array de grupos em um único array(junta os arrays) [1,2,3,[4,5]] => [1,2,3,4,5]
    const resultado = grupos.flat();

    // Imprime o resultado final com os valores separados por espaço
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