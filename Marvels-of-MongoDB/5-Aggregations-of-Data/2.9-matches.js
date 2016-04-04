/*
A user has asked us to find out which makers have wands that are under 50 gems and have a damage.magic average above 40.

Write an aggregate to match wands that have a price that is less than 50.

Add the aggregate stage to group the wands by their maker.

Add an accumulator with a field named average_magic to find the average damage.magic per maker using the $avg accumulator.

Now that we've got our data all set, let's filter it down further.

Below the existing $match and $group aggregates, add another $match aggregate so that we're only retrieving results with an average_magic that is greater than 40.

*/
db.wands.aggregate([
  {"$match":{"price":{"$lt":50}}},
  {"$group":{"_id":"$maker", "average_magic":{"$avg":"$damage.magic"}}},
  {"$match":{"average_magic": {"$gt":40}}}  
])