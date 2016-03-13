/*
Let's refactor this code to create a CAVESOFCLARITY module where the number of treasureChests is made private through anonymous closure. Everything else will stay public, accessed through the name of the namespace. Follow the tasks below to carefully rearrange the data and bring enhanced security to the caves.
*/

// cavesofclarity.js
var CAVESOFCLARITY = {
  stalactites: 4235,
  stalagmites: 3924,
  bats: 345,
  SECRET: {
    treasureChests: 3,
    openChest: function() {
      this.treasureChests--;
      alert('DA DADADA DAAAAAAA!');
    }
  }
};

// refactored
var CAVESOFCLARITY = (function() {
  var treasureChests = 3;
  
  return {
    stalactites: 4235,
    stalagmites: 3924,
    bats: 345,
    SECRET: {
      
      openChest: function() {
        treasureChests--;
        alert('DA DADADA DAAAAAAA!');
      }
    }
  };
})();