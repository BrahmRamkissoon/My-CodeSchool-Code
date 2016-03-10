# Level 5 - Inheritance
Using the magic of object inheritance, explore classes, constructors, prototypes, and properties.

## 5.1 Prototypes
Video Lecture

## 5.2 Prototypes I
_Task:_
The cowboy-devs at the Plains of Prototypes need your help! They have multiple lists of cattle being imported from different regions. Each individual bovine is represented as an object, and those objects are contained within an array. Here’s an example:

```javascript
var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];
```
The only problem is that the cowboy-devs don’t have time to go through all of the lists and count each specific type of cattle that’s being imported. Instead, they want to create a countCattle prototype function that returns the total number of cattle:

1. Add a function called countCattle to the Array prototype. This will allow the cowboy-devs to call the function on any array list (like the canyonCows array).
2. The function should take in a kind parameter.
3. Inside the function, set up a numKind variable to keep track of how many bulls, cows, or calves are present in the array.
4. Use a for loop to loop through all of the array values. You can use this to refer to the current list.
5. If the type property of the current array value matches the kind parameter, then increment your numKind variable.
6. After your loop, return the numKind variable for the total number of cattle.

Note: You do not need to call the countCattle function. We’ll call it when testing your code. You also do not need to include the canyonCows array in your code submission.
    
_Solution:_
```javascript
Array.prototype.countCattle = function(kind){
	var numKind = 0;
  
  for (var i=0; i < this.kind.length; i++){
      if(this.kind.type === kind){
    	numKind++;
    }
  }
	return numKind;
};
```

## 5.3 Prototypes II
_Task:_
The cowboy-devs have determined that they need to put the calves from the Canyon, the bulls from the Valley, and the cows from the Forest together in one pasture on the Plains.

Using the countCattle function that you added to the Array prototype, build one line of code to alert the sum of:

1. The number of canyonCows with a "calf" type.
2. The number of valleyCows with a "bull" type.
3. The number of forestCows with a "cow" type.

The lists are provided here for your reference:

```
var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];
```

```
var valleyCows = [
  {name: "Danielle", type: "cow", hadCalf: null},
  {name: "Brittany", type: "cow", hadCalf: "Christina"},
  {name: "Jordan", type: "bull", hadCalf: null},
  {name: "Trevor", type: "bull", hadCalf: null},
  {name: "Christina", type: "calf", hadCalf: null},
  {name: "Lucas", type: "bull", hadCalf: null}
];
```

```
var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];
```

_Solution:_
```javascript
Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++;
    }
  }
  return numKind;
};

alert(canyonCows.countCattle("calf")
      + valleyCows.countCattle("bull")
      + forestCows.countCattle("cow")
     );

```

## 5.4 Prototypes III
_Task:_
To let mother cows rest, the cowboy-devs at the Plains of Prototypes have decided only to breed cows that have not given birth to any calves yet.

Now they want to add some functionality to the Object prototype itself. They’ve asked you to build two functions, in order:

1. First, build a function called noCalvesYet, which will be added to the Object prototype.
2. If the object type is a "cow" and also had no calves, the function should return a true value. Otherwise it should return a false value.
3. Then, build a function called countForBreeding, which will be added to the Array prototype.
4. In countForBreeding start by creating a numToBreed counter variable. The following steps refer to code in countForBreeding.
5. Use a for loop to loop through all of the array values. You can use this to refer to the current list.
6. Call noCalvesYet(). If it returns true for the current array value, then that means the cows are not moms, and we can increment the numToBreed counter variable.
7. After your loop, this function should return the numToBreed count, which represents how many non-mother cows are available within any array.

Here is a list of cattle for your reference:

```
var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];
```

_Solution:_
```javascript
Object.prototype.noCalvesYet = function () {
  
  if(this.type === "cow" && this.hadCalf === null){
  	return true;
  }else{
  	return false;
  }
};

Array.prototype.countForBreeding = function () {

  var numToBreed = 0;
  
  for(var i = 0; i < this.length; i++){  
    if( this[i].noCalvesYet() ){
    
      numToBreed++;
    }    
  }
  
  return numToBreed; 
  
};

```

## 5.5 Prototypes IV
_Task:_
It’s time to figure out which cows are in line for a first breeding. Your awesome prototype skills are making life easy on the cowboy-devs, and now they’ve asked you to use your new functions to find out how many cows from the lists below have not had calves yet.

1. Create a numPriorityCows variable, and then call your countForBreeding() function on each of the four array lists below to calculate the correct total.
2. Add an alert message with numPriorityCows in the following format:

Herd-merger has indicated \<number> cows of top breeding priority.

```
var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];
```

```
var valleyCows = [
  {name: "Danielle", type: "cow", hadCalf: null},
  {name: "Brittany", type: "cow", hadCalf: "Christina"},
  {name: "Jordan", type: "bull", hadCalf: null},
  {name: "Trevor", type: "bull", hadCalf: null},
  {name: "Christina", type: "calf", hadCalf: null},
  {name: "Lucas", type: "bull", hadCalf: null}
];
```

```
var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];
```

```
var badlandsCows = [
  {name: "Voldemort", type: "bull", hadCalf: null},
  {name: "Maleficent", type: "cow", hadCalf: null},
  {name: "Ursula", type: "cow", hadCalf: "Draco"},
  {name: "Draco", type: "calf", hadCalf: null},
  {name: "Joker", type: "bull", hadCalf: null},
  {name: "Chucky", type: "calf", hadCalf: null},
  {name: "Samara", type: "cow", hadCalf: "Chucky"}
];
```
    
_Solution:_
```javascript
Object.prototype.noCalvesYet = function() {
  if (this.type == "cow" && this.hadCalf == null) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.countForBreeding = function() {
  var numToBreed = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].noCalvesYet()) {
      numToBreed++;
    }
  }
  return numToBreed;
};

// set up your numPriorityCows variable
var numPriorityCows = canyonCows.countForBreeding() +
    valleyCows.countForBreeding() +
    forestCows.countForBreeding() +
    badlandsCows.countForBreeding();

// alert the correct message with the total
alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");
```

## 5.6 Inheritance & Constructors
Video Lecture

## 5.7 Creation with Prototypes I
_Task:_
The cowboy-devs at the Plains of Prototypes have a new robotic fence post system for their pastures. This system allows immediate shifting of the fence posts to make a forced migration of the cows into different, healthier pastures for grazing.

The generic fence post object is provided in the challenge editor, starting at coordinates (0,0), which is the location of the main ranch.

Each new fence post will travel, on its own, out to the x and y coordinates assigned to it when a new object is generated. There it will send out robotically guided connection ropes to other fence posts to enclose a pasture.

It takes two ropes for fence posts to be connected. Each one sends a rope to the other using the sendRopeTo method. Then all the connections will be automatically stored in the connectionsTo array. Examine the genericPost prototype closely to see how the system is designed to work.

To test the creation of these new fence post objects, the cowboy-devs have a few requirements:

1. Use Object.create and pass in genericPost as a prototype to create two new fence posts, and assign them to post1 and post2 variables.
2. Use dot notation to send the first fence post to (-2, 4) with standard property modification. Then set its postNum value to 1.
3. Use dot notation to send the second fence post to (5, 1) with standard property modification. Then set its postNum value to 2.
4. Use the sendRopeTo method to connect both of the fence posts together.
    
_Solution:_
```javascript
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

// create post1 and post2
var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);

// modify the post properties
post1.x = -2;
post1.y =4;
post1.postNum = 1;

post2.x = 5;
post2.y = 1;
post2.postNum = 2;

// connect the posts together
post1.sendRopeTo(post2);
post2.sendRopeTo(post1);
```

## 5.8 Creation with Prototypes II
_Task:_
It turns out that there are some fence posts that have special properties. Some have weathervanes, some have birdhouses, and some even have emergency lights. Here are the three new posts that we are going to work with:

```
x: 0,
y: -3,
postNum: 8,
connectionsTo: 10

x: 6,
y: 8,
postNum: 9,
connectionsTo: 10

x: -2,
y: 3,
postNum: 10,
connectionsTo: 8, 9
```

1. Use Object.create and pass in genericPost as a prototype to create the new fence posts listed above, and assign them to post8, post9, and post10 variables that match their respective postNum property.
2. After the posts have been created, use dot notation to assign all of the property values listed above. You can use x, y, and postNum properties to set the values for each post. Then use the sendRopeTo method to make the connections between posts.
3. Now we can add new properties for special fence posts. Posts with an even-numbered y coordinate have a birdhouse, and therefore have a numBirds property initially set to 0.
4. Posts that are connected to post9, but are not post9, have a property of weathervane initially set to "N".
5. Posts with an even-numbered postNum have emergency lights, and therefore have a lightsOn property initially set to false.
    
_Solution:_
```javascript
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

// create post8, post9, and post10
var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);

// assign property values and make connections
post8.x = 0;
post8.y = -3;
post8.postNum = 8;
post8.sendRopeTo(post10);
post8.lightsOn = false;

post9.x = 6;
post9.y = 8;
post9.postNum = 9;
post9.sendRopeTo(post10);
post9.numBirds = 0;

post10.x = -2;
post10.y = 3;
post10.postNum = 10;
post10.sendRopeTo(post8);
post10.sendRopeTo(post9);
post10.weathervane = "N";
post10.lightsOn = false;
```

## 5.9 Constructor I
_Task:_
Now the cowboy-devs are so excited about their robotic fence posts that they’ve decided to make a constructor function for fence posts, to which they can pass a few parameters and get back a new instance of a post.

Your job is to take the existing genericPost and rebuild all of its properties inside a single Fencepost constructor.

```
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

1. Create a Fencepost function and pass in parameters for x, y, and postNum.
2. Inside the function, use this to assign those parameters to property names that shadow the ones in genericPost.
3. Rather than passing in connectionsTo as a parameter, initialize that property to an empty array value inside the function.
4. Then, add sendRopeTo as a method inside the Fencepost function.
5. Since the function already expects an array to be present, we no longer need a conditional to check for an undefined value. Remove the conditional statements and modify the sendRopeTo method so that it takes in connectedPost as a parameter, and then pushes connectedPost onto the connectionsTo array.
    
_Solution:_
```javascript
var Fencepost = function(x, y, postNum){

  this.x = x;
  this.y = y;
  this.postNum = postNum;
  
  this.connectionsTo = [];
  
  this.sendRopeTo = function(connectedPost) {
    
      this.connectionTo.push(connectedPost);      
    };  
};
```

## 5.10 Constructor I
_Task:_
Now that we’ve got a Fencepost constructor function, let’s create some posts! The cowboy-devs need three new posts for the Plains:

```
x: -3,
y: 4,
postNum: 18

x: 5,
y: -1,
postNum: 19

x: -2,
y: 10,
postNum: 20
```

Use your Fencepost constructor function to create these new posts. Name each of your posts post\<number> with the correct number from the postNum property.

Then, connect them with the sendRopeTo function using the following criteria, and remember that one connection requires ropes to be sent from both posts:

1. If two posts both have even-numbered y coordinates, they should be connected.
2. If two posts both have odd-numbered x coordinates, they should be connected.
    
_Solution:_
```javascript
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
}

// create post18, post19, and post20
var post18 = new Fencepost( -3, 4, 18);
var post19 = new Fencepost( 5, -1, 19);
var post20 = new Fencepost( -2, 10, 20);

// establish post connections
post18.sendRopeTo(post20);
post20.sendRopeTo(post18);

post18.sendRopeTo(post19);
post19.sendRopeTo(post18);
```

## 5.11 Constructor II
_Task:_
Now that there are so many fence posts everywhere, the cowboy-devs have noticed a significant drain on their memory resources. They’d like you to take a look around the Fencepost constructor and see if there’s anything you can add to a prototype, so that every fence post doesn’t have to carry around everything that it could get from just one place.

The current Fencepost constructor is provided in the challenge editor, with some additions that the cowboy-devs have made to improve functionality of the fence post objects.

Your job is to identify the portions of the constructor that should be available to all fence posts, and put those in a prototype for fence posts. Your answer should include both the modified constructor as well as the newly designed prototype for that constructor.
    
_Solution:_
```javascript
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];  
}

Fencepost.prototype = {
  
  sendRopeTo : function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  
  removeRope : function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  
	movePost : function(x, y) {
    this.x = x;
    this.y = y;
  }
};

```

## 5.12 Overriding Prototypal Methods
Video Lecture

## 5.13 Overriding Prototypal Methods I
_Task:_
The cowboy-devs aren’t having much luck with the native valueOf() method provided by the Object prototype. Currently, they get a long list of properties, but what they’d really like to know is how far the distance is from a post (x, y) to the ranch (0,0).

Your job is to override the valueOf() method using the Fencepost prototype to return the exact distance that a post is from the ranch. Here is the standard algebraic distance formula:

    square root of [ (x1 - x2)^2  +  (y1- y2)^2 ]

This formula includes points (x1, y1) for the post, and (x2, y2) for the ranch. Since the ranch’s coordinates are always (0,0), you should be able to shorten this procedure considerably. In other words, you shouldn’t need any subtraction at all because of the zero values for the ranch coordinates.

In order to accomplish this, you can use the sqrt() method of JavaScript’s built-in Math object! You can place any numerical expression as the parameter for the Math.sqrt() method, and it will return the square root after evaluating the expression. Use this method carefully in your override.

```
Math.sqrt(49);        // 7
Math.sqrt(45 + 55);   // 10
Math.sqrt(30 / 6);    // 2.23606797749979
```

_Solution:_
```javascript
Fencepost.prototype.valueOf = function (){

  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};
```

## 5.14 Overriding Prototypal Methods I
_Task:_
The cowboy-devs have asked for an improved toString method for their fence posts. Here is an example of the string message they want to generate:

```
Fence post #10:
Connected to posts:
11
12
13
```

Distance from ranch: 5 yards

1. Begin by creating a function to override the toString method on the Fencepost prototype. The function won’t need to take any parameters.
2. Inside the function, initialize a list variable to an empty string. We can use list to keep track of connected posts.
3. Loop through the connectionsTo array with a for loop.
4. Inside your for loop, concatenate every postNum in the connectionsTo array on to the list string.
5. Lastly, return a string message in the format above with the correct postNum, connections list, and distance value. The constructor and all of your previous prototype additions are provided for you as a reference for property names and procedures.
    
_Solution:_
```javascript

```
