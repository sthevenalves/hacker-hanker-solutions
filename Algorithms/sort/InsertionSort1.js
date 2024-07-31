
function insertionSort1(n, arr) {
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let compare = i - 1;
        while ((compare > -1) && (current < arr[compare])) {
            arr[compare + 1] = arr[compare];
            compare -= 1;
            console.log(...arr);
        }
        arr[compare + 1] = current;
    }
    console.log(...arr);
}

insertionSort1(5, [1, 2, 4, 5, 3])