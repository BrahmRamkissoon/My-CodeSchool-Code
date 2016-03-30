/*
A few of the old wands included a smell field, and we're not exactly sure why anyone thought that would be a relevant field. Let's get rid of it!
*/

db.wands.update(
  {},
  {"$unset": {"smell": ""}},
  {"multi": true}
)
