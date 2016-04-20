/*
Let's add some CHECK constraints to our Actors table to prevent bad data from being inserted.


Some of our actors have been way underpaid. This is just not right! Add a CHECK constraint to prevent values less than 500 from being assigned to the salary column.


On top of their salaries, actors will start receiving bonuses. However, values for bonus need to be less than values for salary. Add a CHECK column constraint to enforce this condition on the bonus column.

*/

CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  salary integer CHECK ( salary >=500 ),
  bonus integer CHECK ( bonus < salary),
  country_id int REFERENCES Countries(id)
);
