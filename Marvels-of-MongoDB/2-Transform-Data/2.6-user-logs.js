/*
We'd like to see which wands users are looking at most. To do this, we'll use the logs collection that contains documents that record the name and count for each wand.
*/

db.logs.update(
  {"name":"Dream Bender"},
  {"$inc":{"count":1}},
  {"upsert":true}
)