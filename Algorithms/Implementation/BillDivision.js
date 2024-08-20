//k nao consumiu
//contribuicao

function bonAppetit(bill, k, b) {
    // Write your code here
    let calcBill = 0;
    bill.forEach((bill, i) => {
        if (i !== k) {
            calcBill += bill;
        }
    })
    calcBill /= 2;
    if (calcBill === b) {
        console.log('Bon Appetit') ;
    }else{
        console.log((b - calcBill));
    }
}
//console.log(bonAppetit([3, 10, 2, 9], 1, 7));
bonAppetit([3, 10, 2, 9], 1, 12);