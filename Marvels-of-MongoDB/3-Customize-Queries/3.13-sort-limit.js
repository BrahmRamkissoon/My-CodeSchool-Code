/*
Some really famous wizards and sorceresses are interested in finding out information about the most expensive wands we have. Let's pull the data on our top three most expensive wands.

First, let's write a query to match all wands.

Next, add a cursor method to sort the wands in descending order by their price field.

Lastly, add another cursor method to limit the results to only 3 documents.

*/

db.wands.find().sort({"price":-1}).limit(3)