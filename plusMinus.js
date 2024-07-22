function main() {
    var n = 6; 
    var arr = [-4, 3, -9, 0, 4, 1]; 
    plusMinus(arr);
}

function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    arr.forEach(n => {
        if (n > 0) {
            positiveCount++;
        } else if (n < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    });

    const total = arr.length;
    const positive = positiveCount / total;
    const negative = negativeCount / total;
    const zero = zeroCount / total;

    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));
}

main();