# `JavaScript Mini Series` by [ThatGuyJamal](https://www.youtube.com/channel/UCVOQobByo_2WISQf2037eXQ)

Watch the full video series [here](https://www.youtube.com/playlist?list=PLfjHxdSdfKthUd5SEJr2e86qRpRSzVOEK)!

## Introduction
Who is this for? People who already know to program and want a simple intro to javascript. 
We will not go over basic algorithms.

Why Javascript? - Used in web development (HTML, CSS) and it enables programmable website behaviors. 
You can also use the nodejs or Deno to technologies to extend javascript and use it on the server 
side independently from HTML and CSS.

Although the most traditional way of learning javascript is along with HTML, 
I will focus on the core aspects of javascript itself. 
Such as syntax, functions, classes, and more. We will not go over how to manipulate HTML in this tutorial. 

Setting up our javascript environment - [vscode](https://code.visualstudio.com/), [Nodejs](https://nodejs.org/en/), Terminal

After installing nodejs run `npm --version` into your terminal to see if nodejs is installed. Then open a folder and create an index.js file. Next, run `npm init -y`. Now you can start programming in javascript without the need for HTML!

# Part 1 - Introduction

## Console
Output in javascript. This can be done in many different ways. 
The most common is to use the console dot log method. 
```js
console.log("hey!")
```
This will call the internal console class in the node and render any output we want.
We can also use other things such as window alerts or document write in HTML. 

## Variables
Variables are containers for storing data. Variable Declaration in javascript is used by 
writing the const & let keywords.
```js
let | var | const
```
var is also used but you can consider it deprecated and not
recommended for use (normally). Statements can be comprised of operators, expressions, keywords, and comments.  
```js
let name = "Jamal";
```
All JavaScript identifiers are case-sensitive. This means if you redeclare a variable that already has a value, 
its value may change or you will get an error for attempting to alter a constant type variable. 
```js
let x // undefined
x = 10 
console.log(x) // 10
x = 4 
console.log(x) // 4
```
```js
const x = 20
console.log(x) // 20
x = 3 // TypeError assignment to constant variable
```
## Semi-colons
Semi-colons in javascript are not required, though many developers think they are still useful. 
It really just comes down to personal opinion. However, there are some instances where they can affect the code written. 
For example you can declare multiple variables in one line using:
```js
let x = 5; b = 4; c = 3;
```
JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

## KeyWords
In JavaScript statements often start with a keyword to identify the JavaScript action to be performed. 
Some commend reserved words are var, let, const, if, switch, for, function, return, try... 
you can read a [full list]( https://www.w3schools.com/js/js_reserved.asp) here.

## Numbers
Numbers in javascript with or without decimals. Strings can be written with double or single quotes. 
Javascript can use arithmetic operators such as ( + - * / ) to compute values as well. 
These can be very useful for sorting through numerical data. An expression is a combination of values, variables, 
and operators, which computes a value.
```js
5 * 10 or let x = 5 then x * 10
```

## Comments
Comments in javascript can be used by writing double slashes // or between /* and */ is treated as a comment. 
Comments are ignored, and will not be executed.
```js
// this is a comment
/*
This is also a comment
*/
```

## Data Types
Data types in js. String, Number, undefined, null, Boolean, Array, Object (tricky), Empty value( empty string is not undefined),  You can use the typeof operator to find the type of a variable.
```js
// String
let string = "String" or 'string' or `string`

// Number
let number = 1.2 or 1

// Boolean 
let boolean = true

// Array 
let arr = [1, 2, 3]

// Undefined 
let x

// Object
let school = {
  classroom: {
    num: 9303
    students: 30
    grade: 4
  },
  school_id: 10902
}

// Empty value
let ev = ""

// typeof 
console.log(typeof(100)) // number
```
# Part 2 - More JavaScript
Welcome back! To the Javascript mini-course. In the last video, we went over the basics of the js syntax, and in this video we will be going more in-depth about how js works, using functions, objects, conditions,  classes, maps, and sets.

## Functions
A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it). 
```js
function add() {...}
```
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). The code to be executed, by the function, is placed inside curly brackets. Function parameters are listed inside the parentheses () in the function definition. Function arguments are the values received by the function when it is invoked.
```js
function add(a, b) {}
```
When JavaScript reaches a return statement, the function will stop executing.
```js
function add(a, b) {
  return a + b
}
```
You can reuse code: Define the code once, and use it many times. You can use the same code many times with different arguments, to produce different results. 

## Objects
Objects are variables too. But objects can contain many values.
```js
const students = {
class_size: 38,
class_number: 13
}
```
The values are written as name:value pairs (name and value separated by a colon). You can access object properties in two ways: objectName.propertyName or objectName["propertyName"].
```js
students.class_number // 38
students["class_number"] // 38
```
Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.
```js
const mathObject = {
// You can access the add function inside of this object. You will still have to call and pass arguments like normal.
add: function(a, b) {
  return a + b
  }
}
```

## This
 In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called). 
```js
const person = {
  firstName: "Kid",
  lastName : "DJ",
  id       : 2223,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
The "this" keyword refers to different objects depending on how it is used: In an object method, this refers to the object. Alone, this refers to the global object. In a function, this refers to the global object. In a function, in strict mode, this is undefined. In an event, this refers to the element that received the event. Note this is not a variable. It is a keyword. You cannot change the value of this. In a function definition, this refers to the "owner" of the function.

## Strings
JavaScript strings are for storing and manipulating text. A JavaScript string is zero or more characters written inside quotes. 
```js
let text = "Mat";
```
To find the length of a string, use the built-in length property.
```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
let length = text.length; 
```
slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: the start position, and the end position (end not included).
```js
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
```
The replace() method replaces a specified value with another value in a string.
```js
let text = "Please subscribe to ThatGuyFoo!";
let newText = text.replace("ThatGuyFoo", "ThatGuyJamal");
```
Notes: The replace() method does not change the string it is called on. The replace() method returns a new string. 
The replace() method replaces only the first match If you want to replace all matches, use a regular 
expression with the /g flag set. 
```js
let newText = text.replace(/ThatGuyFoo/g, "ThatGuyJamal");
```
There is way more to learn about Strings in js, learn more [hear](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Numbers
JavaScript has only one type of number. Numbers can be written with or without decimals. Extra-large or extra small numbers can be written with scientific (exponent) notation.
```js
let x = 123e5;
```
Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point, etc. JavaScript numbers are always stored as double-precision floating-point numbers, following the international IEEE 754 standard. Integers (numbers without a period or exponent notation) are accurate up to 15 digits. NaN is a JavaScript reserved word indicating that a number is not a legal number. Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number).
```js
let x = 100 / "Apple";
```
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

## Arrays
An array is a special variable, which can hold more than one value.
```js
const students = ["nollman", "mat", "jeff"];
```
Why use an array? An array can hold many values under a single name, and you can access the values by referring to an index number. Using an array literal is the easiest way to create a JavaScript Array. 
```js
const array_name = [item1, item2, ...];
```
You access an array element by referring to the index number. 
```js
students[0] // nollman
```
To change an element we can do students[0] = "sam". With JavaScript, the full array can be accessed by referring to the array name. Arrays are a special type of object. The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays. Arrays use numbers to access their "elements". To view the length of an array we can use the .length property. 
```js
students.length // 3
```
To get the last element we can do:
```js
const lastStudent = students[students.length - 1];
```
The easiest way to add a new element to an array is using the push() method.
```js
students.push("matty")
```
When to Use Arrays vs Objects? o keep it simple - You should use objects when you want the element names to be strings (text). - You should use arrays when you want the element names to be numbers. How do I know if a variable is an array? We can use the isArray property.
```js
Array.isArray(students)
```
This will return a boolean value for us. We could also use the instanceof operator if an object is created by a given constructor.
```js
students instanceof Array
```
Arrays are very complex in javascript and powerful, however, we will stop here for now. you can learn more about them in your own research. 

## Booleans
A JavaScript Boolean represents one of two values: true or false. You can use the Boolean() function to find out if an expression (or a variable) is true: Boolean(10 > 9). Comparisons and Conditions: == equal to, > greater than, < less than. Keep in mind that Everything With a "Value" is True. Everything Without a "Value" is False. This means you can check something's existence in your code just by checking if it has a value.
```js
let x = 1; if (x) {...}
```
The Boolean value of undefined is false.

## Comparison / Logical operators
![image](https://user-images.githubusercontent.com/43446907/166632584-9f537a68-010f-4190-800c-4ee37b42e7d2.png)

Comparison operators can be used in conditional statements to compare values and take action depending on the result.
```js
if (age < 18) text = "Too young to buy alcohol";
```
Logical operators are used to determining the logic between variables or values.

![image](https://user-images.githubusercontent.com/43446907/166632651-d0bc4cb5-828d-421b-86e0-507657949572.png)

JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
```js
variablename = (condition) ? value1 : value2 
```

## if else
Conditional statements are used to perform different actions based on different conditions. Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this. Use if to specify a block of code to be executed, if a specified condition is true.
```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```
Use else to specify a block of code to be executed, if the same condition is false.
```js
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```
Use else if to specify a new condition to test, if the first condition is false.
```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```
Use switch to specify many alternative blocks of code to be executed.
```js
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
## For loop
Loops can execute a block of code a number of times. JavaScript supports different kinds of loops such as:

for - loops through a block of code a number of times. 

Statement 1 is executed (one time) before the execution of the code block. Statement 2 defines the condition for executing the code block. Statement 3 is executed (every time) after the code block has been executed.
```js
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

```
for/in - loops through the properties of an object.
```js
for (key in object) {
  // code block to be executed
}
```
for/of - loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
```js
for (variable of iterable) {
  // code block to be executed
}
```
while - loops through a block of code while a specified condition is true.
```js
while (condition) {
  // code block to be executed
}
```
do/while - also loops through a block of code while a specified condition is true. The loop will always be executed at least once, even if the condition is false because the code block is executed before the condition is tested.
```js
do {
  // code block to be executed
}
while (condition);
```
The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.

## Iterables
Iterables are iterable objects (like Arrays). Iterables can be accessed with simple and efficient code.
```js
for (variable of iterable) {
  // code block to be executed
}
```
Iterating Over an Array.
```js
const letters = ["a","b","c"];

for (const x of letters) {
  // code block to be executed
}
```
Iterating Over a Set
```js
const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}
```
## Sets
A JavaScript Set is a collection of unique values.
![image](https://user-images.githubusercontent.com/43446907/166634137-bab7a9f7-287e-4d57-9fea-06fbd802e665.png)
```js
// Create a Set
const letters = new Set(["a","b","c"]);
```

## Maps
A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.
![image](https://user-images.githubusercontent.com/43446907/166634240-eb3c5557-c3ff-483d-9fee-056db4137649.png)
```js
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
```
## Type Conversion
JavaScript variables can be converted to a new variable and another data type. The global method Number() can convert strings to numbers.
```js
Number("3.14")    // returns 3.14
```
The global method String() can convert numbers to strings.
```js
String(123)       // returns a string from a number literal 123
```
The global method Number() can also convert booleans to numbers.
```js
Number(false)     // returns 0
Number(true)      // returns 1
```
## Bitwise Operators
![image](https://user-images.githubusercontent.com/43446907/166634461-1b2fa4e1-dcb9-4087-85b5-eeb7eaa33f6b.png)

## Error Catching
The try statement defines a code block to run (to try).
The catch statement defines a code block to handle any error.
The finally statement defines a code block to run regardless of the result. 

Keep in mind you don't have to use finally on a try-catch.
```js
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
} finally {
 Runs anyway...
}
```
The throw statement defines a custom error.
```js
throw new Error("Your missing permissions!")
```

## Arrow Function
You don't always need to use the function keyword in javascript as of ES6 (the version of js). Arrow functions allow us to write shorter function syntax.
```js
let myFunction = (a, b) => a * b;
```
The handling of this is also different in arrow functions compared to regular functions. In short, with arrow functions, there is no binding of this. In regular functions the "this" keyword represented the object that is called the function, which could be the window, the document, a button, or whatever. With arrow functions, the "this" keyword always represents the object that defined the arrow function.

## Classes
JavaScript Classes are templates for JavaScript Objects. Use the keyword class to create a class.
```js
class ClassName {
  constructor() { ... }
}
```
Always add a method named constructor()
```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```
The class has two initial properties: "name" and "year".

Note: A JavaScript class is not an object. It is a template for JavaScript objects. When you have a class, you can use the class to create objects.
```js
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
```
The constructor method is called automatically when a new object is created.
The constructor method is a special method. It has to have the exact name "constructor". It is executed automatically when a new object is created. It is used to initialize object properties. If you do not define a constructor method, JavaScript will add an empty constructor method.

## Class Inheritance
To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class.
```js
class myClass {}

class anotherClass extends myClass {}
```
Classes also allow you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.
```js
class myClass {
constructor(name) {
    this.name = name;
  }
get name() {
  return this.name
 }
set name(newName) {
  return this.name = newName
 }
}
```
Even if the getter is a method, you do not use parentheses when you want to get the property value.

## Modules 
JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain the code-base. JavaScript modules rely on the import and export statements.

You can create named exports in two ways. In-line individually, or all at once at the bottom.
```js
export const name = "Jesse";
export const age = 40;
```
or
```js
const name = "Jesse";
const age = 40;

export {name, age};
```
You can only have one default export in a file.
```
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
```
You can import modules into a file in two ways, based on if they are named exports or default exports. Named exports are constructed using curly braces. Default exports are not.
```js
import { name, age } from "./person.js";
```
```js
import message from "./message.js";
```

## Part 3 - Discord Bot
Welcome back everyone to the final video of this mini-course! So glad you all made it to the end...but this is actually just the beginning of your Javascript journey! In this video, we will be using the [discord.js](https://discord.js.org/#/) library to make a custom discord bot and send memes to our friends!