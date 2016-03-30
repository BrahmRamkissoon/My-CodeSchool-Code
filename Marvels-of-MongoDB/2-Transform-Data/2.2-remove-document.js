/*
While Merlin was looking through our wand information, he suddenly began to panic about a wand named the "Doom Bringer" and he ran out screaming. We should probably get rid of that wand if it scares a great wizard like Merlin.

Write the command to remove the wand with the name of "Doom Bringer" from our wands collection.
*/

db.wands.remove({
    "name": "Doom Bringer"
})