/*
We've been getting some complaints from wand makers that the term "creator" doesn't properly convey the true nature of their craft. To make them happy, we need to change the field creator to maker.
*/

db.wands.update(
  {},
  {"$rename":{"creator":"maker"}},
  {"multi": true}
)