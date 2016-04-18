/*
We need to extract some salary data from the Actors table grouped by each individual country.

Use the GROUP BY clause to write a query that returns the country name and total salary paid to actors for each country.

Now use the HAVING clause to add a filter so that only countries with more than 1 actor are returned from our SQL query.

Lastly, let’s add a condition to filter only actors with a supporting role. This condition will need to be run before the grouping of records happen.

*/

SELECT country, sum(salary)
FROM Actors
WHERE role = 'supporting'
GROUP BY country
HAVING count(*) > 1;