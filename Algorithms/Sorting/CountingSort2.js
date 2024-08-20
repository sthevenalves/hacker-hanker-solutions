function countingSort(arr) {
    let maxElement = Math.max(...arr) + 1;
    let countArray = Array(maxElement).fill(0);

    arr.forEach((value) => {
        countArray[value] += 1;
    });

    let sortedArray = [];
    countArray.forEach((value, index) => {
        for (let i = 0; i < value; i++) {
            sortedArray.push(index);
        }
    });

    return sortedArray;
}

console.log(...countingSort([0, 1, 4, 1, 9]));


