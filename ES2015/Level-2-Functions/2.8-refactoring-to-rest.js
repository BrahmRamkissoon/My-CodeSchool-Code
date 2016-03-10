function appendUserNames(  ){

  let userNameDivs  = "";
  let USER_CLASS    = ".forum-user";

  for(let i in arguments){
    let name = arguments[i];
    if(name !== "admin"){
      userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>";
    }
  }

  return userNameDivs;
}

// Refactored
function appendUserNames( ...userNames ){

  let userNameDivs  = "";
  let USER_CLASS    = ".forum-user";

  for(let i in userNames){
    let name = userNames[i];
    if(name !== "admin"){
      userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>";
    }
  }

  return userNameDivs;
}