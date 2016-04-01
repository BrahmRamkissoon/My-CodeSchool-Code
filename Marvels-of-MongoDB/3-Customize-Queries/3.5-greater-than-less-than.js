/*
At our current level, we can't do much magic damage yet, but we can do melee damage all the way up to 40.
*/

db.wands.find(
  {
    "damage.melee":{"$gte":30, "$lte":40}
  }
)