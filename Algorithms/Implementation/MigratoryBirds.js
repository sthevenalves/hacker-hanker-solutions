function migratoryBirds(arr) {
    // Write your code here
    let count = {}; // {value: count}
    let maxRep = arr[0], maxCount = arr[0];
    for (let value of arr) {
        if (count[value]) {
            count[value] += 1;
        } else {
            count[value] = 1;
        }
        if (count[value] > maxCount) {
            maxCount = count[value];
            maxRep = value;
        }
    }
    return maxRep;
}

console.log(migratoryBirds([1,1,1,2,2,2,4]));
