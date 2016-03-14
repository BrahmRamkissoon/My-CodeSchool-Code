/*
Up until this point we've only had 1 tour on the page at once, so we were able to hardcode a good deal of the DOM elements. Let's work on refactoring our code to work with multiple tours on the page. We're showing our tour JavaScript object we made in the reference.js file here, but it's not being loaded into the page.

For starters, create a new Tour function that takes in a jQuery object as a parameter. Create a new instance of a Tour on document.ready, passing in a jQuery object for the #paris location. Within the function, call console.log with the passed in DOM element.
*/

// Refactored application.js

function Tour (el){    
    console.log(el);
}

$(document).ready(function() {
    var paris = new Tour($('#paris'));
});