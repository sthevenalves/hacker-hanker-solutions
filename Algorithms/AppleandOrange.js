function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount = 0;
    let oragenCount = 0;

    apples.forEach((apple) => {
        if((apple + a) >= s && (apple + a) <= t){
            appleCount += 1;
        }
    });
    oranges.forEach((orange) => {
        if((orange + b) <= t && (orange + b) >= s){
            oragenCount += 1;
        }
    })

    console.log(appleCount + "\n" + oragenCount);
}


countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);