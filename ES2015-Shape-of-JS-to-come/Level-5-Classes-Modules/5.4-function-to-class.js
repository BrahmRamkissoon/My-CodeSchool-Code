/*
Let's rewrite TagManager from function to a class. 
*/

// TagManager
function TagManager(topicId){
  this.topicId = topicId;
}

TagManager.prototype.addTag = function(tagName){
  API.createTag(tagName, this.topicId);
};

TagManager.prototype.removeTag = function(tagName){
  API.deleteTag(tagName, this.topicId);
};


// Refactored  
class TagManager{
  
  constructor(topicId){
    this.topicId = topicId;     
  }
  
  addTag(tagName){
   API.createTag(tagName, this.topicId);   
  }
  
  removeTag(tagName){
  API.deleteTag(tagName, this.topicId);
  }
}