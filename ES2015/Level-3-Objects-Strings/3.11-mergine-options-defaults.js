/*Complete the following code so that the options object passed as an argument to the spinner() function is properly merged with the defaults object. It's important that neither of these 2 objects is mutated.
*/

function spinner(target, options = {}){

  let defaults = {
    message: "Please wait",
    spinningSpeed: 5,
    cssClass: ".is-spinning"
  };

  let settings = Object.assign(
    //
  );

  if(settings.spinningSpeed !== defaults.spinningSpeed){
    settings.cssClass = _addSpeedClass(target);
  }

  _renderSpinner(target, settings);
}

// Refactored
function spinner(target, options = {}){

  let defaults = {
    message: "Please wait",
    spinningSpeed: 5,
    cssClass: ".is-spinning"
  };

  let settings = Object.assign(
    {},
      defaults,
      options
  );

  if(settings.spinningSpeed !== defaults.spinningSpeed){
    settings.cssClass = _addSpeedClass(target);
  }

  _renderSpinner(target, settings);
}