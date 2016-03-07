# Level 1 - Loops
Understand and build loops for repeated code with 'while' and 'for' syntax.

## 1.1 While Loops
Video Lecture

## 1.2 A Basic While Loop
_Task:_
In countdown.js, write a basic while loop that prints to the console all the numbers from 10 to 1 in descending order. We’ve given you a starting variable to get the wheels turning.

_Solution:_
```javascript
var num = 10;
while(num >= 1){
	console.log(num);
  num--;
}
```

## 1.3 Problem Solving with Loop Operations
_Task:_
In the Death Valley National Park, a group of environmentalists have begun a project that will grow the population of Bighorn Sheep. Every month, the population will multiply by four! To stay on top of this explosive growth, the scientists would like a printout of how many sheep will make a new home in Death Valley.

In deathValley.js, use the three existing variables to build a while loop that prints a message for one year’s worth of time. Here’s what the first two lines of output should look like:

    There will be 16 sheep after 1 month(s)!
    There will be 64 sheep after 2 month(s)!

_Solution:_
```javascript
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while(monthsToPrint >= 1){
  numSheep*=4;
  
  console.log("There will be " 
              + numSheep 
              + " sheep after "
              + monthNumber
              + " month(s)!");
              
  monthNumber++;
	monthsToPrint--;
}
```

## 1.4 More Loops
Video Lecture

## 1.5 From a While Loop to a For Loop
_Task:_
In countdown.js, write a basic for loop that prints to the console all the numbers from 10 to 1 in descending order. This is the similar to one of the previous challenges, but this time we’re using a for loop instead of a while loop.

Here is what our while loop looked like from the previous challenge:

```javascript
var num = 10;
while (num > 0) {
  console.log(num);
  num--;
}
```

_Solution:_
```javascript
for(var i = 10; i >= 1; i--){
	console.log(i);
}
```

## 1.6 From a While Loop to a For Loop II
_Task:_
Morph your previous while loop into a for loop that uses the same variable names. Remember, you’ll still need to declare the starting number of sheep and the number of months to print outside the loop. We’ve given you the starting number of sheep again, as well as the amount of months you’ll need to print out for use in the loop parameters. Here’s a solution for the previous while loop for reference:

```javascript
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
  numSheep = numSheep * 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}
```

_Solution:_
```javascript
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= 12; monthNumber ){
	numSheep*=4;
  
	console.log("There will be " + numSheep 
  					+ " sheep after " + monthNumber 
  					+ " month(s)!");
  
  monthNumber++;
}
```

## 1.7 These Dam Loops!
_Task:_
The Hoover Dam has 19 generators of multiple types. For simplicity, let’s say that the first 4 of these generators output 62 megawatts, and the other 15 output 124 megawatts. In hooverDam.js, the Dam Rangers have asked you to design a system of two loops that turns each generator on in progression, and prints the new total of megawatts generated.

They’d like the first loop to be a while loop handling the first 4 generators. Then, they’d like the second loop to be a for loop that handles the other 15 generators. Each output line should resemble the following lines, with adjusted values for the currentGen and totalMW:

    Generator #1 is on, adding 62 MW, for a total of 62 MW!
    Generator #2 is on, adding 62 MW, for a total of 124 MW!
    
We’ve given you some starting variables to use in your build.

_Solution:_
```javascript
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(totalGen > 15){	
  totalMW += 62;
  
  console.log("Generator #" + currentGen 
      				+ " is on, adding " + 62 
      				+ " MW, for a total of " + totalMW + " MW!");
  
  totalGen--;
  currentGen++;  
}

for(totalGen = 15; totalGen >= 1; totalGen--){	
  totalMW += 124;
  
  console.log("Generator #" + currentGen 
      				+ " is on, adding " + 124 
      				+ " MW, for a total of " + totalMW + " MW!");  
 
  currentGen++;  
}
```

