/*
People are getting confused by the damage stats for each wand. We've been basing damage on a scale of 1-10, but we should be using a scale of 1-100. 
*/
db.wands.update(
  {},
  {"$mul":{"damage.melee":10}},
  {multi: true}
)