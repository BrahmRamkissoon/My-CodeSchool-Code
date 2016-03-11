// given the sinner() function below:

function spinner(target, options = {}) {
  let defaults = {
    message: "Please wait",
    spinningSpeed: 5,
    cssClass: ".is-spinning"
  };

  let settings = Object.assign({} , defaults , options);

  console.log(`Message: ${settings.message}`);
  console.log(`spinningSpeed: ${settings.spinningSpeed}`);
  console.log(`cssClass: ${settings.cssClass}`);
}

// Indicate the outcome of invoking this function, like so:

spinner(targetElement, {
  cssClass: ".is-fast-spinning", 
  spinningSpeed: 8 
});

/*
Message: Please Wait
spinningSpeed: 8
cssClass: .is-fast-spinning
*/