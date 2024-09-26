function camelcase(s) {
    let count = 1;
    for(let i=0; i<s.length; i++){
        if(s[i] === s[i].toUpperCase() && s[i] !== s[i].toLowerCase()){
            count += 1;
        }
    }
    return count;
}

console.log(camelcase('saveChangesInTheEditor'))