function main() {
    console.log(getCount(objectsArray));
}

function getCount(objects) {
    let count = 0;
    objects.forEach(function (obj) {
        if (obj.x == obj.y) {
            count++;
        }
    })
    return count;
}

let objectsArray = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 4, y: 5 },
    { x: 5, y: 5 }
];

main();