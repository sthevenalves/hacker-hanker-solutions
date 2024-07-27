function main() {
    let arrA = [10, 12, 50];
    let arrB = [20, 20, 10];
    console.log(compareTriplets(arrA, arrB));
}

function compareTriplets(a, b) {
    let contA = 0, contB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            contA++;
        } else if (a[i] < b[i]) {
            contB++;
        }
    }
    return [contA, contB];
}

main();
