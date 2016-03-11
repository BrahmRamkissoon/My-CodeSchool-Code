/*The new object initializer shorthand and object destructuring look very similar, but they are used in different scenarios. Identify which syntax is being used in the code snippets below:
*/

// Snippet #1
let { tags, isLocked } = topicInfo(17);

// Snippet #2
let reply = { author, body, repliedAt };

// Snippet #3
function buildMetadata(object){
  let id = parseInt(object.id);
  let lastUpdatedAt = object.updatedAt || object.createdAt;
  let hashCode = _buildHashCode(object);

  return { id, lastUpdateAt, hashCode };
}

// Answer = Destructuring, Initializer, Initializer