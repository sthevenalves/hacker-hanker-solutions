function main() {
    let grades = [73, 67, 38, 33]
    console.log(gradingStudents(grades));
}

function gradingStudents(grades) {

    let newGrades = grades.map(value => {
        if (value < 38)
            return value
        else {
            let nextCeil = (Math.ceil(value / 5) * 5);
            if((nextCeil - value) < 3){
                return nextCeil;
            }else{
                return value;
            }
        }
    });
    return newGrades;

}
main();

/*
1. Se o valor de grade é menos do que 38, não ocorre arredondamento, pois o resultado ainda será uma nota baixa.
2. maiores que 40 arredonda para o seu multiplo
3. Se a diferença entre a grade o próximo múltiplo de 5 é menos do que 3, redondo até o próximo múltiplo de 5.
*/