/*
Complete the code so that it assigns the first element of the array to the variable first, and the second and third elements of the array to a single variable called remainingUsers. Remember to use the rest parameter syntax from inside the array destructuring assignment.
*/

let  = ["Sam", "Tyler", "Brook"];
addActiveUsers(first, remainingUsers);

// Refactored
let [ first, ...remainingUsers]= ["Sam", "Tyler", "Brook"];
addActiveUsers(first, remainingUsers);