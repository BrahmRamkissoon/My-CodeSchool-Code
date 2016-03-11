/*
A new function called getReplies() is currently incomplete and it needs our help. 
*/

// Here's an example of how it can be used once it's complete:
import getReplies from "./get-replies";

let topicId = 27;
let getReplies = getReplies(topicId);
getReplies.then(function(replies){
  console.log( replies );
});



// get-replies.js
export default function getReplies(topicId){
  return new Promise(function( /* ?? */ ){
    _getRepliesForTopic(topicId, function(data){
      let replies = data.replies;
      if(replies){
        /* ?? */
      }else{
        let error = new Error("An error occurred");
        /* ?? */
      }
    });
  });
}

    
    // Refactored
    export default function getReplies(topicId){
  return new Promise(function( resolve, reject ){
    _getRepliesForTopic(topicId, function(data){
      let replies = data.replies;
      if(replies){
        resolve(replies);
      }else{
        let error = new Error("An error occurred");
        reject(error);
      }
    });
  });
}
    