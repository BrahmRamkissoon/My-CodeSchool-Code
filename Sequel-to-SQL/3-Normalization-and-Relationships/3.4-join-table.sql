/*
Now that we've named the join table for the tables below, please finish the create table definition, adding the proper foreign keys.

First, let's add the new columns. The new columns we add should have type int type to match the data they will hold. Per convention, let's name these columns actor_id and movie_id.
*/


CREATE TABLE Actors_Movies (
  actor_id int REFERENCES Actors(id),
  movie_id int REFERENCES Movies(id)
);
