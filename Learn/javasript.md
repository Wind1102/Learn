# Mục Lục

- [Mục Lục](#mục-lục)
- [JavaScript Engine](#javascript-engine)
  - [Compilation](#compilation)
  - [Interpretation](#interpretation)
  - [Just in time(JIT) compilation](#just-in-timejit-compilation)
- [Link to script file](#link-to-script-file)
- [Naming variables](#naming-variables)
  - [Rule of Naming](#rule-of-naming)
- [Value](#value)
  - [7 Primitive data type](#7-primitive-data-type)
- [Declare Variable](#declare-variable)
  - [let](#let)
  - [const](#const)
  - [var](#var)
- [Falsy and Truly values](#falsy-and-truly-values)
- [Operator](#operator)
  - [Equality Operator == \& ===](#equality-operator---)
  - [switch-case](#switch-case)
- [Strict mode](#strict-mode)
- [Functions](#functions)
  - [Functions Declarations and Expression](#functions-declarations-and-expression)
  - [Arrow function](#arrow-function)
  - [Arrays](#arrays)
  - [Arrays methods](#arrays-methods)
- [Object](#object)
  - [Object method](#object-method)
  - [For loops](#for-loops)
- [DOM and Events Fundamentals](#dom-and-events-fundamentals)

# JavaScript Engine
- JS Engine include `call stack` and `heap`
- `Call stack` is order funtion excute and `heap` save object 
## Compilation 
  Entire code is converted into machine code at one, and written to a binary file that can be executed by a computer
- source -> portable file: machine code // compilation 
- portable file -> Program running   // execution, can happen way after compilation

## Interpretation
Interpreter runs through the source code and executes it line by line
- Source code -> Program running   // code execution line by line 

## Just in time(JIT) compilation 
Entire code is converted into machine code at one, then executed immediately 
- source -> Machine code // compilation, not a portable file
- Machine code -> Program running // happens immediately

# Link to script file

- you can use `<script>` tag in html file to write javascript
- you can you `<script src='path to js file'></script>` in html to use js file
- js file usually write file in

# Naming variables

- Style of naming usually using in JS is camelCase `ex let firstName`

## Rule of Naming

- variable name can't start with a number
- variable name can only contain letter, number, underscore or dollar sign
- variable name can't equals key word in JS
- if variable is CONSTANT, write it UPPER CASE
- variable name should be describe the value it hold

# Value

- Value is a Object or Primitive
- Value has type, not variable -> data types are determined automatically

## 7 Primitive data type

- `number` : Floating point number
- `string` : Sequence of characters
- `Boolean` : true or false
- `undefined` : value taken by a variable that is not yet defined ('empty valuue') => variable declare but not assign value
- `null` : Also means 'empty value'
- `Symbol`(ES2015): Value is that unique and can't be changed
- `BigInt`(ES2020): Large integer than Number type can be hold

Use `type of` to check data type of value; (special type of null is object)

# Declare Variable

- can assign value for variable, but if not use let, const, var -> this is global variable

## let

- value of variable can be change

## const

- value of variable can't be change
- must assign value when declare

## var

- value of variable can be change

# Falsy and Truly values

- five falsy values: 0, '', undefined, null, NaN.

# Operator

## Equality Operator == & ===

```js
"18" == 18; // true
"18" === 18; // false
```

## switch-case

```js
const day = "wednesday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples"); //-> fallthrough , code excuted until break or return;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
}
```

- if not stop when each case -> fallthrough

# Strict mode

- use `'use strict';` in beginning to active strict mode

# Functions

## Functions Declarations and Expression

```js
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(1991);
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1991);
```

- The different is we can call function declarations before they are defined in the code.

## Arrow function

```js
  const calcAge3 = birthYear => 2024 - birthYear;
  const yearsUntilRetirement = (birthYear , firstName) => {
    return .....
  }
```

## Arrays

- declare and access to arrays

```js
const friends = ["123", "1234", "4444"]; //declare
const years = new Array(1991, 1992, 1993); //declare
friends[1] = "1234"; // access
friends = [1, 2]; // error ->  because declare with const
```

## Arrays methods

- push() -> add element to the end of array
- unshift() -> add element to begin of array
- pop() -> remove last element of array
- shift() -> remove first element of array
- indexOf(element) -> return position of element in array ( begin from 0)
- includes(value) -> return true if value in array, and opposite

# Object

```js
const jonas = {
  firstName: "Jonas", // property
  lastName: "Scheman",
  age: 2037 - 1991,
  friends: ["Miacal", "Peter"],
};
console.log(jonas.firstName); // Jonas
console.log(jonas["firstName"]); // Jonas
```

- use dot `object.property_name` or use brackets `object['property_name']` to access to object property
- use `object.property_name = value` or `object['property_name'] = value` to set property for object
- use `delete object.property_name` or `delete object['property_name']` to delete property

## Object method

```js
  const jonas = {
    firstName: 'Jonas',   // property
    lastName : 'Scheman',
    age : 2037-1991,
    friends : ['Miacal','Peter'],
    caclAge : function(){
      ......
    }
  }
  jonas.calcAge();
```

## For loops

# DOM and Events Fundamentals
