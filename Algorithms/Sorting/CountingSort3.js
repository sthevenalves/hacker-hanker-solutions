function processData(input) {

    const lines = input.trim().split('\n'); // separar a string em linhas individuais.

    const arr = lines.slice(1).map(line => { //Usar map para dividir cada linha em um número e uma string(tuplas).
        const [numStr, ...strParts] = line.split(' ');
        const num = parseInt(numStr, 10);
        const str = strParts.join(' '); // Reunir os restantes como a string completa
        return [num, str];
    });

    let countArray = Array(100).fill(0);

    for (let value of arr) {
        countArray[value[0]] += 1;
    }

    for (let i = 1; i < 100; i++) {
        countArray[i] += countArray[i - 1];
    }

    console.log(countArray.join(' '));
}

const input = `4 that
3 be
0 to
1 be
5 question
1 or
2 not
4 is
2 to
4 the`;


processData(input);
