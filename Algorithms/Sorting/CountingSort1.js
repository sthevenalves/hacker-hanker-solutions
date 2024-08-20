
function countingSort(arr) {
    let frequencyArray = new Array(100).fill(0);
    arr.forEach((value) => {
        frequencyArray[value] += 1;
    })

    return frequencyArray;
}

let arr = [1,2,8,4,5,6,7,8,8];

console.log(...countingSort(arr));

/* EXPLICAÇÃO
Contagem das Ocorrências
O objetivo aqui é contar quantas vezes cada número aparece no array de entrada. 
Suponha que temos o array de entrada inputArr = [4, 2, 2, 8, 3, 3, 1].

Inicialize o countArray com zeros. O tamanho do countArray 
é igual ao intervalo de valores (máximo - mínimo + 1), que neste caso é de 8 elementos (1 a 8):

countArray = [0, 0, 0, 0, 0, 0, 0, 0]
Conte as ocorrências de cada número no inputArr:

O número 4 aparece 1 vez:
countArray = [0, 0, 0, 1, 0, 0, 0, 0]

O número 2 aparece 2 vezes:
countArray = [0, 2, 0, 1, 0, 0, 0, 0]

O número 8 aparece 1 vez:
countArray = [0, 2, 0, 1, 0, 0, 0, 1]

O número 3 aparece 2 vezes:
countArray = [0, 2, 2, 1, 0, 0, 0, 1]

O número 1 aparece 1 vez:
countArray = [1, 2, 2, 1, 0, 0, 0, 1]

countArray = [1, 2, 2, 1, 0, 0, 0, 1] (1 2 2 3 3 4 8)
*/