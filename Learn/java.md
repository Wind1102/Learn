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
- [Loop](#loop)
- [Big Integer](#big-integer)
- [Array](#array)
  - [for loop](#for-loop)
  - [Array copying](#array-copying)
  - [Command Line Arguments](#command-line-arguments)
  - [Array Sorting](#array-sorting)
  - [Multidimensional Array](#multidimensional-array)
    - [Ragged Arrays](#ragged-arrays)
- [Object and Class](#object-and-class)
  - [Introduction Object Oriented Programming](#introduction-object-oriented-programming)
    - [Class](#class)
    - [Object](#object)
    - [Identifying Classes](#identifying-classes)
    - [Relationships between Classes](#relationships-between-classes)
  - [Using Predefined Classes](#using-predefined-classes)
    - [Objects and Object Variables](#objects-and-object-variables)
    - [Mutator and Accessor Method](#mutator-and-accessor-method)
- [Defining Your Own Classesf](#defining-your-own-classesf)


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
   Size itemSize = Size.MEDIUM;
   String label = switch (itemSize)
   {
      case SMALL -> "S"; // no need to use Size.SMALL 
      case MEDIUM -> "M";
      case LARGE -> "L";
      case EXTRA_LARGE -> "XL";
      default ....
   }; 
   //label -> M

```
- When selector is enum, don't have case for all constants, => need a default
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
      PrintWriter out = new PrintWriter("MyFile.txt"); //write to the file
      FileWriter out = new FileWriter("Myfile.txt", true); //append to the file
   ```


# Block
- A Block or compound statement, consists a number of java statements. surrounded by a pair of braces.
- Block define the scope of your variables 

# Loop
- for, while, break, continue,...

# Big Integer 
BigInteger add(BigInteger other) 
BigInteger subtract(BigInteger other) 
BigInteger multiply(BigInteger other) 
BigInteger divide(BigInteger other) 
BigInteger mod(BigInteger other) 
BigInteger pow(int exponent) return the sum, difference, product, quotient, remainder, and power of this big integer and other.
# Array

Declare an array variable by specifying the `array type + [] + variable name` 
   ```java
      int[] a; or int a[];
      int[] a = new int[100]; or var a = new int[100];
      int[] price = {1,2,3,4};
      var price = new arraytype[0]; or new arraytype[] {} // this is legal to have array with length 0
      // notice the array with length 0 is not the same as null 
   ```

## for loop
- `for {variable : collection} statement; `
- Note: the loop variable of the for each loop traverses the element of array, not the index values 

## Array copying 
- you can copy an array variable into another, but both variable refers to the same array

```java
   int[] a = {1,2,3,4,5};
   var b = a;
   b[0]= 12; // a[0] = 12
```

- if you actually want to copy all values of one array to new array, we use the copyOf method of Array class;
```java
   int[] arraycopy = Arrays.copyOf(origin, origin.length);  
```

## Command Line Arguments 
- ` java Main.java -g Hello World`  => args = ["-g","Hello", "World"];


## Array Sorting
- use sort method of Array class `Arrays.sort(a);`

- ![Method of Array Class](./image/array_java.png)

## Multidimensional Array 
- A “for each” loop does not automatically loop through all elements in a two-dimensional array. Instead, it loops through the rows, which are themselves one-dimensional arrays. To visit all elements of a two-dimensional array a, nest two loops

### Ragged Arrays
   - Java has no multidimensional arrays at all, only one-dimensional arrays. Multidimensional arrays are faked as “arrays of arrays.”
```java
   final int NMAX = 10;
   int[][] odds = new int[NMAX + 1][]
   for (int n = 0;n<=NMAX;n++){
      odds[n] = new int[n+1];
   }
```

# Object and Class 
##  Introduction Object Oriented Programming 
### Class
- The bits of data in object are called its `instance field`.
- And the producers that operate on the data are called its `method`.
- Class can be built by extending other class. Java, in fact, comes with a "cosmic superclass" called Object. All other classes extends this class.
- WHen you extends existing class, the new class have all properties and method of the class you extends. You then supply new methods and instance fields that apply to your new class only. => called `inheritance".


### Object 
To work with OOP, you should be able to identify three key characteristic of Object
  - The Object's behavior - What can you do with this object, or what methods can you to apply it?
  - The Object's state - how does the object react when you invoke those methods?
  - The Object's identity - how is the Object distinguished from others that may have the same behavior and state

- The behavior of an object is defined by the methods that you can call.
- Each object stores information about what it currently looks like. This is the object’s state. An object’s state may change over time, but not spontaneously. A change in the state of an object must be a consequence of method calls. (If an object's state changed without a method call on that object, someone broke encapsulation.)
- The state of an object does not completely describe it, because each object has a distinct identity. For example, in an order processing system, two orders are distinct even if they request identical items. Notice that the individual objects that are instances of a class always differ in their identity and usually differ in their state.
- These key characteristics can influence each other. For example, the state of an object can influence its behavior. (If an order is “shipped” or “paid,” it may reject a method call that asks it to add or remove items. Conversely, if an order is “empty”—that is, no items have yet been ordered—it should not allow itself to be shipped.)


### Identifying Classes
### Relationships between Classes 

The most common relationships between classes are 
- Dependence ("uses-a"): A class depend another class, example Order depends Account because Order objects need to access Account objects to check for credit status
- Aggregation("has-a"): for example, an Order object contains Item objects. Containment means that objects of class A contain objects of class B.
- Inheritance("is-a"): For example, a RushOrder class inherits from an Order class. The specialized RushOrder class has special methods for priority handling and a different method for computing shipping charges, but its other methods, such as adding items and billing, are inherited from the Order class. In general, if class D extends class C, class D inherits methods from class C but has more capabilities


## Using Predefined Classes 
### Objects and Object Variables 
- use `Constructors` to construct new instance. A constructor is a special method whose purpose is to construct and initialize objects.
```java
   startTime = new Date()  //Wed Nov 06 23:09:55 ICT 2024
   // other class LocalDate is useful for human readable 
   LocalDate newYearsEve = LocalDate.of(1999, 12, 31); // 1999-12-31
```

### Mutator and Accessor Method
- Mutator method -> Object is change when invoke method
- Accessor method -> Method that only access the object without modifying them

# Defining Your Own Classesf
The simple form for a class defination in Java is
```java
class ClassName {
   field1
   field2
   constructor1
   constructor2

   method1
   method2
}

```





