function encryption(s) {
    let string = s.split('');
    let column = Math.ceil(Math.sqrt(string.length));
    let result = [];
    for (let i = 0; i < column; i++) {
        let char = i;
        let str = '';
        while(char < string.length){
            str += string[char];
            char += column;
        }
        result.push(str);
    }
    return result.join(' ');
}

console.log(encryption('feedthedog'));