/*
For many of the same reasons as with, eval can also be dangerous to use. It hurts legibility, makes debugging difficult, and slows performance.

Rewrite the toolAssignment() function to use the toolsForTheBug array to set the tool property instead of the evil eval that's currently used.
*/

//tools.js
var toolsForTheBug = [
  {bug: 'termite', tool: 'trebuchet'},
  {bug: 'slug', tool: 'sling'},
  {bug: 'caterpillar', tool: 'catapult'}
];

function toolAssignment(number, tool) {
  eval("toolsForTheBug[" + number + "].tool = '" + tool + "'");
}

toolAssignment(1, 'Sausage');

// Refactored

var toolsForTheBug = [
  {bug: 'termite', tool: 'trebuchet'},
  {bug: 'slug', tool: 'sling'},
  {bug: 'caterpillar', tool: 'catapult'}
];

function toolAssignment(number, tool) {
  toolsForTheBug[number].tool = tool;
}

toolAssignment(1, 'Sausage');
