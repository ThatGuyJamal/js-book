# The Basics

Alright, let's jump right in with the basics of JavaScript. I will leave configuring your programming environment to you as
this book is meant to be un-opinionated. However, if you are unsure how to start, you can use a website called [Programiz](https://www.programiz.com/javascript/online-compiler/) to get started and follow along without any setup.

## Variables

Variables are containers for storing data (storing data values).

The four ways to declare a variable in JavaScript are:

```js
var name = value;
let name = value;
const name = value;
var name;
```

### When to Use JavaScript var?

Always declare JavaScript variables with `var`, `let`, or `const`.The var _keyword_ is used in all JavaScript code from _1995_ to _2015_. The let and const _keywords_ were added to JavaScript in 2015. If you want your code to run in an older browser, you must use var.

### When to Use JavaScript const?

Use `const` when you want to declare a variable that you will not change. f you think the value of the variable can change, use **let**.

### Identifiers

All JavaScript variables must be identified with unique names. These unique names are called identifiers.
The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and \_.
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.

### Assignment Operator

In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.
This is different from algebra. The following does not make sense in algebra:

```js
y = 34 + 2;
```

In JavaScript, however, it makes perfect sense: it assigns the value of 34 + 2 to the variable y.

Note: The "equal to" operator is written like == in JavaScript.

### Data Types

JavaScript variables can hold numbers like 50 and text values like "Matty ki". In programming, text values are called text strings. JavaScript can handle many types of data, but for now, just think of numbers and strings. Strings are written inside double or single quotes. Numbers are written without quotes. If you put a number in quotes, it will be treated as a text string.

```js
const pi = 3.14; // type is number
const name = "Matty"; // type is string
```

In computer programs, variables are often declared without a value. The value can be something that has to be calculated or something that will be provided later, like user input.

A variable declared without a value will have the value undefined. The variable student will have the value undefined after the execution of this statement:

```js
let student; // student is undefined
```
