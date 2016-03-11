/*
Add a return value for the buildTopicInfo() function that will make the rest of the code function correctly.
*/

function buildTopicInfo(topic){
  let title = `<h1>${topic.title}</h1>`;
  let author = `<small>${topic.author}<small>`;

  return [title, author];
  
}

let topic = getCurrentTopic();
let [topicTitle, topicAuthor] = buildTopicInfo(topic);