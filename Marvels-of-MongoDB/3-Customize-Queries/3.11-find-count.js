/*
For the sake of science and all things good, let's find out how many wands only have a level_required of 2.
*/
db.wands.find({"level_required":2}).count()