//x pos gato A
//y pos gato B
//z pos rato
//ganha quem estiver na menor posicao(mais perto do rato)

function catAndMouse(x, y, z) {
    let result = '';
    let a = Math.abs(x - z);
    let b = Math.abs(y - z);
    if (a === b) {
        result = 'Mouse C'
    } else if (a < b) {
        result = 'Cat A';
    } else {
        result = 'Cat B';
    }
    return result;
}
console.log(catAndMouse(1, 3, 2));