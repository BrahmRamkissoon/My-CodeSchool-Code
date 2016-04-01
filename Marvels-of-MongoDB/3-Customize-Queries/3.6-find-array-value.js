/*
Wands come in a variety of lengths, and the magic folk use bananas for measurement. We've added a new lengths field to each wand that contains an array of the different lengths a wand comes in.

To find a proper wand, we'll need one that fits our size.
*/


db.wands.find(
  {"lengths": {"$elemMatch":{"$gte":2.5, "$lt":3}}}
)