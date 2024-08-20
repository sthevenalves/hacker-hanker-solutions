function countSort(arr){
    let middle = Math.floor(arr.length/2);
    let max = 0;
    arr.forEach((key) => {
        if(key[0] > max){
            max = key[0];
        }
    });
    let group = Array.from({length: max + 1}, () => []);

    for(let i=0; i<arr.length; i++){
        let item = arr[i];
        let index = parseInt(item[0], 10);
        let value;

        if(i < middle){
            value = '-';
        }else{
            value = item[1];
        }
        group[index].push(value);
    }
    let result = group.flat();
    console.log(result.join(' '));
}

const input = [
    ['0', 'ab'],
    ['6', 'cd'],
    ['0', 'ef'],
    ['6', 'gh'],
    ['4', 'ij'],
    ['0', 'ab'],
    ['6', 'cd'],
    ['0', 'ef'],
    ['6', 'gh'],
    ['0', 'ij'],
    ['4', 'that'],
    ['3', 'be'],
    ['0', 'to'],
    ['1', 'be'],
    ['5', 'question'],
    ['1', 'or'],
    ['2', 'not'],
    ['4', 'is'],
    ['2', 'to'],
    ['4', 'the']
];

countSort(input);