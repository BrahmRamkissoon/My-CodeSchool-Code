/*
Check all other valid ways we can use our topicList() generator function.
*/

// topicList generator
function *topicList(){
  yield "ES2015";
  yield "Semi-colons: good or bad?";
  yield "TypeScript";
}


// Answer:

let names = [...topicList()];
console.log( names );

let [first, ...rest] = topicList();
console.log(first, rest );