function main() {
    let arr = [1,3,5,7,9];
    miniMaxSum(arr);
}

function miniMaxSum(arr) {
    let arrSum = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let sum = 0
        for (let j = 0; j < n; j++) {
            if(i !== j){
                sum += arr[j];
            }
        }
        arrSum.push(sum);
    }
    arrSum.sort((a,b) => a-b);
    console.log(arrSum[0] +" "+ arrSum[n-1]);
}

main();