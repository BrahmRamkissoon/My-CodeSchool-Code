function displayTopicsPreview( topics ){
  var message = "There are currently " + topics.length;
  _displayPreviewMessage(topics, message);
}


// Refactored
function displayTopicsPreview( topics = [] ){
  let message = "There are currently " + topics.length;
  _displayPreviewMessage(topics, message);
}