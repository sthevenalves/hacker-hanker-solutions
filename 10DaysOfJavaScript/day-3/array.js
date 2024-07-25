function main(){
    let arr = [5, 2, 3, 4, 1];
    console.log(getSecondLargest_2(arr)); // Saída: 4
}

function getSecondLargest(nums) {
    if (nums.length < 2) {
        return undefined;
    }

    let maior = nums[0];
    let segundoMaior = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maior) {
            segundoMaior = maior;
            maior = nums[i];
        } else if (nums[i] > segundoMaior && nums[i] < maior) {
            segundoMaior = nums[i];
        } else if (maior === segundoMaior) {
            segundoMaior = nums[i];
        }
    }
    
    return segundoMaior;
}

function getSecondLargest_2(nums) {
    //Array.from converte o Set de volta para um array.
    nums = Array.from(new Set(nums)); //construtor Set cria novo conjunto, Set não permite elementos duplicados.
    //sort do array ordena os elementos. A função de comparação (a, b) => b - a ordena os elementos em ordem decrescente. 
    nums.sort((a, b) => b - a); // (b - a) significa que sera decrescente
    return nums[1]; //retorna o o segundo elemento
}

main();
