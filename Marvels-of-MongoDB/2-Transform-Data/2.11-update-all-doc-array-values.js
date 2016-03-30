/*
We know that there are a lot of wands with the power of "Love", but the correct power is actually named "Love Burst". We'll need to update all wands that contain this power.
*/

db.wands.update(
  {"powers": "Love"},
  {"$set": {"powers.$":"Love Burst"}},
  {"multi": true}
)