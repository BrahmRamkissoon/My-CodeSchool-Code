# Level 2 - Variables
Review how to store and use data with variables.

## 2.1 Variable Discovery
Video Lecture

## 2.2 Variable I
_Task:_
Declare a variable whose name is age and assign your own age to it using a numerical value.

_Solution:_
```javascript
var age = "33";
```

## 2.3 Variable II
_Task:_
On line 2, declare a second variable called ageIn5Years and assign the following expression to it: age + 5

_Solution:_
```javascript
var age = 10;
var ageIn5Years = age + 5;
```

## 2.4 Variable Exploration
Video Lecture

## 2.5 Variable III
_Task:_
Declare a variable called firstName and store your first name inside it.

_Solution:_
```javascript
var firstName = "Brahmadut";
```

## 2.6 Variable IV
_Task:_
Now declare a variable called lastName and store your last name inside it.

_Solution:_
```javascript
var lastName = "Ramkissoon";
```

## 2.7 Variable Concatenation
_Task:_
Using your firstName and lastName variables, make a variable called fullName that unites your first and last names into one String.

_Solution:_
```javascript
var fullName = firstName + " " +lastname;
```

## 2.8 Complex Variable
_Task:_
Use one line of code to declare a variable called index14 and assign to it the character at index 14 in this string:

    "What can we do? Keep going!"
    
Try to use the charAt method on the string with something like this: "example string".charAt(index). Or you can assign the correct character to the variable by counting manually.

_Solution:_
```javascript
var index14 = "What can we do? Keep going!".charAt(14);
```

## 2.9 Length
_Task:_
This sentence has been assigned to a variable. Find its length without manually counting any characters or spaces.

    var sentence = "This variable is already assigned. Find its length without manually counting the characters and spaces."
    
_Solution:_
```javascript
sentence.length;
```

## 2.10 Train Passengers
_Task:_
Let’s say we start with an empty train at Death Valley National Park station. When the trains open for the day, 3 people get on board.

Declare a variable called numPassengers and set its value to 0. Then, increment the variable by 3, but without using the variable’s name twice in the new statement.
    
_Solution:_
```javascript
var numPassengers = 0;
numPassengers+= 3;
```

## 2.11 Train Passengers
_Task:_
When these folks get on board, the new passenger count is reported to the conductor. Create a countMessage variable, and assign a String that uses numPassengers to say:

    Attention: There are now 3 passengers on the train!

Remember, no hard-coding values!
    
_Solution:_
```javascript
var numPassengers = 0;
numPassengers+= 3;
var countMessage = "Attention: There are now " 
                    + numPassengers 
                    + " passengers on the train!";
```

## 2.12 Train Capacity
_Task:_

1. Build a trainCapacity variable and set it to 60.
2. Construct a String called occupancy in the following format:
    3 passengers present, with 57 seats remaining.
    
In creating this String, use numPassengers to find the number of passengers present, and (trainCapacity - numPassengers) to find the number of seats remaining.
    
_Solution:_
```javascript
var numPassengers = 0;
numPassengers+= 3;
var trainCapacity = 60;
var occupancy = numPassengers 
                + " passengers present, with "
                + (trainCapacity - numPassengers)
                + " seats remaining.";
```

## 2.13 Sum
_Task:_    
On one line of code, declare the variable twenty20 and assign to it 3 + 10 + 7
    
_Solution:_
```javascript
var twenty20 = 3 + 10 + 7;
```

## 2.14 String Concatenation
_Task:_    
Use the same twenty20 variable, but change your variable’s contents by reassigning it to the concatenation of the following characters:

- The character at index 0 in "Never look back."
- The character at index 3 in "Adventure is out there."
- The character at index 14 in "Just keep swimming."
- The character at index 1 in "To infinity... and beyond!"

Execute this concatenation in one line without declaring any extra variables. You can use a method to find the characters, or count very carefully.
    
_Solution:_
```javascript
twenty20 = "Never look back.".charAt(0)
                + "Adventure is out there.".charAt(3)
                + "Just keep swimming.".charAt(14)
                + "To infinity... and beyond!".charAt(1);
```
