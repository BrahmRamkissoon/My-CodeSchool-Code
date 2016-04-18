/*
Aren't you just a little curious to know the pay rates for the lowest and highest paid actors in our database? We are too!

Write a query that returns the largest value for the salary column in the Actors table.

Let's add another value to the return of this query. This time, add a function call that returns the minimum value for the salary column in the Actors table.
*/

SELECT max(salary), min(salary)
FROM Actors;