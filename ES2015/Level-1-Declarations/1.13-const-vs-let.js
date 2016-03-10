function reportAbuse(topicId, throttler){

  const MAX_REPORTS_PER_MINUTE = 30;

  if(throttler.recentAbuseReports > MAX_REPORTS_PER_MINUTE){
    return false;
  }

  _reportTopic(topicId, function(topic){
  var message = "Topic " + topic.name;
    if(topic.isReported){
       message += " reported.";
      _displaySuccess(message);
    }else{
       message += " encountered an error!";
      _displayError(message);
    }
  });
}