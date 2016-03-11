/*
Using array destructuring, extract the first element of the tags set and assign it to the variable first.
*/

let tags = new Set();

tags.add("JavaScript");
tags.add("Programming");
tags.add("Web");

let [first] = tags;

console.log( `First tag: ${first}` );