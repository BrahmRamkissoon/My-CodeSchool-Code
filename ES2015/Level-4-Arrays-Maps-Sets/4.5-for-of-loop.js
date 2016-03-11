/*
Complete the following code using the new for… of loop. For each element in the activeUsers array, pass the current user name as the second argument to the notifyTopicReply() function.
*/

let topicId = currentTopic();
let activeUsers = ["Sam", "Tyler", "Brook"];

for( activeUsers ){
  notifyTopicReply(topicId, );
}

// Refactored
let topicId = currentTopic();
let activeUsers = ["Sam", "Tyler", "Brook"];

for( let name of activeUsers ){
  notifyTopicReply(topicId, name);
}