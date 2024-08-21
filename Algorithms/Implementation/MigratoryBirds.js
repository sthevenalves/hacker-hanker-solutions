function migratoryBirds(arr) {
    let count = {}; //count {1: 3, 2: 5} - {value: rep}
    let maxRep = arr[0], maxCount = 0;

    for (let value of arr) { 
        if (count[value]) { //existe no objeto count
            count[value] += 1; // Incrementa o valor associado à chave
        } else {
            count[value] = 1; // Inicializa o valor associado à chave
        }

        if (count[value] > maxCount || (count[value] === maxCount && value < maxRep)) {
            maxCount = count[value];
            maxRep = value;
        }
    }

    return maxRep;
}

const arr0 = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(arr0)); 

const arr1 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
console.log(migratoryBirds(arr1));  
