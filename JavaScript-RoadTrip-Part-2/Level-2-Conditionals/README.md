# Level 2 - Conditionals
Use conditions to execute different branches of code with if-else blocks.

## 2.1 Loop Slide
Video Lecture

## 2.2 A Basic Conditional
_Task:_
In countdown.js, modify the while loop with a conditional that will only allow a number to be printed if it is even. Your results should be the even numbers from 10 to 2 in descending order. Think carefully about how your code might decide if a number is even…

_Solution:_
```javascript
var num = 10;

while (num > 0) {
  
  if (num % 2 === 0){    
    console.log(num);
  }
  
  num--;
}
```

## 2.3 Using Boolean Flags in Conditionals
_Task:_
The Badlands National Park would like to print specific messages depending on whether the park is open or closed.

They’ve asked you to modify their badlands.js file to print one of the following messages depending on the boolean value (true or false) of the variable parkIsOpen. We’ve already established for you the status of the variable for today.

Add a pair of conditional statements to print one of the following messages to the console based on the parkIsOpen variable:

    Welcome to the Badlands National Park! Try to enjoy your stay.
OR

    Sorry, the Badlands are particularly bad today. We're closed!

_Solution:_
```javascript
var parkIsOpen = true;

if (parkIsOpen){
  console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");
}
else{
	console.log("Sorry, the Badlands are particularly bad today. We're closed!");
}
```

## 2.4 A Loopy Problem
Video Lecture

## 2.5 Problem Solving with Conditionals
_Task:_
Back at Death Valley, scientists could see that the Sheep Situation would quickly get out of control. They have decided that, for any month the population climbs above 10000, half of the sheep will be sent away to other regions.

Inside our for loop, insert an if statement that:

- Removes half of the sheep population if the number of sheep rises above 10000.
- Prints the number of sheep being removed to the console in the following format:

`Removing <number> sheep from the population.`
    
Note: To complete the challenge, you only need to insert the if statement. You do not need to create an else statement or change any of the provided code.

_Solution:_
```javascript
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(numSheep >= 10000){
 		numSheep /= 2;
    console.log("Removing " + numSheep + " sheep from the population.");
  } 
  
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
	}
```

## 2.6 Loop Echo
Video Lecture

## 2.7 Too Many Sheep!(or, the else if statement)
_Task:_
We’ve made a significant difference, but there are still too many sheep for the fragile Death Valley ecosystem. The Rangers would like you to implement the following new plan for population reduction:

- If the month is a multiple of 4, then find 75% of the sheep population. Log that value to the console in the format below. Then, remove that value from the total number of sheep.
- Otherwise, if the population is above 10000, find half of the sheep population. Log that value to the console in the format below. Then, remove that value from the total number of sheep.

Use this format for logging sheep reduction:

`Removing <number> sheep from the population.`

Note: To complete the challenge, you only need to insert an if statement and an else if statement. You do not need to create an else statement at the bottom or change any of the provided code.

_Solution:_
```javascript
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber % 4 === 0){  	
    console.log("Removing " + (numSheep*0.75) + " sheep from the population.");
    numSheep -= (numSheep*0.75);
  } 
  else if(numSheep >= 10000){
 		numSheep /= 2;
    console.log("Removing " + numSheep + " sheep from the population.");
  } 
  
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
```

## 2.8 Some Dam Complex Conditionals!
_Task:_
The people at the Hoover Dam have called you back, and would like a program that shows what happens when only the even numbered turbines are turned on. And they want it all in just one for loop.

With a set of complex conditional statements inside the loop, construct a way to only turn on even numbered turbines. Remember our power output situation:

- Generators 1 through 4 produce 62 MW.
- Generators 5 through 19 produce 124 MW.
The output should follow this format:

```
Generator #1 is off.
Generator #2 is on, adding 62 MW, for a total of 62 MW!
```
We’ve given you some starting variables to use in your build. Within your loop, consider the possible scenarios when building your conditions:

- The Generator provides 62 MW of power.
- The Generator provides 124 MW of power.
- The Generator is off.

_Solution:_
```javascript
var totalGen = 19;
var totalMW = 0;

var genNum = 1;
for(genNum = 1; genNum <= 19; genNum++){
  
  // turn on even numbered turbines
  if(genNum % 2 === 0){  
      // check for generators 1 through 4
        if (genNum <= 4){
          totalMW += 62;
            console.log("Generator #" + genNum + " is on, adding " 
                      + 62 + " MW, for a total of " 
                      + totalMW + " MW!");
        } 
        else {    
        totalMW += 124;
        console.log("Generator #" + genNum + " is on, adding " 
                      + 124 + " MW, for a total of " 
                      + totalMW + " MW!");
        }
      } 
      else {
        console.log("Generator #" + genNum + " is off.");
      }  
}
```