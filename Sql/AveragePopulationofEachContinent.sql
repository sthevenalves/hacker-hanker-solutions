SELECT COUNTRY.Continent, 
    FLOOR(AVG(CITY.Population)) AS avg_population
FROM COUNTRY
JOIN CITY ON CITY.CountryCode = COUNTRY.Code
GROUP BY COUNTRY.Continent;
