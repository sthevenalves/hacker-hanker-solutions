SELECT IF(G.grade > 7, S.name, null) AS names,
    G.grade,
    S.marks
FROM students S
    JOIN grades G ON S.marks BETWEEN G.min_mark AND G.max_mark
ORDER BY G.grade DESC,
    names ASC,
    S.marks ASC;

SELECT IF(G.grade > 9,'Excelente',
        IF(G.grade > 7, S.name, NULL)) AS names,
    G.grade,
    S.marks
FROM students S
    JOIN grades G ON S.marks BETWEEN G.min_mark AND G.max_mark
ORDER BY G.grade DESC,
    names ASC,
    S.marks ASC;