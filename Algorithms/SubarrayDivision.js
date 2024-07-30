function birthday(s, d, m) {
    // Write your code here
    let count = 0, sum = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum === d) {
            count += 1;
        }
        sum = 0;
    }
    return count;
}

birthday([1, 2, 1, 3, 2], 3, 2);