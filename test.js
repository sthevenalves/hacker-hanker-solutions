function maxElement(arr){
    let max = 0;
    arr.forEach(tuple => {
        if (tuple[0] > max) {
            max = tuple[0];
        }
    });
    console.log(max);
}

const arr = [
    [0, 'a'],
    [1, 'b'],
    [0, 'c'],
    [1, 'd'],
    [3, 'e'],
    [2, 'f'],
    [1, 'g'],
    [3, 'h'],
];
maxElement(arr);