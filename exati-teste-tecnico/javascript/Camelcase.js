function camelcase(s){
    let camelCount = 0;
    if(s[0] >= 'a' && s[0] <= 'z'){
        camelCount += 1;
    }
    s.split('').forEach((letter) => {
        if(letter >= 'A' && letter <= 'Z'){
            camelCount += 1;
        }
    });
    return camelCount;
}

console.log(camelcase('saveChangesInTheEditor'));