function camelcase(s){
    let cont=0;
    if(s[0] >= 'a' &&  s[0] <= 'z'){
        cont ++;
    }
    s.split('').forEach(chars => {
        if(chars >= 'A' && chars <= 'Z'){
            cont++;
        }
    });
    return cont;
}

main();