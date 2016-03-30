/*
The Grand House of Magic recently passed a law that all wands with "Fire" in their list of powers must increase their level_required field by 2. We need to update all wands that have been affected by the new law.
*/

db.wands.update(
  {"powers":"Fire"},
  {"$inc":{"level_required":2}},
  {"multi":true}
)