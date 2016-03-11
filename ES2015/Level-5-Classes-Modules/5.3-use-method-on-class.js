/*
The following TopicReplyCounter class has an addReply() method, which is unfinished. Follow the tasks to complete this method and finish writing this class.
*/

class TopicReplyCounter {

  constructor(topicId, replies){
    this.topicId = topicId;
    this.replies = replies || [];
    this.replyCount = this.replies.length;
  }
  
  addReply(reply){
    //
    
  }
  
  totalReplies(){
    return this.replies.filter( reply => !reply.isAbuse );
  }
  
  totalCount(){
    return this.replyCount;
  }
}

// Refactored
class TopicReplyCounter {

  constructor(topicId, replies){
    this.topicId = topicId;
    this.replies = replies || [];
    this.replyCount = this.replies.length;
  }
  
  addReply(reply){
    this.replies.push(reply);
    this.replyCount = this.totalReplies().length;
    
  }
  
  totalReplies(){
    return this.replies.filter( reply => !reply.isAbuse );
  }
  
  totalCount(){
    return this.replyCount;
  }
}