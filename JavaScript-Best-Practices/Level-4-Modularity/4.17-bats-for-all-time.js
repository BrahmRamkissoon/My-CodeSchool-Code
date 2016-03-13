/*
To ensure that the number of bats is referenceable, build a public method called getBats() that returns the private data. As a result of your work, the amount of bats will be retrievable, but the quantity will endure for the ages.
*/

// cavesofclarity.js
var CAVESOFCLARITY = function() {
          
  var treasureChests = 3;
  var bats = 345;

  return {
    stalactites: 4235,
    stalagmites: 3924,
    SECRET: {
      openChest: function() {
        treasureChests--;
        alert('DA DADADA DAAAAAAA!');
      }
    },
     
  };
}();

// Refactored
var CAVESOFCLARITY = function() {
          
  var treasureChests = 3;
  var bats = 345;

  return {
    stalactites: 4235,
    stalagmites: 3924,
    SECRET: {
      openChest: function() {
        treasureChests--;
        alert('DA DADADA DAAAAAAA!');
      }
    },
    getBats : function(){
      return bats;
    } 
    
  };
}();