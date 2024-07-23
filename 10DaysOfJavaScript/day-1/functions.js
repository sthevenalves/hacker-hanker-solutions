function main(){
    let value = 4;
    console.log(factorial(value));
}

function factorial(value){
    let fat=1;
    for(let i=1; i<=value; i++){
        fat *= i; 
    }
    return fat;
}

main();