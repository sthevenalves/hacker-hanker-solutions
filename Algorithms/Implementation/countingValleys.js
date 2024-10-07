function countingValleys(steps, path) {
    // Write your code here
    let altitude = 0;
    let seaLevel = 0;
    let valley = 0;

    for (let value of path) {
        if (value === 'U') {
            altitude += 1;
        } else {
            altitude -= 1;
        }

        if (altitude === seaLevel && value === 'U') {
            valley += 1;
        }
    }

    return valley;
}

console.log(countingValleys(8, 'UDDDUDUU'));

