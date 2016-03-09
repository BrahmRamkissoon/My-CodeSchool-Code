# Level 1 - Function Expressions
Learn how to use and manipulate functions as expressions.

## 1.1 Function Expressions
Video Lecture

## 1.2 Changing Declarations to Expressions
_Task:_
Developers for the Forest of Function Expressions Theme Park have created a function declaration named forestFright, but they’ve decided not to keep the function in memory.

Convert the function from a named function declaration to an anonymous function expression and assign it to a variable called runAway.

_Solution:_
```javascript
var runAway = function () {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};
```

## 1.3 Using Function Expressions with Parameters
_Task:_
The devs at the Death-Defying Dogwoods have determined a specific formula for the quantifiable amount of fear generated at the theme park. Their formula is based on the amount of people, the amount of rain, and the amount of sharks. Yes. Sharks.

```javascript
var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};
```

1. Analyze the fearGenerated formula.
2. Assign appropriate values to the people, rain, and sharks variables so that the amount of fear generated will be no less than 100, but no more than 400.
3. Call the fearGenerated function and pass in the variables as arguments.
4. Store the result of that function in a new variable called fear.

Note: You do not need to change the existing fearGenerated function.

_Solution:_
```javascript
var people = 38;
var rain = 5;
var sharks = 2;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

var fear = fearGenerated(people, rain, sharks);
```

## 1.4 Displaying Function Contents
_Task:_
Periodically, the devs at the Haunted Hickory House need to be reminded of their formula. They would like to view the contents of the function, rather than executing it.

Write one line of code to alert the contents of the variable that stores the function to the screen. Here is the fearGenerated function expression assignment for reference:

```javascript
var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};
```

_Solution:_
```javascript
alert(fearGenerated);
```

## 1.5 Functions as Parameters, Arguments and Return Values
_Task:_
Well, it stands to reason that some people might not want to experience the Haunted Hickory House if the fear is significantly elevated on that day.

1. Inside the fearMessage function expression, use conditional statements to check the already-generated fear value, and decide whether it is LOW or MEDIUM.
2. Inside each conditional statement, return a specific confirm message in the following formats:

For fear levels less than 200:
```
Fear Level: LOW
Still wanna ride?
```

For fear levels 200 through and including 300:

```
Fear Level: MEDIUM
Think you'll make it?
```

Lastly, call the confirmRide function and pass in the fearMessage variable. Then assign the results of that function in a new variable called startRide.

Note: You do not need to change the existing code that’s provided for you in the challenge editor.

_Solution:_
```javascript
var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  // Insert conditional statements here
  if (fear < 200){
    return confirm("Fear Level: LOW\nStill wanna ride?"); 
  }
  else if (fear <=300){
  	return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

// Call confirmRide here
var startRide = confirmRide(fearMessage);
```

## 1.6 Passing Function Expressions As Parameters
Video Lecture

## 1.7 Using Map With Arrays
_Task:_
from the customer terminal that they want to use to customize greetings for each of their passengers. But the data consists of an array with many subarrays where the first and last names of each passenger are split up.

They want to take the passengers array and convert those subarrays into strings that contain the first and last name for each passenger.

1. Create a modifiedNames variable to store our new data.
2. Assign passengers.map() to the modifiedNames variable. This will allow us to pass in a function to be used on every element in the array.
3. Pass an anonymous function to map().
4. The anonymous function should take in arrayCell as a parameter and use that to return a string with the first and last name for a passenger. In other words, if you were to pass in a ["Jason", "Millhouse"] array, the function should return a "Jason Millhouse" string.

_Solution:_
```javascript
var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];


var modifiedNames = passengers.map(function(arrayCell){ return arrayCell[0] + " " + arrayCell[1];});
```


## 1.8 Using Map With Arrays II
_Task:_
The passengers have arrived at Maple Mountain! Take the modifiedNames array that you produced in the last challenge, and map a new anonymous function on it.

The function should alert the following message to the screen for each passenger in turn:

    Yo, <name>!

Note: Since we are creating an alert message, you won’t need to return a value or create any new variables. Normally you would use map’s return value, but this is just for practice.

_Solution:_
```javascript
var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];

modifiedNames.map( function(hello){
	alert("Yo, " + hello[0]);
});
```

## 1.9 Expressions Inside Arrays
_Task:_
The folks over at Poplar Puzzlers need an array of functions for one of their puzzles. They’ve requested your help in making the array, which they would like to be called puzzlers. The cells of the array should each contain a function, and these functions–well, what they return–are listed here in order. Each function has one parameter. Note input below represents the parameter, and you will need to convert the math formulas to JavaScript:

1. Returns 3 * input - 8
2. Returns (input + 2)3
3. Returns input2 - 9
4. Returns input % 4

Use your knowledge of arrays and anonymous function expressions to build this array of functions.

Note: Use parentheses with your return statements if you’re having trouble with the order of operations.

_Solution:_
```javascript
var puzzlers = [
                function(input){ return 3 * input - 8; },
                function(input){ return Math.pow(input + 2, 3); },
                function(input){ return Math.pow(input, 2) - 9; },
                function(input){ return input % 4; },		
];
```

## 1.10 Returning Functions and Immediate Invocation
Video Lecture

## 1.11 Choose Their Own Adventure
_Task:_
Ash Adventures has three different “adventures” to choose from, and customers are prompted for a number at a terminal. The number is stored as userChoice and then passed into a function called adventureSelector.

Inside the function, you need to return an anonymous function based on the number that the user selected. Each of your three anonymous functions should contain a boarding alert message:

If the user selects 1:

    You selected the Vines of Doom!
    
If the user selects 2:

    Looks like you want the Lake of Despair!
    
If the user selects 3:

    The Caves of Catastrophe!
    
Assume the user’s choice has already been stored as 1, 2, or 3, and is passed in as the userChoice parameter. Make sure that you return all message functions as anonymous functions, instead of stored in variables. You do not need to call the function at the end.

_Solution:_
```javascript
function adventureSelector(userChoice) {
  // return anonymous functions inside conditional blocks
  if( userChoice === 1){ 
    return function(num){ alert("You selected the Vines of Doom!"); }; 
  }
  else if( userChoice === 2){ 
    return function(num){ alert("Looks like you want the Lake of Despair!"); }; 
  }
  else if(userChoice === 3){ 
    return function(num){ alert("The Caves of Catastrophe!"); }; 
  }
}
```

## 1.12 Immediately-Invoked Adventure
_Task:_
Write one line of code that calls adventureSelector, passes it 3 as an argument, and that immediately invokes the function that gets returned. Here’s adventureSelector for your reference:

```javascript
function adventureSelector(userChoice) {
  if (userChoice == 1) {
    return function() {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
      alert("Looks like you want the Lake of Despair!");
    };
  } else if (userChoice == 3) {
    return function() {
      alert("The Caves of Catastrophe!");
    };
  }
}
```

_Solution:_
```javascript
adventureSelector(3)();
```

## 1.13 Queue Builder
_Task:_
The devs at Poplar Puzzles would like you to treat an array of functions like a Queue, passing the result of each function into the next until the Queue is empty. They’ve sent you the puzzlers Queue of functions, and the following instructions:

1. Build a function and assign it to a variable named applyAndEmpty.
2. The function should take in an input number and a queue of functions as parameters.
3. Using a for loop, call the functions in the queue in order with the input number, where the results of each function becomes the next function’s input.
4. Once done this loop, return from applyAndEmpty the final function’s result. Additionally, the queue should be empty at this point.
5. Lastly, call the applyAndEmpty function using the provided start variable and the puzzlers Queue as arguments, and alert the result.

_Solution:_
```javascript
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function(inputNum, funcQueue){
  var length = funcQueue.length;
  for(var i = 0; i < length; i++){
  	inputNum = funcQueue.shift()(inputNum);
  }	
  return inputNum; 
};

alert(applyAndEmpty(start, puzzlers));
```

## 1.14 Immediately-Invoked Puzzler
_Task:_
Now the Poplar Puzzle-makers have sent you a puzzle with a new set of functions to use on that puzzle. To display your overwhelming array and function expression mastery, alert the answer to the following question:


>“What is obtained when the result of passing 9 into the fourth function of the puzzlers array is then passed into the function whose array index matches the result of passing 3 into the second function of the puzzlers array?”

To really impress them, the expression used in your alert should:

1. Use just one line of code.
2. Involve no manual calculation or hard-coded math on your part.
3. Use indices of arrays to access functions.
4. Use parentheses to pass in parameters to immediately-invoking functions.

Note:

- The required answer is not an example of good style, nor is it intended as such.
- The main point is to give you practice with the mechanics of arrays and function calls.

_Solution:_
```javascript
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

// the result of passing 9 into the fourth function of the puzzlers array 
// puzzlers[3-1](9)
// is then passed into the function whose array index matches 
// puzzlers[ ? ]
// the result of passing 3 into the second function of the puzzlers array
// puzzlers[2-1](3)
alert( puzzlers[puzzlers[1](3)]( puzzlers[3](9) ));
```
