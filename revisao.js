function staircase(n) {
    let line = '';
    let position = n - 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (position > j) {
                line += ' ';
            } else {
                line += '#';
            }
        }
        console.log(line);
        line = '';
        position -= 1;
    }
}

staircase(4)