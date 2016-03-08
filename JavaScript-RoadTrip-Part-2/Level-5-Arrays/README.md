# Level 5 - Arrays
Learn to build and manipulate the array data structure.

## 5.1 Array Ho!
Video Lecture

## 5.2 Adjusting Array Contents I
_Task:_
In the following array, set one value of the array so that it will be a list of numbers in order.

    var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];
    
_Solution:_
```javascript
list[3] = 4;
```

## 5.3 Array Functions I
_Task:_
Using the specific array function that adds data to the back end of the array, add the next number to your newly corrected list.

    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

_Solution:_
```javascript
list.push(10);
```

## 5.4 Building Arrays
_Task:_
Create an array called values that contains the following contents in order:

1. a String
2. a Number
3. a Boolean

_Solution:_
```javascript
var values = ["name", 1, true];
```

## 5.5 Array Functions II
_Task:_
Now using the specific array function that takes a piece of data off the back of an array, remove the last entry from your values array and store the result in a variable called bool.

_Solution:_
```javascript
var bool = values.pop();
```

## 5.6 2D Arrays I
_Task:_
Check out the following setup. Enter a line of code that declares a variable called infant and accesses the word "Baby" from eightiesMovies without making any changes to either element inside the array.

```
var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];
```

_Solution:_
```javascript
var infant = eightiesMovies[0][4];
```

## 5.7 2D Arrays II
_Task:_
Now alert a string with the full title of the first movie in the eightiesMovies array, but only using the eightiesMovies variable to access the correct values. Use the concatenation operator to unite the words into one string, and remember to be attentive to necessary whitespace!

```
var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];
```

_Solution:_
```javascript
alert(eightiesMovies[0][0] + " " + eightiesMovies[0][1]); 
```
## 5.8 Searching Arrays
Video Lecture

## 5.9 Iteration over Array Contents
_Task:_
Build out the numStrings function using a for loop that counts all of the strings in the array parameter called list.

1. Inside the function, set up a count variable and initialize it to a value of 0. We can use this variable to keep track of the number of strings.
2. Use a for loop to loop through the list array.
3. If the typeof the current array index value is equal to "string", then increment the count variable.
4. Outside the for loop, return the count variable with the total amount of strings found.

_Solution:_
```javascript
function numStrings(list) {
	var count = 0;
  
  for ( var i = 0; i < list.length; i++){
    if (typeof list[i] === "string"){
    	count++;
    }
  }
  return count;
}
```

