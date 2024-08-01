function quickSort(arr) {
    let pivot = arr[0];
    let right = [], equal = [], left = [];

    arr.forEach((value) => {
        if(value > pivot){
            right.push(value);
        }else if(value < pivot){
            left.push(value);
        }else{
            equal.push(value);
        }
    });
    
    let union = left.concat(equal, right);
    return union;
}

console.log(quickSort([3, 2, 4, 5, 7]));
