/*
Let's create a new SpeedTest to see how long our populationGetter function takes to run. The speedTest.js file is available for review, but we'll only need to edit the proto.js file to complete this challenge.
*/

// proto.js
var IP = ['Nipping Global Variable', 'Sneaky Forin', 'Bulging Blocking Script'],
GH = ['Switch Blocks', 'Pesky Gnat', 'Aiedra'],
inhabitants = [IP,GH];

function populationGetter(popn) {
  var list = '';
  for (var i = 0, x = popn.length; i < x; i++) {
    for (var j = 0; j < popn[i].length; j++) {
      list += (popn[i][j] + ', ');
    }
  }
  return list;
}

populationGetter(inhabitants);

// speedTest.js
var SpeedTest = function(testImplement,testParams,repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
};

SpeedTest.prototype = {
  startTest: function() {
    if (this.testImplement(this.testParams) === false) {
      alert('Test failed with those parameters.');
      return;
    }
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++) {
      beginTime = +new Date();
      this.testImplement(this.testParams);
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return console.log('Average execution across ' + this.repetitions + ': ' + this.average);
  }
};


// Task 1
/*
Create a new test by passing populationGetter, inhabitants, and 100000 to the SpeedTest constructor function. Save it to a variable named concatTest.
*/
var concatTest = new SpeedTest(populationGetter, inhabitants, 100000);

// Task 2
/*
On the next line, start the test by calling the startTest() method on our newly created test.*/

concatTest.startTest();


