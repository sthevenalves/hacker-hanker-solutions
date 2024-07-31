function main(){

}

function countSort(arr) {
    const n = arr.length;
    const meio = Math.floor(n / 2);
    
    const grupos = [];
    
    for (let i = 0; i < n; i++) {
        const indice = parseInt(arr[i][0]);
        if (!grupos[indice]) {
            grupos[indice] = [];
        }
    }
    
    for (let i = 0; i < n; i++) {
        const indice = parseInt(arr[i][0]);
        const valor = i < meio ? '-' : arr[i][1];
        grupos[indice].push(valor);
    }
    
    const resultado = grupos.flat();
    console.log(resultado.join(' '));
}

main();