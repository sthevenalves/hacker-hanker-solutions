function main(){
    let candles = [2,3,4,4];
    console.log(birthdayCakeCandles(candles));
}

function birthdayCakeCandles(candles) {
    let valueMax = Math.max(...candles);
    let countCandles = 0;
    candles.forEach(value => {
        if(value == valueMax){
            countCandles++;
        }
    })
    return countCandles;
}

main();