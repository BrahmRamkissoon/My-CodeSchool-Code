/*
*/

// app.js
var strength = true;
var fear = false;
var pack = {
  food: [ 'carrot',
          'mystery meat',
          'apple',
          'crust of bread',
          'spicy dried sausage',
          'carrot',
          'wedge of sharp cheese',
          'jug of milk',
          'mystery meat',
          'carrot'
  ],
  addFood: function(foodItem) {
    this.food = this.food || [];
    this.food.push(foodItem);
  },
  enoughFood: function(amount) {
    return(this.food.length >= amount);
  }
};

/* refactor here */
var surviveThisTrial = strength && !fear && pack.enoughFood(10);
//

console.log(surviveThisTrial);
