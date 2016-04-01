/*
Now that we're getting pretty good at finding wands, let's find the perfect wand for our friend Merlin.

Merlin's first requirement is the wand must not be made by "Foxmond".
Next, Merlin's level is 75 so we'll want to add a query for a level_required that is less than or equal to 75.
Merlin doesn't want to spend more than 50 gems. Add another query that makes sure the price is less than 50.
Lastly, make sure the wand is 3 to 4 banana lengths. Remember, arrays can be tricky!
*/

db.wands.find(
  {
    "maker":{"$ne": "Foxmond"},
    "level_required": {"$lte":75},
    "price":{"$lt": 50},
    "lengths":{"$elemMatch":{"$gte":3, "$lte":4}}
  }  
)