function kangaroo(x1, v1, x2, v2) {
    let jump1 = x1;
    let jump2 = x2;
    let YesNo = 'NO';
    for (let i = 0; i < 10000; i++) {
        jump1 += v1;
        jump2 += v2;
        if (jump1 === jump2){
            YesNo  = 'YES';
        }
            
    }
    return YesNo;
}

console.log(kangaroo(0, 2, 5, 3)); //NO
console.log(kangaroo(0, 3, 4, 2)); //YES
console.log(kangaroo(28, 8, 96, 2)); //NO

