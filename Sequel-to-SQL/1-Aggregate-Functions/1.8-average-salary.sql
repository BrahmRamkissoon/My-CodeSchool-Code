/*
We already know how to find the total sum of everybody’s salaries, but our accountant reached out to us asking for the average salary.

Write a query that calculates the average salary for all actors in our Actors table.

Now filter the query in order to calculate the average of only American actors.
*/

SELECT avg(salary)
FROM actors
WHERE country = 'USA';