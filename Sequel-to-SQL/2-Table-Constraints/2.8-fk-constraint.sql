/*
Add an FK to the Actors table.

Add a FOREIGN KEY constraint to the country_id column in the Actors table that ensures values set to the country_id column match existing values for the id column on the Countries table.

Add a PRIMARY KEY constraint to the id column on the Actors table.

Lastly, add a constraint that ensures values set to the name column are neither NULL or duplicates.
*/

CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  country_id int REFERENCES Countries(id)
);