/*
The makers of the "Devotion Shift" wand have decided to reduce its price since no one is showing interest in their luxury wand.
*/

db.wands.update(
    { "name": "Devotion Shift"  }, 
    { "$set": {"price": 5.99 }  }
)