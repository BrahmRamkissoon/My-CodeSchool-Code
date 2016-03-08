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

```Removing <number> sheep from the population.
```
    
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


_Solution:_
```javascript

```

## 2.8 Some Dam Complex Conditionals!
_Task:_


_Solution:_
```javascript

```