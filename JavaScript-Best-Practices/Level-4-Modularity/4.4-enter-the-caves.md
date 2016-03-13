/*
In cavesofclarity.js, all of the data is currently global and vulnerable to evil. Refactor this code to contain a single object that protects the data.
*/

// cavesofclarity.js
var stalactites = 4235;
var stalagmites = 3924;
var bats = 345;
var treasureChests = 3;
var openChest = function() {
  treasureChests--;
  alert('DA DADADA DAAAAAAA!');
};


// Refactored
var CAVESOFCLARITY = { 
  stalactites : 4235,
  stalagmites : 3924,
  bats : 345,
  treasureChests : 3,
  openChest : function() {
    this.treasureChests--;
    alert('DA DADADA DAAAAAAA!');
  }
};