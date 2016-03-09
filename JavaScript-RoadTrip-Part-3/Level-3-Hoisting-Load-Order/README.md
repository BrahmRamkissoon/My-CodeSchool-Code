# Level 3 - Hoisting Load Order
Build an awareness of the pitfalls of load order within a scope.

## 3.1 Hoisting
Video Lecture

## 3.2 Analyzing Load Order I
_Task:_
Below is a function with multiple functions inside. Using your new knowledge of hoisting, analyze the load order of the thisIsWeird function. Your job is to find out which function gets returned.

If none of the functions get returned, log an "ERROR" string to the console.
If an undefined value gets returned, log an "undefined" string to the console.
If one of the functions gets returned, log a string to the console with the name of the “unused” variable from within the function that is getting returned. e.g., "unused1", "unused2" or "unused3"

```javascript
function thisIsWeird() {
  function secret() {
    var unused3;
  }
  var result;
  function secret() {
    var unused1;
  }
  // The following line of code assigns a
  // secret function to the variable result.
  result = secret;
  function secret() {
    var unused2;
  }
  return result;
}
```

_Solution:_
```javascript
console.log("unused2");
```

## 3.3 Analyzing Load Order II
_Task:_
As you progress through The Hoisting Hills, you reach a thin stone bridge where a cluster of Wizard-Devs declare that YOU SHALL NOT PASS.

In order to continue, you must rewrite theBridgeOfHoistingDoom. Reorder the statements as they would be interpreted by a JavaScript interpreter, with the following rules for evaluation:

1. For all variable declarations, put the corresponding declarations at the top of the function. Assign them a value of undefined and maintain their order.
2. Now that variable declarations have been placed at the top, remove the original declarations, but leave any associated assignments.
3. Then, hoist all function declarations to immediately after your variable declarations, maintaining their order as well.
4. Function declarations that end up being overwritten by other functions with the same name should be removed from their current place in the load order.
5. Any function declarations that end up replacing other functions, however, will not take the place of the previous version, and instead will just fall into the load order behind existing functions.

Remove any unreachable statements after the first return statement.

_Solution:_
```javascript
function theBridgeOfHoistingDoom() {
  var ring = undefined;
  var power = undefined;
  function balrog() {
    return "whip";
  }
  function wizard() {
    return "white";
  }
  function elf() {
    return "immortal";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
}
```

## 3.4 Analyzing Load Order III
_Task:_
“THAT WAS TOO EASY AND YOU STILL SHALL NOT PASS. MAYBE AFTER THIS ONE.” - The Wizard-Devs of the Hoisting Hills

The Wizard-Devs aren’t used to such Hoisting mastery. They’ve concocted a new, tougher hoisting analysis that you’ll need to prepare before you can cross their bridge. Here are the rules, with some necessary extras:

1. For all variable declarations, put the corresponding declarations at the top of the function. Assign them a value of undefined and maintain their order.
2. Now that variable declarations have been placed at the top, remove the original declarations, but leave any associated assignments.
3. Then, hoist all function declarations to immediately after your variable declarations, maintaining their order as well.
4. Any function expression assignment is treated here as executable code, and does not change the load order.
5. Remove any unreachable statements after the first return statement.

_Solution:_
```javascript
function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  function fellowship() {
    return "friends";
  }
  sword = "sting";
  dwarf = function () {
    return "axe";
  };
  fall = "Fly you fools!";
  fellowship = function () {
    return "broken";
  };
  ring();
  return sword;
}
```

## 3.5 Analyzing Load Order IV
_Task:_
To complete your examination, the Wizard-Devs have asked you to log out the actual result of calling the theBridgeOfHoistingDoom() function. Trace the executable code and log out the appropriate string.

- If the result is undefined, log an "undefined" string to the console.
- If the function is unable to complete, log an "ERROR" string to the console.

```javascript
function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  function fellowship() {
    return "friends";
  }
  sword = "sting";
  dwarf = function() {
    return "axe";
  }
  fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  }
  ring();
  return sword;
}
```

_Solution:_
```javascript
console.log("ERROR");
```