/*
Add the proper constraints to the name column in our Actors table.

Currently, our Actors table is allowing NULL values to be set on the name column. We don't want that! Add a constraint that prevents NULL values on the name column.

The Actors table is also allowing duplicate values for the name column. All values for this column must be unique, so let’s add a constraint that prevents a duplicate name from being inserted.

*/

CREATE TABLE Actors (
  name varchar(50) NOT NULL UNIQUE,
  country varchar(50)
);