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


_Solution:_
```javascript

```
```

## 1.8 Using Map With Arrays II
_Task:_


_Solution:_
```javascript

```
```

## 1.9 Expressions Inside Arrays
_Task:_


_Solution:_
```javascript

```
```

## 1.10 Returning Functions and Immediate Invocation
Video Lecture

## 1.11 Choose Their Own Adventure
_Task:_


_Solution:_
```javascript

```
```

## 1.12 Immediately-Invoked Adventure
_Task:_


_Solution:_
```javascript

```
```

## 1.13 Queue Builder
_Task:_


_Solution:_
```javascript

```

## 1.14 Immediately-Invoked Puzzler
_Task:_


_Solution:_
```javascript

```
