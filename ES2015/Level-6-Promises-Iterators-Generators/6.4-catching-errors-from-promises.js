/*
We've refactored our code and extended the functionality to filter out replies marked as abuse. However, any errors that occur during the execution of our Promise will break our code. Let's fix that.
*/

// filter-replies.js
getReplies(1)
.then(function(replies){
  return replies.filter( reply => !reply.isAbuse );
})
.then(function(filteredReplies){
  console.log( filteredReplies );
})
/* ?? */;


// Refactored
getReplies(1)
.then(function(replies){
  return replies.filter( reply => !reply.isAbuse );
})
.then(function(filteredReplies){
  console.log( filteredReplies );
})
.catch(function(error){
  console.log("Error: ", error);
});