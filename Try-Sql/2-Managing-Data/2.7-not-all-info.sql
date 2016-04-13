/*
There are two more items that we want to add to our concessions stand. Some of the information about the items is available, but not all of it. The name of the table shown below is concessions. 
First, insert the following: a concession with item of 'Nachos' with a 'Regular' size.

Below your first statement, insert a separate item of 'Pizza' with a price of '2.00' at an id of 8.

*/

INSERT INTO concessions (item, size)
VALUES ('Nachos', 'Regular');

INSERT INTO concessions (item, price, id)
VALUES ('Pizza', '2.00', 8);