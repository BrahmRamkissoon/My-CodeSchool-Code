/*

Complete the following code so user becomes an iterable object.

Finish the next() function so that it returns an object with done and value properties, both assigned to their proper values.

Let's try and do this using the new object initializer shorthand where possible.

*/

// user.js

let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function(){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  let next = () => {
    if(count >= properties.length){
      isDone = true;
    }

    let value = this[properties[count++]];

    return /* ?? */;
  };
  return { next };
};

// Refactored
let user = {
  name: "sam", totalReplies: 17, isBlocked: false
};

user[Symbol.iterator] = function(){

  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;

  let next = () => {
    if(count >= properties.length){
      isDone = true;
    }

    let value = this[properties[count++]];

    return {done:isDone, value} ;
  };
  return { next };
};