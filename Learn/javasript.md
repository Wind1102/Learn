# Mục Lục

- [Mục Lục](#mục-lục)
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
- can assign value for variable but not use let, const, var -> this is global variable

## let
- value of variable can be change


## const
- value of variable can't be change
- must assign value when declare

## var 
- value of variable can be change

# Falsy and Truly values  
- five falsy values: 0, '', undefined, null, NaN.
- 