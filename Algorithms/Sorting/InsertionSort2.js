function insertionSort2(n, arr) {
    for(let i=1; i<n; i++){
        let key = arr[i];
        let compare = i-1;
        while(compare >= 0 && key < arr[compare]){
            arr[compare + 1] =  arr[compare];
            compare -= 1;
        }
        arr[compare + 1] = key;
        console.log(...arr);
    }
}

insertionSort2(7, [3, 4, 7, 5, 6, 2, 1]);