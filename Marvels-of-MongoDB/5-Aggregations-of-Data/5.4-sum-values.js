/*
Our site is a popular resource for wand collectors to find wands by makers they don't yet have. One ambitious connoisseur has asked how much it would cost to buy all the wands for each vendor. Let's find out!

Write an aggregate that groups our wands by the maker field.

Add an accumulator with the total_cost field that sums the price for each wand per maker.
*/

db.wands.aggregate([{"$group":
                     {"_id":"$maker", "total_cost":{"$sum": "$price"}}
                    }])