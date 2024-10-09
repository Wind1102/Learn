# Mục Lục

- [Mục Lục](#mục-lục)
- [JavaScript Engine](#javascript-engine)
  - [Compilation](#compilation)
  - [Interpretation](#interpretation)
  - [Just in time(JIT) compilation](#just-in-timejit-compilation)
- [Execution contexts amd the Call Stack](#execution-contexts-amd-the-call-stack)
  - [Scope and The Scope chain](#scope-and-the-scope-chain)
    - [Global scope](#global-scope)
    - [Function scope](#function-scope)
    - [Block scope](#block-scope)
- [Hoisting and the TDZ (Temperal dead zone)](#hoisting-and-the-tdz-temperal-dead-zone)
- [`this` keyword](#this-keyword)
- [Primitive vs Object (Primitives vs Reference types)](#primitive-vs-object-primitives-vs-reference-types)
- [Link to script file](#link-to-script-file)
- [Naming variables](#naming-variables)
  - [Rule of Naming](#rule-of-naming)
- [Primitive vs Object](#primitive-vs-object)
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
  - [regular function and arrow function](#regular-function-and-arrow-function)
  - [Arrays](#arrays)
  - [Arrays methods](#arrays-methods)
- [Object](#object)
  - [Object method](#object-method)
  - [For loops](#for-loops)
- [DOM and Events Fundamentals](#dom-and-events-fundamentals)
- [Destructure](#destructure)
  - [Destructure Array](#destructure-array)
  - [Destructure Object](#destructure-object)
- [Spread operator](#spread-operator)
- [Rest Pattern and Parameter](#rest-pattern-and-parameter)
- [Nullish Operator ( `??` )](#nullish-operator---)
- [Logical Assigment Operator](#logical-assigment-operator)
- [Set](#set)
- [Map](#map)
- [Data Structure Overview](#data-structure-overview)
  - [Source of data](#source-of-data)
- [Work with String](#work-with-string)
- [Passing argument: Values vs Reference](#passing-argument-values-vs-reference)
- [First Class and Higher-Order Functions](#first-class-and-higher-order-functions)
- [Call, Bind, Apply](#call-bind-apply)
  - [Call](#call)
  - [Apply](#apply)
  - [bind](#bind)

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

# Execution contexts amd the Call Stack
What's inside execution contexts 
- 1. Variable environment 
  - let, const, var declaration 
  - functions
  - `argument object` 
- 2. Scope chain 
- 3. `this` key word
Note: Arrow function don't have `this` keyword and `argument object`. Instead, they can use the argument objects object and the this keyword from their closest regular function parent 
## Scope and The Scope chain 
- Scoping -> Where can we access a certain variable and where not? 
- Lexical scoping: scopping is controlled by replacement of functions and blocks in the code 
- Scope: Space or environment on which a certain variable is declare(veriable environtment in case of functions). There is global scope, function scope, and block scope
-  Scope of a variable: Region of our code where a certain variable can be accessed 
-  Scope chain: Variable lookup in scope chain (scope has access to variable from all outer scopes, child can be access variable if it in scope of all parent..), only work upward not sideway
-  Variable lookup: When variable is not in the current scope, the engine looks up the scope chain until it finds the variable it's looking for. This is called variable lookup;
-  The scope chain is one-way street: a scope will never, ever have access to the variable of an inner scope
-  the scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all.

![#scope-chain](./image/scope_chain.png) 

### Global scope 
- Out side of any function or block 
- Variable declared in global scope are accessible everywhere
### Function scope
- variable can be accessible only inside function, not outside
- also called local scope
### Block scope
- variable can be accessible only inside block (block scope)
- However, this is only applies to let and const variables
- Function are also block scoped (only in strict mode)



# Hoisting and the TDZ (Temperal dead zone)
- Hoisting: makes some types of variable accessible/useable in the code before they are actually declared. Variable lifted to the top of their scope 
![#hoisting](./image/hoisting.png)

# `this` keyword
- this keyword/variable: Special variable that is create for every excution context(every function). Take the value of (point to) the "owner" of the function in which the this keyword is used.
- this is not static. It depends on how the functionis called, and its value is only assigned when function is actually called
  - method: this = < Object that is calling the method >
  - Simple function call: this = undefine, only valid in strict mode, otherwise: window object // we call method normal and not as a method and so not attached to any object
  - arrow function: this = < this is surrounding function (lexical this) >
  - event listener: this = < DOM element that the handler is attached to >
  
![#this](./image/this.png)

# Primitive vs Object (Primitives vs Reference types)
- Primitive types varibale save in call stack, Identifier point to address, which hold values of variable 
- Object save in Heap, identifier point to address, which hold to address value of object in heap 

![#primitive vs object](./image/primitive_reference.png)

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

# Primitive vs Object

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
- var don't have block scope
- declarable with var, will create property on the global window object.




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


## regular function and arrow function
- arrow function don't have parameter `arguments`


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


# Destructure
## Destructure Array 
```js
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  
];


//1.1
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

//1.2
const [ , , thirdBook] = books;
console.log(thirdBook);

//1.3

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[,rating], [,ratingsCount]] = ratings;
console.log(rating, ratingsCount);

//1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRating,threeStarRatings] = [...ratingStars,0];
console.log(fiveStarRatings, oneStarRating,threeStarRatings);
```
## Destructure Object 
```js
  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order : function (strartIndex , mainIndex){
      return [this.starterMenu[strartIndex], this.mainMenu[mainIndex]];
    },
    
    oderDelivery: function({startIndex, mainIndex, time, address}) {
      console.log()
    }

    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };

  const {name , mainMenu, location} = restaurant;
  console.log(name, mainMenu, location);
  const {name: restaurantName, mainMenu: menu, location: loc} = restaurant;
  console.log(restaurantName, menu, loc);

  const {openingHours} = restaurant;
  const {fri: {open, close} } = openingHours;
  console.log(open, close);   //12,23

  const obj = { 
    a: 1,
    b: 2,
    c: 3
  };
  let a  =111;
  let b = 999;
  ({a,b} = obj);
  console.log(a,b);  // a = 1,  b = 2 

  const orderObj = {
    startIndex: 2,
    mainIndex: 2,
    time: '22:30',
    address: 'Via del Sole, 21'
  };

  restaurant.orderDelivery(orderObj);


```

# Spread operator 
`...`

```js
  const arr = [1,2,3];
  const newarr = [0,...arr];
  console.log(newarray); // [0,1,2,3]
```
Iterables: arrays , strings, maps, sets, NOT object

```js
  const str = "minh Hieu";
  const letter = [...str]; //['m','i','n','h',' ','H', 'i','e','u'];
  const restaurant = {
    name: 'Pizza',
    location: "dong da",

  }
  const HieuPizza = {...restaurant, prize: '51'}
  console.log(HieuPizza);
```


# Rest Pattern and Parameter
 
```js
  const [a,b,...others] = [1,2,3,4,5];
  console.log(others);  // 3,4,5
  function add(...numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length ;i++){
        sum += numbers[i];
    }
    return sum;
  }
```


# Nullish Operator ( `??` ) 
Nullish value is `null` and `undefined`
- `??` return right-hand only if left-hand operand is `null` or `undefined` 

# Logical Assigment Operator
```js
  res1.numberGuest ||= 10; // equal res1.numberGuest =  res1.numberGuest || 10

  res1.numberGuest ??= 10; // equal res1.numberGuest = res1.numberGuest ?? 10
```


# Set 

```js 
  const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
  const orderSet1 = new Set([...orderSet]); // Spread inside an array
  console.log(orderSet.size);  //Pasta, Pizza, Risotto
```


# Map 
```js 
  const rest = new Map();
  rest.set('name', "MH");
  rest.set(1,"Haha");
  console.log(rest);
  console.log(rest.set(2, "Hieu"));
  console.log(rest.get(1));

  const arr = [1,2];
  rest.set(arr, "Test");
  console.log(rest.get(arr));

  rest.set(document.querySelector('h1'), 'Heading');
  console.log(rest.get(document.querySelector('h1')));  // Heading 
  console.log(rest.get('h1')); //undefine 
  console.log(rest);
```


# Data Structure Overview 
## Source of data 
  - From the program itself: Data written directly in source code (eg. status message)
  - From the UI: Data input from the user or data written in the Dom (eg. task in todo app)
  - From external source: Data fetched for example from web API (eg recipe object)
-> Simple list? -> using  Arrays or Sets
-> Key/Value pair? -> using Objects or Maps


# Work with String



# Passing argument: Values vs Reference

- primitive type pass value
- other pass reference

# First Class and Higher-Order Functions
- javascript treats functions as first-class citizens
- This means that function are simply value 
- Funtions are just another "type" of object
- Store functions in variables or properties
- Pass functions as arguments to other function
- Return functions From functions
- Call methods on functions
![#function](./image/function.png)


# Call, Bind, Apply
## Call 
```js
  call(thisArg, arg1, ..., argN)
  
```
- `thisArg`: The value to use as this when calling function. If the function is not in `strict mode` , `null`, `undefined` will be replace with the global object, and primitive values will be converted to object.
- `arg1, arg2,..., argN`: Arguments for the function

- Return value: The result of calling the function with the specified this value and arguments

## Apply
```js
  apply(thisArg, argsArray)
```

- `thisArg`: the value of this provided for the call to function. If the function is not in `strict mode` , `null`, `undefined`, will be replaced with the global object, and primitive values will be converted to objects.
- `argsArray`: An array-like object, specifying the arguments with which function should be called, or `null`, or `undefined` if no arguments should be provided to the function

- Return value: The result of calling the function with the specified this value and arguments.


## bind
```js
  bind(thisArg, arg1, ..., argN)
```

