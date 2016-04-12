/*
Based on the new table below named concessions, please complete the following tasks. 


Write a query to find the item, price, and size for all items that are 'Popcorn'.

Add to your query, but this time order the results by price starting with the most expensive at the top.

Change the query to list items that are either 'Soda' or 'Popcorn'.

*/
Select item, price, size
From concessions
Where item = 'Popcorn'
Or item = 'Soda'
Order by price desc;