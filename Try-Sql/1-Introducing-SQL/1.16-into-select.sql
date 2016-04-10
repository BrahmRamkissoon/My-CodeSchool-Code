/*
Write a SQL query to retrieve all movies that are currently showing. The name of the table shown below is movies. 


Write a SQL query to retrieve all films that are currently showing.

Great, – now add a filter to only show 'Adventure' films.

Lastly, modify the query to only return the title and duration of the 'Adventure' films.
*/


Select title, duration From movies
Where genre = 'Adventure'; 