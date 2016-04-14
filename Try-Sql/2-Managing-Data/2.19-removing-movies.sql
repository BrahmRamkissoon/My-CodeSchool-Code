/*
We need to start removing records from our movies table, which is shown below. 

I've lost my sense of humor. Please write a SQL statement to DELETE all the movies that have a genre of 'Comedy'.

I also have a short attention span and I hate vampires. Please write a statement to remove all movies that have a duration of greater than 120 minutes or are called 'Nosferatu'.

*/

Delete From movies
Where genre = 'Comedy'
Or duration > 120
Or title = 'Nosferatu';