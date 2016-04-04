/*
Let's put together a simple buyer's guide with some basic stats about makers to help our users quickly make wand decisions.

Write an aggregate to group wands by their maker.

Add an accumulator with the field total_wands to sum the number of wands each maker has.

Now add an accumulator with the field max_magic that finds that greatest damage.magic per maker.

Lastly, add one more accumulator with the field lowest_price that finds the lowest wand price per maker.

*/

db.wands.aggregate([{$group:
                     {"_id":"$maker", 
                      "total_wands":{"$sum":1}, 
                      "max_magic":{"$max": "$damage.magic"},
                      "lowest_price":{"$min": "$price"}                     
                     }  
}])