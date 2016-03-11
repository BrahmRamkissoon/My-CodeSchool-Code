// Load and use the TagManager class.

// Given tag-manager-class.js
export default class TagManager {
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

// 
import TagManager from './tag-manager-class';

let tagManager = new TagManager(20);

tagManager.addTag("JavaScript");