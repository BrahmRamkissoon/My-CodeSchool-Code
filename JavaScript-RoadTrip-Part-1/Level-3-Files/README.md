# Level 3 - Files
Create JS files and source them within HTML code.

## 3.1 Script Tags
Video Lecture

## 3.2 The Script Tag in HTML
_Task:_
In the index.html file, add a `<script>` tag inside the `<head>` section to tell our HTML file that we want to execute some JavaScript code.

Call your JavaScript file oldFaithful.js. Assume that your .js file is in the same folder as your index.html file.

_Solution:_
```html
 <html>
  <head>
      <script src="oldFaithful.js"></script>
  </head>
  <body>
    <h1>Welcome to the JavaScript Express!</h1>
  </body>
</html>
```

## 3.3 Using File Paths to Reach a Source File
_Task:_
In the index.html file, add a `<script>` tag inside the `<head>` section to tell our HTML file that we want to execute some JavaScript code.

Call your JavaScript file oldFaithful.js. Here, the files are organized according to a file system structure, and your path is relative to the location of index.html.

```
root/
  sitepages/
    index.html
  scripts/
    yellowstone/
      oldFaithful.js
```

_Solution:_
```html
<html>
  <head>
      <script src="../scripts/yellowstone/oldFaithful.js"></script>
  </head>
  <body>
    <h1>Welcome to the JavaScript Express!</h1>
  </body>
</html>
```

## 3.4 Down to the Files
Video Lecture

## 3.5 Building Variables in Files
_Task:_
In the oldFaithful.js file:

- Build a variable for daily-average eruption height called avgHeight and set it to 145 feet.
- Build a variable for today’s number of eruptions called numEruptions and set it to 4 eruptions.

_Solution:_
```javascript
var avgHeight = 145;
var numEruptions = 4;
```

## 3.6 Printing to the Console
_Task:_
In the oldFaithful.js file, write a statement that prints the following string to the browser console using string concatenation and the existing variable to produce the correct format:

    Average eruption height today: 145

_Solution:_
```javascript
var avgHeight = 145;
var numEruptions = 4;
console.log("Average eruption height today: " + avgHeight); 
```

## 3.7 Separating Printout Statements
_Task:_
Now, let’s say that Old Faithful’s eruptions are kept as separate variables, as you can see in the oldFaithful.js file.

We’ve given you the avg variable for the average. Use the existing variables for eruption1, eruption2, eruption3, and numEruptions to calculate the average and assign it to the avg variable.

Then, print the message below to the console using a single console.log() statement and the avg variable.

    Average eruption height today: <average value goes here>

< and > indicate where our variable’s actual value should be placed. There should be no < > in your output, however. Be attentive to spacing as well.

_Solution:_
```javascript
var eruption1 = 112;
var eruption2 = 148;
var eruption3 = 160;
var numEruptions = 3;
var avg = (eruption1 + eruption2 + eruption3) / numEruptions;

console.log("Average eruption height today: " + avg);
```