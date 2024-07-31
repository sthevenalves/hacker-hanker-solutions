--CONTINENT is 'Africa'.
--CITY.CountryCode and COUNTRY.Code

SELECT CITY.Name
FROM City
JOIN Country ON CITY.CountryCode = COUNTRY.Code
WHERE CONTINENT = 'Africa';