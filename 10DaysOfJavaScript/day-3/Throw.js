function main(){
    let a = -2;
    console.log(isPositive(a));
}

function isPositive(a){
    if(a == 0){
        throw Error('Zero Error');
    }else if(a < 0){
        throw Error('Negative Error');
    }
    return 'YES';
}

main();