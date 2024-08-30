# Mục Lục

- [Mục Lục](#mục-lục)
- [DATA TYPES](#data-types)
  - [Integer types](#integer-types)
  - [Floating-Point Type](#floating-point-type)
  - [Char type](#char-type)
  - [Boolean type](#boolean-type)
- [Variable and Constants](#variable-and-constants)
  - [Declare variable](#declare-variable)
  - [Constant](#constant)
  - [Enumerate type](#enumerate-type)
- [Operator](#operator)
  - [Arithmetic](#arithmetic)
  - [Conversions between Numeric Types](#conversions-between-numeric-types)
  - [Increment and Decrement Operators](#increment-and-decrement-operators)
  - [Conditional Operator](#conditional-operator)
  - [Switch Expression](#switch-expression)
- [String](#string)
- [INPUT AND OUTPUT](#input-and-output)
  - [Reading Input](#reading-input)
  - [File Input and Output](#file-input-and-output)
- [Block](#block)

# DATA TYPES
## Integer types

1. Four type for integer:
   - byte : 1 byte
   - short: 2 bytes
   - int  : 4 bytes
   - long : 8 bytes

## Floating-Point Type

1. Two Floating-Point types
   - float: 4 bypes
   - double:8 bytes

## Char type
- 'A' => Char type, "A" => String type

## Boolean type
Cannot convert between integers and boolean values

# Variable and Constants
## Declare variable
- declare variable `data type + name variable;`
- variable is case sentitive => hireDay != hireday
- type of variable can be inferred from initial value => use keyword `var` to declare
  -  example `var x = 5` => x is integer
## Constant
- can declare CONSTANT with key word `final`
  - example: `final double CM_PER_INCH = 2.54;`
- can declare CONSTANT in class and outside main function => class CONSTANT, can use from other class 
  - example: other class can access by use  `Constants.CM_PER_INCH`
      ```java
         class Constants{ 
            public static final double CM_PER_INCH = 2.54;
         }
         
      ```
## Enumerate type
- `enum Size { SMALL, MEDIUM, LARGE, EXTRA_LARGE}` => access Size.LARGE, can hold only one of the values listed in type declaration 


# Operator
## Arithmetic 
- operator `%` can return negative 
  - example 
      ```java 
         public static void main(String args){
            public int x = -10;
            System.out.print(x%7);  // result is -3
            System.out.print(Math.floorMod(x,7)); // result is 4
            System.out.print(Math.floorMod(x,-7));  // result is -3
         }
      ```
## Conversions between Numeric Types
When two values are combined with a binary operator (such as n + f where n is an integer and f is a floating-point value), both operands are converted to a common type before the operation is carried out. 
   - If either of the operands is of type double, the other one will be converted to a double. 
   - Otherwise, if either of the operands is of type float, the other one will be converted to a float. 
   - Otherwise, if either of the operands is of type long, the other one will be converted to a long. 
   - Otherwise, both operands will be converted to an int.

## Increment and Decrement Operators
```java
   int x = 7;
   int y =  7;
   int a = 2* x++;  // x = 8;a = 14
   int b = 2* ++y;  // y= 8; b = 16
```

## Conditional Operator 
- `condition ? expression_1 : expresstion_2` evaluate expression_1 if condition is True else expression_2

## Switch Expression

```java
   enum Size { SMALL, MEDIUM, LARGE, EXTRA_LARGE };
   Size itemSize = . . .;
   String label = switch (itemSize)
   {
      case SMALL -> "S"; // no need to use Size.SMALL
      case MEDIUM -> "M";
      case LARGE -> "L";
      case EXTRA_LARGE -> "XL";
   };

```
- When selector is enum, don't have case for all  constants, => need a default
- if selector is `null` => add case `null` because default does not match `null` 

# String 
   - StringBuilder()
   -  use ``` """   ..... """ to declare a Text Blocks;


# INPUT AND OUTPUT
## Reading Input 
   - `Scanner`
   ```java
      Scanner in = new Scanner(System.in);
      System.out.print("What is your name?");
      String name = in.nextLine();  // read line of output 
      String age = in.nextInt(); // read integer 
      String name = in.next(); // read a single word not contain a whitespace
   ```
## File Input and Output 

- To read from a file
   ```java 
      Scanner in = new Scanner(Path.of("myfile.txt"));
   ```

- To write a file -> construct a PrintWriter object
   ```java
      PrintWriter out = new PrintWriter("MyFile.txt");
   ```


# Block
- A Block or compound statement, consists a number of java statements. surrounded by a pair of braces.
- Block define the scope of your variables 