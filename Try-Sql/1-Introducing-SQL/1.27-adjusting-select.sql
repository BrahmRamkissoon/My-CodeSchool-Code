 /*
 It is time to write some more advanced SELECT statements. The name of the table shown below is movies. 
 
 Generate a query that only returns the id and title of movies with a duration greater than or equal to 86.
 
 Now, sort the results by their duration in ascending order.
 
 Finally, only return records with genre of 'Horror'
 */
 
 Select id, title
 From movies
 Where duration >= 86
 And genre = 'Horror'
 Order by duration;