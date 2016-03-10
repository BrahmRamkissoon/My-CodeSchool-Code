// Use named params with default values

function loadProfiles(userNames = [], options = {}) {
  let profilesClass = options.profilesClass || ".user-profile";
  let reverseSort   = options.reverseSort   || false;

  if (reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}


// Refactored
function loadProfiles(userNames = [], {profilesClass, reverseSort} = {}) {
  profilesClass = profilesClass || ".user-profile";
  reverseSort   = reverseSort   || false;

  if (reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}