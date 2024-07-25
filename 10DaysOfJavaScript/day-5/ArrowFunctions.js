function main() {
    let arr = [1, 2, 3, 4, 5];
    console.log(modifyArray(arr));
}

function modifyArray(nums) {
    let evenOrOdd = nums.map((element) => {
        if (element % 2 == 0)
            return element * 2;
        else
            return element * 3;
    })
    return evenOrOdd;
}

main();