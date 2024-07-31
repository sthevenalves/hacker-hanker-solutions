function pyramid(n) {
    let line = '';
    let midpoint = Math.floor((2 * n - 1) / 2);

    for (let i = 0; i < n; i++) {
        line = '';
        for (let j = 0; j < 2 * n - 1; j++) {
            if (midpoint - i <= j && midpoint + i >= j) {
                line += '*';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

pyramid(5);
