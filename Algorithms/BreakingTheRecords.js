function breakingRecords(scores) {
    // Remove duplicate scores
    let setScore = [...new Set(scores)];
    let minCount = 0, maxCount = 0;
    let minScore = setScore[0], maxScore = setScore[0];

    setScore.forEach((score, i) => {
        if (i !== 0) {
            if (score > maxScore) {
                maxScore = score;
                maxCount += 1;
            } else if (score < minScore) {
                minScore = score;
                minCount += 1;
            }
        }
    });
    return [maxCount, minCount];
}
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
