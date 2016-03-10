# Level 4 - Objects
Create, fill, and manipulate the generic JavaScript object literal.

## 4.1 Objects
Video Lecture

## 4.2 Building Objects I 
_Task:_
The developers at the Ocean of Objects need help creating data structures for the three different ranger vehicles they use to battle pirates on the Ocean.

Here are the vehicles listed in order of type, passenger capacity, and storedAt location.

1. Motorboat, 6, Ammunition Depot
2. Jet Ski, 1, Reef Dock
3. Submarine, 8, Underwater Outpost

In the order listed, build three object literals with the names vehicle1, vehicle2, and vehicle3.

Within each object literal, create properties for type, capacity, and storedAt, and use the same order provided above. Make sure to store numbers as number values, and text as string values.

_Solution:_
```javascript
var vehicle1 = {
  type: "Motorboat",
  capacity: 6, 
  storedAt: "Ammunition Depot"
};

var vehicle2 = {
  type: "Jet Ski",
  capacity: 1, 
  storedAt: "Reef Dock"
};

var vehicle3 = {
  type: "Submarine",
  capacity: 8, 
  storedAt: "Underwater Post"
};
```

## 4.3 Accessing Objects I 
_Task:_
One of the ranger-devs wants to check how many rangers can go to battle the pirates using the Motorboat vehicle.

Using one line of code, access the correct property value (with dot notation), and log the amount of rangers that can join the fun to the console.

_Solution:_
```javascript
console.log(vehicle1.capacity);
```

## 4.4 Accessing Objects II 
_Task:_
Excellent, the vehicle data structures are ready!

Now the ranger-devs have asked you to build a findVehicle function that will accept a vehicle name and list of vehicle objects, and return the current storage location of the requested vehicle.

1. Put all the vehicle objects in a vehicles array. Use the array literal syntax and pass in each of the vehicle variable names.
2. Build a function expression assigned to a findVehicle variable, which accepts name and list parameters for the name of the individual vehicle sought and the full array of vehicles.
3. Inside the findVehicle function, use a for loop to loop through all of the vehicles.
4. if the type of the current object in the list matches the name parameter, then return the current object’s storedAt location.
5. Call the findVehicle function and pass in the correct arguments to find the storage location of the "Submarine".

_Solution:_
```javascript
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// create vehicles array
var vehicles = [vehicle1, vehicle2, vehicle3];

// build findVehicle function expression
var findVehicle = function (name, list){
  
  for(var i = 0; i < list.length; i++){
  
    if(list[i].type === name){
    	return list[i].storedAt;    
    }  
  }
};

// call findVehicle
findVehicle("Submarine", vehicles);
```

## 4.5 Building Objects II
_Task:_
From the reports of the pirates near Lighthouse Rock, the ranger-devs have determined that the opposition has seriously stepped up their game.

They need to add some important information and power upgrades to their existing vehicles. New properties will be added for weapon (which gets a String) and submersible (which gets a Boolean).

Use dot notation to make the following changes and additions, in order, to the vehicle objects:

1. The Motorboat will have 4 seats added to its capacity.
2. The Jet Ski is not submersible.
3. The Submarine will acquire "Torpedoes".
4. The Motorboat is not submersible.
5. The Jet Ski will acquire "Lasers".
6. The Submarine will add bunk beds, doubling its capacity.
7. The Motorboat will acquire a "Rear-Mounted Slingshot".
8. The Submarine is submersible.

_Solution:_
```javascript
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// add and adjust object properties here
vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;
```

## 4.6 Moar Power!! Flight Pirates!! 
_Task:_
The ranger-devs are happy with the modifications to the vehicles. They need one last modification, though, so that they can know what sort of firepower they are able to use on each vehicle.

Add a property called # of weapons to each vehicle using bracket notation. Then, consult the current objects and properties to assign the following values to the correct objects:

1. There are 8 "Torpedoes".
2. There are 4 "Lasers".
3. There is 1 "Rear-Mounted Slingshot".

_Solution:_
```javascript
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

// add properties and assign values
vehicle1["# of weapons"] = 1;
vehicle2["# of weapons"] = 4;
vehicle3["# of weapons"] = 8;
```

## 4.7 Blinders On!
_Task:_
The ranger-devs want to upgrade Lighthouse Rock with new super-blinding light bulbs and remove the old existing bulbs.

The new superBlinders array and lighthouseRock object are provided. Each index of the superBlinders array contains a bulb name and its wattage within a sub-array.

1. Completely remove the existing bulbs property from the lighthouseRock object.
2. Add a weaponBulbs property to lighthouseRock and assign the superBlinders array as a value.
3. Log the name value of the bulb with the highest wattage to the console. Use the correct index from the weaponBulbs property of the lighthouseRock object to access the correct name value.

Note: You do not need to change the provided code for the superBlinders array or the lighthouseRock object.

_Solution:_
```javascript
var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthouseRock = {
  gateClosed: true,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

// remove bulbs property from lighthouseRock
delete lighthouseRock.bulbs;

// add weaponBulbs property to lighthouseRock
lighthouseRock.weaponBulbs = superBlinders;

// log the correct weaponBulbs array value to the console
console.log(lighthouseRock.weaponBulbs\[2][0]);
```

## 4.8 To the Lighthouse, Quick
_Task:_
PIRATES AHOY! It’s time for the ranger-devs to get over to the Lighthouse and throw down! Our lighthouseRock object now has a new numRangers property to track how many rangers are fighting at the Lighthouse.

Your goal is to complete the addRanger function that takes in location, name, skillz, and station as parameters. Then we can pass in our lighthouseRock object as the location and start to add rangers.

1. As rangers are added, increment the number of rangers at the location using its numRangers property.
2. Add a property to the location using bracket notation that will be used to hold a ranger object. Specifically, each property will be named ranger1, ranger2, ranger3, etc. This will require string concatenation and the current value of the numRangers property.
3. Now that you have your ranger`<number>` property, assign an object literal to it that contains properties for name, skillz, and station. Then assign values to those properties using the parameters that we pass in.
4. Call your addRanger function three times with the appropriate arguments to add the following rangers, in order, to the location:

```
name: "Nick Walsh", skillz: "magnification burn", station: 2
name: "Drew Barontini", skillz: "uppercut launch", station: 3
name: "Christine Wong", skillz: "bomb defusing", station: 1
```

_Solution:_
```javascript
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

function addRanger(location, name, skillz, station) {
  location.numRangers++;
  location["ranger" + location.numRangers] = {
    name: name,
    skillz: skillz,
    station: station
  };
}

addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);
```

## 4.9 Man your Bulb Stations!
_Task:_
We need to assign each of the ranger-devs to a super-blinding light bulb based on their station number. So we’re building a function that creates an alert message for the ranger-devs in the following format:

    Avast, me hearties!
    There be Pirates nearby! Stations!
    <name>, man the <superblinder>!
    <name>, man the <superblinder>!
    <name>, man the <superblinder>!

We’ve created a dontPanic function for you that already contains the alert message. Your job is to finish building the list string:

1. Create a for loop to loop through all of the rangers at the location, using the numRangers property to keep track.
2. Inside the loop, begin by using the correct property to append the name of the current ranger to the list.
3. Also, concatenate the text between the ranger name and the superblinder so that it matches the format above.
4. Lastly, add the name of the correct super-blinding light bulb from the weaponBulbs array to the list. In order to retrieve the name of the correct bulb, you’ll need to use the ranger’s station number.

_Solution:_
```javascript
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list
  for (var i = 1; i <= location.numRangers; i++){
    var ranger = location["ranger"+i];
    var name = ranger.name;
    var superblinder = location.weaponBulbs[ranger.station-1][0];
    list += name + ", man the " + superblinder + "!\n";
  }
  alert(list);
}

dontPanic(lighthouseRock);
```

## 4.10 Object Functionality
Video Lecture

## 4.11 Functions as Properties
_Task:_
To improve organization and memory efficiency, the ranger-devs have asked you to make all functions that add objects to objects part of the destination location instead of being present in the global scope.

1. Take the addRanger function from below and add it directly within the lighthouseRock object. The property name should still be addRanger.
2. Refactor the addRanger method to use this instead of location.

```javascript
function addRanger(location, name, skillz, station) {
  location.numRangers++;
  location["ranger" + location.numRangers] = {
    name: name,
    skillz: skillz,
    station: station
  };
}
```
_Solution:_
```javascript
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  
  addRanger: function (name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};
```

## 4.12 Calling Function Properties I
_Task:_
The pirates are really rough today! Add a new ranger to the lighthouseRock object by calling your addRanger method with the following information:

```
name: "Jordan Wade"
skillz: "dual-wield hand crossbow"
station: 4
```

_Solution:_
```javascript
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function (name, skillz, station){
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// call the addRanger method on lighthouseRock
lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4);
```

## 4.13 Functions as Properties II
_Task:_
It looks like ranger4 has a station assignment at Lighthouse Rock, but now there aren’t enough super-blinding bulbs for everyone.

The ranger-devs want you to build a new function property for lighthouseRock that adds a new super-blinding bulb to the weaponBulbs array, complete with a name and insane wattage.

1. Create a new addBulb function property for the lighthouseRock object, but don’t add it directly inside the object. Instead, add it on the outside of the lighthouseRock object.
2. Pass in name and wattage as parameters.
3. Push any new bulb to the weaponBulbs array. Notice how the data is arranged and indexed in the superBlinders array. That means we’re going to need to push a sub-array with the name and wattage.

_Solution:_
```javascript
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  addRanger: function(name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// create addBulb function property here
lighthouseRock.addBulb = function(name, wattage){
	this.weaponBulbs.push([name, wattage]);
};
```
## 4.14 Calling Function Properties II
_Task:_
Calling Function Properties II

A new shipment of super-blinding bulbs just came in!

Use the addBulb function to add these three new bulbs to the list of super-blinders available at Lighthouse Rock.

```
name: "Blasterbright"
wattage: 5000

name: "Sight Slayer"
wattage: 1800

name: "Burner of Souls"
wattage: 7500
```

_Solution:_
```javascript
lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
};

// call addBulb and pass in the correct arguments
lighthouseRock.addBulb("Blasterbright", 5000); 
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);
```
## 4.15 Relieved of Duty!
_Task:_
Vehicle objects now contain objects that represent ranger-devs. We want to keep track of which ranger-devs are assigned to patrol duty on specific vehicles. The vehicle3 object is provided in the challenge editor as an example.

We need to get the offDuty rangers out of the vehicle while holding on to their objects for further use, as well as renumbering the rangers who should remain onDuty in the vehicle.

1. Build a relieveDuty function that accepts a vehicle object and a day of the week as parameters.

2. Use a for loop along with the numRangers property to search through all of the ranger objects contained within the vehicle object.

3. Sort all ranger objects into offDuty and onDuty arrays based on their dayOff property. The offDuty array will be returned from the function. The onDuty array will contain remaining rangers that need to be renumbered.

4. Adjust the numRangers property by subtracting the number of offDuty rangers.

5. Shift all rangers from the onDuty array back to the vehicle object. Their property names should be rebuilt with ranger numbers starting from 1.

6. Lastly, call the relieveDuty function and pass in vehicle3 and "Friday". The resulting array of objects should be stored in a variable called offToday.

Use the hints as you get stuck!

_Solution:_
```javascript
var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: {name: "Bijan Boustani", skillz: "Working", dayOff: "Saturday"},
  ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

var relieveDuty = function ( vehicle, day ){
	var offDuty = [];
  var onDuty = [];
  
  for(var i=1; i <= vehicle.numRangers; i++){       
    // check if ranger's dayOff = day
    if (vehicle["ranger"+i].dayOff === day) {
      offDuty.push(vehicle["ranger"+i]);      
    } else{
    	onDuty.push(vehicle["ranger"+i]);
    }  
    
    delete vehicle["ranger"+i];
  }
  // adjust the numRangers property
  vehicle.numRangers -= offDuty.length;
  
  // shift all onDuty rangers to vehicle object
  for (var j = 1; j <= vehicle.numRangers; j++) {
    vehicle["ranger"+j] = onDuty.shift();
  }
  
  return offDuty;
}; 

relieveDuty(vehicle3, "Friday");
```

## 4.16 Using Objects
Video Lecture

## 4.17 Enumeration I
_Task:_
The devs at Lighthouse Rock have received a shipment of spearguns for use in the battle against the pirates, and they need to know which spearguns have arrived.

1. Build a function called listGuns that accepts a guns object as a parameter.
2. Inside that function, use a for in loop to loop through each speargun in the guns object.
3. Log each speargun in to the console.
4. After your function is built, call listGuns and pass in the rockSpearguns object.

_Solution:_
```javascript
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// build listGuns
var listGuns = function ( guns ) {
	
  for ( var speargun in guns ){
  	console.log(speargun);  
  }

};

// call listGuns and pass in rockSpearguns
listGuns(rockSpearguns);
```

## 4.18 Enumeration II
_Task:_
We’ve got our list of spearguns, but the problem is that the ranger-devs need to know what heft property each speargun has in order to know which one is right for their individual aiming styles.

Modify the log message in your listGuns function so that it follows the format below. You’ll need to use bracket notation strategically to access the heft property for the current speargun in guns.

```
Behold! `<speargun name>`, with `<heft style>` heft!
Note: You only need to change the console message for this challenge, and you do not need to change any of the other provided code.
```

_Solution:_
```javascript
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns(guns) {
  for (var speargun in guns) {
    // modify the log message here
    console.log("Behold! " + speargun +", with " + guns\[speargun]["heft"] + " heft!");
  }
}

listGuns(rockSpearguns);

```

## 4.19 Enumeration III
_Task:_
The ranger-devs liked your listGuns function so much that they want it added to the rockSpearguns object.

1. Rather than moving it directly inside the object, use bracket notation to convert the function into a "listGuns" property on the rockSpearguns object.
2. Since the rockSpearguns object will now contain more than just spearguns, change all instances of your enumeration reference word to property instead of speargun.
3. And since we’re working from within the function now, we no longer need to pass in guns as a parameter. Remove it so that we’re not passing any parameters, and then replace any other instance of guns with this.
4. In order to ensure that only spearguns get printed in the console message, add a conditional inside the for loop to make sure that the message only gets logged if this\[property]["heft"] does not equal an undefined value.
5. Lastly, change the function call at the bottom to use bracket notation along with parentheses to call the function on the rockSpearguns object.

Note: Use bracket notation throughout this challenge. No dot notation allowed!

_Solution:_
```javascript
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// convert listGuns function
rockSpearguns["listGuns"] = function () {
  for (var property in this) {
    if (this[property]["heft"] !== undefined){
    	console.log("Behold! " + property + ", with " +
                	this[property]["heft"] + " heft!");
    }
  }
};

// call listGuns using bracket notation on rockSpearguns
rockSpearguns\["listGuns"]();
```

