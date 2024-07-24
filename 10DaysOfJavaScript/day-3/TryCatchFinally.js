function main(){
    let s = 'hello';
    reverseString(s);
}

function reverseString(s) {
    try{

        console.log(s.split('').reverse().join(''));

    }catch(error){
        console.log(error.message);
        console.log(s);
    }
}

main();