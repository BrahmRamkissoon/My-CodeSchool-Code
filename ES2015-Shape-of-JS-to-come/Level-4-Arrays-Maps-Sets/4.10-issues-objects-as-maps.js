// Given this initial code

iven this initial code:

let author1 = { name: "Sam" };
let author2 = { name: "Tyler" };

let mostRecentReply = {};

mostRecentReply[author1] = "ES2015";
mostRecentReply[author2] = "Semi-colons: Good or Bad?";

//What will be the output of the following code?

console.log( mostRecentReply[author1] );
console.log( mostRecentReply[author2] );

// Answer: 
// Semi-colons: Good or Bad?
// Semi-colons: Good or Bad?