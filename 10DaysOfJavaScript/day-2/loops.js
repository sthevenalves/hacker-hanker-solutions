function main(){
    let word = 'javascriptloops';
    vowelsAndConsonants(word);
}

function vowelsAndConsonants(s) {
    let letterVo = ['a', 'e', 'i', 'o', 'u'];
    let vowels = [];
    let consonants = [];
    
    for(let i = 0; i < s.length; i++){
        if(letterVo.includes(s[i])){
            vowels.push(s[i]);
        } else {
            consonants.push(s[i]);
        }
    }

    vowels.forEach(vowel => console.log(vowel));

    consonants.forEach(consonant => console.log(consonant));
}

main();
