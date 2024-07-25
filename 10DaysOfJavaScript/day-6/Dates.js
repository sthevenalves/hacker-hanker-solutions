function main(){
    let date = '11/10/2010';
    console.log(getDayName(date));
}

function getDayName(dateString) {
    let dayName = new Date(dateString).getDay();

    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return dayOfWeek[dayName];
}

main();