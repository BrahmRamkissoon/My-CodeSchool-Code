/*
Let's go ahead and add "Spell Casting" to every wand's powers array, but only if that power doesn't already exist.
*/
db.wands.update(
  {},
  {"$addToSet":{"powers":"Spell Casting"}},
  {"multi": true}
)