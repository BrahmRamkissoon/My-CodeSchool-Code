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


_Solution:_
```javascript

```

## 2.6 Using a Closure I
_Task:_


_Solution:_
```javascript

```

## 2.7 Building a Closure II
_Task:_


_Solution:_
```javascript

```

## 2.8 Using a Closure II
_Task:_


_Solution:_
```javascript

```
## 2.9 Modifying Bound Values After Closure
Video Lecture

## 2.10 Changing a Bound Value I
_Task:_


_Solution:_
```javascript

```
## 2.11 Highway to the Danger Zones
_Task:_


_Solution:_
```javascript

```
## 2.12 Just Keep Track of It All!
_Task:_


_Solution:_
```javascript

```
## 2.13 Dangers at the Moment of Closure
Video Lecture

## 2.14 Final Closed Values I
_Task:_


_Solution:_
```javascript

```
## 2.15 Final Closed Values II
_Task:_


_Solution:_
```javascript

```

