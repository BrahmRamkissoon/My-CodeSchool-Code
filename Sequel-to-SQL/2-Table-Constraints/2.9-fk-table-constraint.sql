/*

Please convert the current FOREIGN KEY column constraint syntax for the country_id column to use the table constraint syntax.

*/
CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  country_id int,
  FOREIGN KEY (country_id) REFERENCES Countries
);
