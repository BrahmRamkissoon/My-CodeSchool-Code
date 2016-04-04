/*
They say that knowledge is power. Let's see what sort of interesting information we can find out based on the data we have. We have a slight suspicion that wand makers like to charge more for wands at "monumental levels". Time to prove it!

Write an aggregate to group wands by their level_required.

Add an accumulator with a field named price_average to get the average price for the wands per level.

*/


db.wands.aggregate([{"$group":
                     {"_id":"$level_required", "price_average":{"$avg":"$price"}}
                    }])