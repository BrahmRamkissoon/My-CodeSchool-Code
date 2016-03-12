/*
How many SyntaxBird objects inhabit the dunes? Modify the conditional in the loop so that it will progress through the duneInhabitants array and properly increment the count variable.
*/

// Given
function Bird(){}
function DatatypeBird(){}
function SyntaxBird(){}
DatatypeBird.prototype = Object.create(Bird.prototype);
SyntaxBird.prototype   = Object.create(Bird.prototype);

var TryCatchTaster = function(){},
    SwitchSnagger  = function(){},
    TernaryTracker = function(){};

TryCatchTaster.prototype = Object.create(SyntaxBird.prototype);
SwitchSnagger.prototype  = Object.create(SyntaxBird.prototype);
TernaryTracker.prototype = Object.create(SyntaxBird.prototype);

var NumberNommer = function(){};
NumberNommer.prototype = Object.create(DatatypeBird.prototype);

var aTryCatchTaster = new TryCatchTaster();
var aSwitchSnagger  = new SwitchSnagger();
var aTernaryTracker = new TernaryTracker();
var aNumberNommer   = new NumberNommer();

var duneInhabitants = [aNumberNommer, aTryCatchTaster, 
                       aSwitchSnagger, aTernaryTracker];

var count = 0;
for(var i = 0; i < duneInhabitants.length; i++) {
    // --- ?? --- 
  if () {
      // -- ?? -- 
    count++;
  }
}

// Refactored in if()
// duneInhabitants[i] instanceof SyntaxBird