/* Given the following array: */

let recentTopics = [
  { 
    title: "Semi-colons: Good or Bad?",
    isLocked: true 
  },
  { 
    title: "New JavaScript Framework Released", 
    isLocked: true 
  },
  { 
    title: "ES2015 - The Shape of JavaScript to Come", 
    isLocked: false 
  }
];

// Answer: 

recentTopics.find( topic => !topic.islocked);

// or

recentTopics.find( (topic) => !topic.islocked);
