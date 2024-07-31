function plusMinus(arr) {
    let plusCount = 0;
    let negCount = 0;
    let zeroCount = 0;
    let lenArr = arr.length;
    arr.forEach((value) => {
        if (value > 0) {
            plusCount += 1;
        } else if (value < 0) {
            negCount += 1;
        } else {
            zeroCount += 1;
        }
    })
    let plusCalc = plusCount / lenArr;
    let negCalc = negCount / lenArr;
    let zeroCalc = zeroCount / lenArr;
    console.log(plusCalc.toFixed(6) + '\n' + negCalc.toFixed(6) + '\n' + zeroCalc.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);