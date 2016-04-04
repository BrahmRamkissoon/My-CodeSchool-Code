/*
We're always on the lookout for the best wand for its value. Let's find out the top 5 makers that offer the most magic damage for a wand in our level range.

Write an aggregate that finds wands that have a level_required that's less than or equal to 5.

Add the aggregate stage to group the wands by their maker.

Add an accumulator with the field max_damage that finds the max damage.magic per maker.

Now that we have the bulk of our data, let's go ahead and sort the max_damage in descending order.


Add a limit stage so that we only find the first 4 results. After all, we don't have all day to look through wands!

There's one more stage we can add to our pipeline to make sure it's fully optimized. Since we only need the maker and damage.magic fields, add a $project stage that only passes those fields along to the rest of operators.

Remember, where you place this is important!

*/

db.wands.aggregate([
  {"$match":{"level_required":{"$lt":5}}},
  {"$project":{"_id": false, "maker":true, "damage.magic":true}},
  {"$group":{"_id":"$maker", "max_damage":{"$max":"$damage.magic"}}},
  {"$sort":{"max_damage":-1 }},
  {"$limit": 4}
])