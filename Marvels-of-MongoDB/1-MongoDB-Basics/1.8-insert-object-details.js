/*
There's a lot more about wands than just their name and creator, so let's add a new wand with much more detailed information.
*/

db.wands.insert({
    "name": "Dream Bender",
    "creator": "Foxmond",
    "level_required": 10,
    "price": 34.9,
    "powers": ["Fire", "Love"],
    "damage": {
        "magic": 4,
        "melee": 2
    }
})