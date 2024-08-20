function main() {
    let time = '07:05:45PM';
    console.log(timeConversion(time));
}

function timeConversion(s) {
    let period = s.slice(-2)  //pegar os ultimos dois caracteres 
    let time = s.slice(0, -2);
    let [hour, minute, second] = time.split(':').map(Number); //converter todos os elementos de um array de strings em numeros.

    if (hour < 12 && period === 'PM') {
        hour += 12;
    } else if (hour === 12 && period === 'AM') {
        hour = 0;
    }
    let hour24 = hour.toString().padStart(2, '0'); //garante dois digitos 
    let minute24 = minute.toString().padStart(2, '0');
    let second24 = second.toString().padStart(2, '0');
    return (hour24 + ':' + minute24 + ':' + second24);
}

main();