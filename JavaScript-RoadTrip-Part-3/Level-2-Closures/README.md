# Level 2 - Closures
Explore the binding of external variables into local scopes.

## 2.1 The Concept of Closure
Video Lecture

## 2.2 Tracing a Closure I
_Task:_
Examine the code below (i.e., manually trace it), in your head determine the final value of the result variable, and alert the value as a number using one line of code.

You must give only 1 number literal as the argument to alert.
Do not do any calculations. So, for example, don’t use *. (Definitely do some math in your head, though!)
Don’t pass in a string.
The number must be a whole number. No decimal points.
(This challenge will give you practice following code with closures, and allow you to understand it better.)

```
function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3); 
```

_Solution:_
```javascript
alert(54);
```

## 2.3 Tracing a Closure II
_Task:_
We’ve made the code a little trickier this time. Again, calculate the final value of the result variable and alert the value as a number using one line of code.

```
function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);
var result = hidden(2);
```

_Solution:_
```javascript
alert(40);
```

## 2.4 Tracing a Closure III
_Task:_
Moar tricky. Moar tough! Again, calculate the final value of the result variable and alert the value as a number using one line of code. Hehe, good luck with this one!

```
function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);
```

_Solution:_
```javascript
alert(122);
```

## 2.5 Building a Closure I
_Task:_
he Dev Girls at the Cold Closures Cove sometimes need to provide warnings to travelers about various obstacles that sometimes float into the Cove. They need you to prepare a very efficient warning maker that will allow them to create only the warnings they need, and only when they need it. Closures to the rescue!

They’ve started a function called warningMaker with a parameter called obstacle. Within this function, return an anonymous function that displays a specific alert message based on the specific obstacle encountered. The format of the message should be as follows:

    Beware! There have been <obstacle> sightings in the Cove today!
    
Note: You do not need to call the warningMaker function.

_Solution:_
```javascript
function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}
```

## 2.6 Using a Closure I
_Task:_
The Cove’s Dev Girls just got reports of icebergs in the area!

1. Build a warning message by passing a "iceberg" obstacle as an argument into the warningMaker function.
2. Store the results in a new variable called icebergAlert.
3. Call the icebergAlert function to view the warning message.

Note: You do not need to change the existing warningMaker function.

_Solution:_
```javascript
function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

// build your warning message here
var icebergAlert = warningMaker("iceberg");

icebergAlert();
```

## 2.7 Building a Closure II
_Task:_
The Dev Girls admire your closure mastery. To test your might, they’ve asked you to modify the warningMaker function in order to announce:

- The number of obstacles. This must be the first parameter.
- The specific location of the obstacle found. This must be the second parameter.
In other words, they want to pass a specific number and a specific location to the function, and have those values become part of the alert message for the obstacle being passed into the warningMaker function.

Update the warningMaker function so that it follows the format below. Use the parameters to take the names of the bracketed placeholders:

```
Beware! There have been `<obstacle>` sightings in the Cove today!
`<number>` have been spotted at the `<location>`!
```
Note: Pay close attention to whitespace! You do not need to call the warningMaker function.

_Solution:_
```javascript
function warningMaker(obstacle) {
  return function(numObs, obsLocation) { // set parameters
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          // finish the warning message here
					numObs + " have been spotted at the " + obsLocation + "!"
    );
  };
}
```

## 2.8 Using a Closure II
_Task:_
You’ve impressed the Dev Girls with the improved functionality of your warning messages. They’ve built a few warning generators and are ready for any danger that comes up. Suddenly, the radio crackles to life:

>Dev Girls, mayday. Dev Girls, mayday!

>I’ve got 6 killer penguins on the loose near the "Ice Caves"!

>And 1 snow yeti rampaging across the "Blizzard Beach"!

>Over and out!

Review the already-built warning messages, and call the appropriate functions for this situation, making sure to pass in the appropriate parameters. You’ll need only two lines of code.

_Solution:_
```javascript
function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

// call the two functions here
killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");
```

## 2.9 Modifying Bound Values After Closure
Video Lecture

## 2.10 Changing a Bound Value I
_Task:_
The Cold Closures Cove devs are troubled by the amount of the warnings that have been coming back lately. Some obstacles have resulted in many warnings, while others have not.

They’d like you modify the warningMaker function to internally count the number of times a particular warning has been issued.

In order to accomplish this, you’ll need to set up a count variable and figure out how to increment it appropriately within the context of your functions.

Lastly, add that count to the alert message. The format of the message should match the following:

```
Beware! There have been `<obstacle>` sightings in the Cove today!
`<number>` have been spotted at the `<location>`!
This is alert #`<count>` today for `<obstacle>` danger.
```

_Solution:_
```javascript
function warningMaker(obstacle) {
  // create a count
  var count = 0;
  return function(number, location) {
    // keep track of warnings
    count++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          // finish the warning message here
          "This is alert #" +count + " today for " + obstacle + " danger."
    );
  };
}
```

## 2.11 Highway to the Danger Zones
_Task:_
The Dev Girls need you to store each location so that a list of danger zones for each obstacle can be reported with every new warning.

Inside the warningMaker function:

1. Store each location in an array called zones.
2. Add each zone to the list string.
3. Report the list of danger zones with the alert message in this format:

```
Beware! There have been `<obstacle>` sightings in the Cove today!
`<number>` have been spotted at the `<location>`!
This is alert #`<count>` today for `<obstacle>` danger.
Current danger zones are:
`<zone1>`
`<zone2>`
`<zone3>`
...
```

_Solution:_
```javascript
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    
    // add each location to the zones array
    zones.push(location);
    
    // add each zone to the list string
    for (var i = 0; i < zones.length; i++) {
  		list += zones[i] + "\n";
		}
    
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          // finish the warning message here
          "Current danger zones are:\n" +
          list
    );
  };
}
```
## 2.12 Just Keep Track of It All!
_Task:_
Well, it’s nice for new travelers to know where the danger zones are, but what if some of them are thrill-seekers? They might actually want to visit the zones that have the highest number of obstacles.

We already have a list of danger zones, and now the Dev Girls at the Cove want you to add a number alongside each of the locations.

1. Using the zones array, push a sub-array containing both the location and number for each obstacle.
2. Inside the for loop, find a way to access those values from the zones array in order to add them to the list string.
3. The final alert should be displayed in the following format:

```
Beware! There have been `<obstacle>` sightings in the Cove today!
`<number>` have been spotted at the `<location>`!
This is alert #`<count>` today for `<obstacle>` danger.
Current danger zones are:
`<zone1>` (`<number1>`)
`<zone2>` (`<number2>`)
`<zone3>` (`<number3>`)
...
```

Note: You do not need to change the alert message. You can complete the challenge by updating your zones array and then changing the for loop so that the correct values are added to the list string.`

_Solution:_
```javascript
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // push an array with location and number
    zones.push([location, number]);
    for (var i = 0; i < zones.length; i++) {
      // replace location and number with appropriate code
      list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}
```
## 2.13 Dangers at the Moment of Closure
Video Lecture

## 2.14 Final Closed Values I
_Task:_
Now that the danger zones and obstacles are in order and ready to be dealt with, the Dev Girls need your assistance with directing the Cold Closures Cove sharks to their custom-fitted lasers. That’s right. Lasers.

Sharks are supposed to be directed to the laser-strapping station that matches the index that their name is in within the sharkList array, which looks like this:

```
["Sea Pain", "Great Wheezy", "DJ Chewie",
 "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
 "Ice Teeth", "The Notorious J.A.W."]
```

But they’ve got a problem with their assignLaser function. Something is up, and now there’s a traffic jam at the last shark’s station.

Figure out what happened and apply a fix from this section’s video lecture:

1. Don’t change the position of the function inside the for loop.
2. Instead of assigning to the stationAssignment variable, return the anonymous function.
3. Remove the subsequently unnecessary lines with stationAssignment.

Note: You do not need to call the assignLaser function.

_Solution:_
```javascript
function assignLaser(shark, sharkList) {
  
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      return function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser.");
      };
    }
  }  
}

```
## 2.15 Final Closed Values II
_Task:_
Now the Dev Girls need each shark to be matched with a corresponding target. A shark’s index in the listOfSharks array will match the index of the target that it is supposed to eliminate from listOfTargets.

```
var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];
```                     
                     
Inside the makeTargetAssigner function:

1. First, return an anonymous function that takes in a shark parameter.
2. Inside the function that is being returned, create a for loop to loop through the sharks array.
3. Inside the loop, find out if the current shark from the sharks array matches the shark name that is getting passed as a parameter.
4. If those values match, build an alert message that produces the following output after calling the getTargetFor function:

```
Hey, Ice Teeth!
There've been blue witch sightings in our area!
Time to take care of business!
```

Note: You do not need to edit the provided function call at the bottom. Just build out the makeTargetAssigner function to complete the challenge.

_Solution:_
```javascript
function makeTargetAssigner(sharks, targets) {
  // insert your code here
  return function (shark){
    for( var i = 0; i < sharks.length; i++ ){
      if(sharks[i] === shark){
      	alert("Hey, " + shark + "!\n" +
              "There've been " + targets[i] +
              " sightings in our area!\n" +
              "Time to take care of business!");
      }
    }
  
  };
}

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");
```

