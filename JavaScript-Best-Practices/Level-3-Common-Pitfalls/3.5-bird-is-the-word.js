/*
Read over the following code, paying special attention to NumberNommer and Bird.

    Is myNumberNommer a new instance of Bird?
*/

// Given
function Bird(){};
function DatatypeBird(){};
DatatypeBird.prototype = Object.create(Bird.prototype);

var NumberNommer = function(){};
NumberNommer.prototype = Object.create(DatatypeBird.prototype);

var myNumberNommer = new NumberNommer();


// Answer: true