/*

Write an aggregate to group wands by their maker so that we'll get a list of unique makers.

*/

db.wands.aggregate([{"$group":{"_id":"$maker"}}])