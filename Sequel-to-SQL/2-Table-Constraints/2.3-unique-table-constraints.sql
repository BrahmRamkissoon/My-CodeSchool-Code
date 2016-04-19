/*
Let's take our UNIQUE constraint a step further and ensure there are no duplicates for the combination of values within the name and language columns. To do that, we'll need to use a table constraint.

First, move the UNIQUE constraint on the name column from a column constraint syntax to a table constraint syntax. Give this constraint the name name_lang.

Now add the language column to the name_lang UNIQUE table constraint.

*/

CREATE TABLE Movies (
  name varchar(50) NOT NULL,
  language varchar(50),
 CONSTRAINT name_lang UNIQUE (name, language)
);
