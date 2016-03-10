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

First, build a function called noCalvesYet, which will be added to the Object prototype.
If the object type is a "cow" and also had no calves, the function should return a true value. Otherwise it should return a false value.
Then, build a function called countForBreeding, which will be added to the Array prototype.
In countForBreeding start by creating a numToBreed counter variable. The following steps refer to code in countForBreeding.
Use a for loop to loop through all of the array values. You can use this to refer to the current list.
Call noCalvesYet(). If it returns true for the current array value, then that means the cows are not moms, and we can increment the numToBreed counter variable.
After your loop, this function should return the numToBreed count, which represents how many non-mother cows are available within any array.
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

    
_Solution:_
```javascript

```

## 5.6 Inheritance & Constructors
Video Lecture

## 5.7 Creation with Prototypes I
_Task:_

    
_Solution:_
```javascript

```

## 5.8 Creation with Prototypes II
_Task:_

    
_Solution:_
```javascript

```

## 5.9 Constructor I
_Task:_

    
_Solution:_
```javascript

```

## 5.10 Constructor I
_Task:_

    
_Solution:_
```javascript

```

## 5.11 Constructor II
_Task:_

    
_Solution:_
```javascript

```

## 5.12 Overriding Prototypal Methods
Video Lecture

## 5.13 Overriding Prototypal Methods I
_Task:_

    
_Solution:_
```javascript

```

## 5.14 Overriding Prototypal Methods I
_Task:_

    
_Solution:_
```javascript

```
