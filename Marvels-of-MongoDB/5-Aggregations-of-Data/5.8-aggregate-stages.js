/*
Some wand powers can be harder to find in lower-level wands. We've heard that the power "Air Bolt" is a really fun one to have. Let's find out which makers offer a wand with that power and find the lowest level_required per maker.

Write an aggregate that will only match wands that have "Air Bolt" in their list of powers.

Add another aggregate stage to group the data by their maker.

Add an accumulator with a field named lowest_level that finds the lowest level_required per maker.

*/

db.wands.aggregate([
    {"$match":{"powers":"Air Bolt"}},
    {"$group":
       {
         "_id":"$maker",
         "lowest_level":{"$min":"$level_required"}
       }
    } 
])