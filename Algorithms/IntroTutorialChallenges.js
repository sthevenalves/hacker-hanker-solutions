function introTutorial(V, arr) {
    // Write your code here
    let index = 0;
    arr.forEach((arr, i) => {
        if (arr === V) {
            index = i;
        }
    })
    return index;
}

console.log(introTutorial(4, [1, 4, 5, 7, 9, 12]))