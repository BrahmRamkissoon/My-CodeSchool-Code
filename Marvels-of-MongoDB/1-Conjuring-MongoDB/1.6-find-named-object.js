/*
Our friend Merlin was asking about a wand by the name of "Storm Seeker". Let's check the wands collection to see if we can find information about it.
*/

db.wands.find({
    "name": "Storm seeker"
})