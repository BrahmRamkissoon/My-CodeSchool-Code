/*
Let's find how many actors we have in our database.

Write a query that returns the total number of actors in the Actors table. Check out schema.sql, or the Tables tab, to see the definition of the Actors table.

You can add a WHERE clause to filter the result set. Go ahead and filter the results to only count American actors.
*/ 
SELECT count(*)
FROM Actors
WHERE country = 'USA';