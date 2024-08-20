function main(){
    let arr = [4,3,5,6];
    console.log(simpleArraySum(arr));
}

function simpleArraySum(ar) {
    let arrSum = ar.reduce((a, b) => a + b, 0);
    return arrSum;
}

main();