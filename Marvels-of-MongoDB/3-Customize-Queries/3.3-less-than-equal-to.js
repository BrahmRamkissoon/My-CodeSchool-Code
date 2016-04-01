/*
Believe it or not, some lower-level wands have better stats than those that are equal to our current level.
*/

db.wands.find(
  {
    "level_required": {"$lte":5}    
  }
)