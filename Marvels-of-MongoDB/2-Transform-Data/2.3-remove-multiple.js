/*
When we removed the "Doom Bringer" wand, we noticed that it had a power of "Death", and we don't want any wands like that in our database. To be safe, let's remove any wands containing that in their powers.
*/

db.wands.remove({
    "powers": "Death"
})