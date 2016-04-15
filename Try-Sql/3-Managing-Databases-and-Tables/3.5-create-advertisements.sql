/*
Let's create a table with some real data!

Every theater uses some way to advertise the films that it is showing. Using the data below, create a table called advertisements. The name of the columns should reflect (as closely as possible) the type of data to be stored in it.

Given data:

1	Poster	Paper	20
2	Billboard	Paper	100
3	Banner Ad	Web	35
4	Commercial		150


Great – now let's add our data highlighted in yellow to the table.

1	Poster	Paper	20

*/

Create Table advertisements
(
  id int,
  type varchar(20),
  material varchar(10),
  quantity int
); 

Insert Into advertisements ( id, type, material, quantity)
Values (1, 'Poster', 'Paper', 20);
