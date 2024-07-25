function main(){
    let letter = 'j';
    console.log(getLetter_2(letter));
}
//O enunciado pede para fazer dessa forma, mas é bem chato escrever isso
function getLetter(s) {
    let letter;
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = 'D';
            break;
    }
    return letter;
}

//forma simples e direta 
function getLetter_2(s){
    const groups = //array com 4 indices
    [   
        'aeiou',//A
        'bcdef',//B
        'hjklm',//C
        'npqrstvwxyz' //D
    ];

    for(let i=0; i<groups.length; i++){
        if(groups[i].includes(s[0])){  // Verifica se o primeiro caractere da string s está no grupo atual(includes)
            return 'ABCD'[i]; // Retorna a letra correspondente ('A', 'B', 'C', 'D') com base no índice i, i[0] = A...
        }
    }
}

main();