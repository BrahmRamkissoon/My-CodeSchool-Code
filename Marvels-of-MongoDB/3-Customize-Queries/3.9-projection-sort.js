/*
We'd like to have an index page where users can see the name of all the wands we have in our database.

Write a query that will find all wands, but this time project only the name field. Don't worry about the _id showing up in the results for now.

We've got all the names, but they're all jumbled up. Add a cursor method to sort the names alphabetically.
*/

db.wands.find( {},
  { "name": true, "_id":true }
).sort({"name":1})