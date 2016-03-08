# Level 4 - Declarations
Understand functions and building custom functionality.

## 4.1 Intro to Functions
Video Lecture

## 4.2 A Basic Multiplication Function
_Task:_
In the uniqueMath.js file, build a function declaration called multiplyTrio that takes in three parameters. Inside the function, multiply the numbers together into one product, and return the result. You may use whatever parameter and variable names you’d like.

_Solution:_
```javascript
function multiplyTrio (a, b, c){
	return a*b*c; 
}
```

## 4.3 Calling Functions
_Task:_
Call your multiplyTrio function from the console using the numbers 8, 4, and 10.

_Solution:_
```javascript
multiplyTrio(8,4,10);
```

## 4.4 More Declarations
_Task:_
Build a function declaration called maxOf2 that takes in two numbers and returns the greater value. Be careful to think about the possibility of equality as well and return one of the numbers.

_Solution:_
```javascript
function maxOf2(a, b){
  if(a>b){
    return a;
  }else if(a < b){
  	return b;
  }else{
  	return a;
  }
}
```

## 4.5 Refactoring for Efficiency and Legigbility
_Task:_
In uniqueMath.js, you’ll see a function called mystery. Refactor the code in the function to include only one line that returns a value.

```javascript
function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}
```

_Solution:_
```javascript
function mystery(x, y) {
  
   return (4 * x * y) + (3 * y + 5);
}
```

## 4.6 Problem Solving with Functions 
Video Lecture

## 4.7 Problem Solving with Functions I
_Task:_
The Park Rangers in Death Valley National Park divide up the feed responsibilities daily for the Bighorn Sheep population. Each sheep needs 2 lbs of ranger-provided food per day.

Build a function called feedPerRanger that takes in:

- The current population of sheep.
- The number of Park Rangers available during the day.

The function should alert the amount of feed that each Park 
Ranger should be responsible for on that day. The output should match the following format:

    Each Park Ranger should load <number> lbs of feed today.

_Solution:_
```javascript
function feedPerRanger(currentPopulation, numRangers) {
	var amountOfFeed = (currentPopulation / numRangers) * 2;
  
  alert("Each Park Ranger should load " + amountOfFeed + " lbs of feed today.");
}
```

## 4.8 Problem Solving with Functions II
_Task:_
Back at the Hoover Dam, the technicians have decided they want more control of which generators are on and off. So, they’ve asked you to develop a way to adjust the total megawatts generated upon the switch-on or switch-off of a single, chosen generator.

Build a function named changePowerTotal that takes in four parameters:

- The total power generated (a number)
- The generator ID for the current generator (a number)
- The generator status (a string that says "on" or "off")
- The amount of power produced by the current generator (a number)

Your function should:

- If the current generator is set to "on", then add to the total power generated.
- Or if the current generator is set to "off", then remove from the total power generated.
- return the total power generated.
- alert the technician in the following formats:

For switching on:

    Generator #2 is now on, adding 62 MW, for a total of 62 MW!
For switching off:

    Generator #2 is now off, removing 62 MW, for a total of 0 MW!

Note: You do not need to call the function. Build the function declaration without invoking it.

_Solution:_
```javascript
function changePowerTotal( totalPow, genID, genStatus, genPower ){
  if(genStatus === "on"){
  	totalPow += genPower;
    alert("Generator #" + genID + " is now on, adding "
          + genPower + " MW, for a total of " + totalPow + " MW!");
  }
  else if(genStatus === "off"){
  	totalPow -= genPower;
    alert("Generator #" + genID + " is now off, removing "
          + genPower + " MW, for a total of " + totalPow + " MW!");
  }
	
  return totalPow;  
}
```
