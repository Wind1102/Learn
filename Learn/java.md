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
  - [Defining Your Own Classes](#defining-your-own-classes)
    - [First Step with Constructor](#first-step-with-constructor)
    - [Declaring Local Variables with var](#declaring-local-variables-with-var)
    - [Working with null Reference](#working-with-null-reference)
    - [Implicit and explicit arguments](#implicit-and-explicit-arguments)
    - [Benefit of Encapsulation](#benefit-of-encapsulation)
    - [Class-based access Privilage](#class-based-access-privilage)
    - [Private methods](#private-methods)
    - [Final Instance Field](#final-instance-field)
  - [Static field and method](#static-field-and-method)
    - [static fields](#static-fields)
    - [static constants](#static-constants)
    - [Statuc method](#statuc-method)
    - [Factory Method](#factory-method)
    - [The main method](#the-main-method)
    - [Method parameters](#method-parameters)
  - [Object construction](#object-construction)
    - [OverLoading](#overloading)
    - [Default Field Initialization](#default-field-initialization)
    - [Constructor with no arguments](#constructor-with-no-arguments)
    - [initialize block , static initialize block](#initialize-block--static-initialize-block)
  - [Records (page 294,295)](#records-page-294295)
    - [the record concept](#the-record-concept)
    - [Constructor: Canonical, Compact, and custom](#constructor-canonical-compact-and-custom)
  - [Package](#package)
    - [Package name](#package-name)
    - [Class Importation](#class-importation)
    - [Static import](#static-import)
    - [Addition of a class into a package](#addition-of-a-class-into-a-package)
    - [Class Path](#class-path)
    - [Setting class Path](#setting-class-path)
  - [Jar File (page 315)](#jar-file-page-315)
    - [Creating JAR files](#creating-jar-files)
    - [Manifest (page 320)](#manifest-page-320)
  - [Document Command (page 330)](#document-command-page-330)
    - [Class Comment](#class-comment)
  - [Class design hints](#class-design-hints)
- [Inheritance](#inheritance)
  - [Classes, Superclasses and Subclasses](#classes-superclasses-and-subclasses)
    - [Defining subclasses](#defining-subclasses)
    - [Overriding methods](#overriding-methods)
    - [Polymorphism](#polymorphism)
    - [UnderStanding Method call](#understanding-method-call)
    - [Preventing Inheritace](#preventing-inheritace)
    - [Casting](#casting)
    - [Pattern Matching InstanceOf](#pattern-matching-instanceof)
  - [The cosmic superclass](#the-cosmic-superclass)
    - [Varialbe of type object](#varialbe-of-type-object)
    - [The equals Method](#the-equals-method)
    - [toString Method](#tostring-method)
    - [Hascode Method](#hascode-method)
  - [Generic Array Lists](#generic-array-lists)
    - [Accessing Array List elements](#accessing-array-list-elements)
    - [Compatibility between Typed and Raw Array lists](#compatibility-between-typed-and-raw-array-lists)
  - [Object Wrappers and Auto Boxing](#object-wrappers-and-auto-boxing)
  - [Methods with a Variable Number of Argmument](#methods-with-a-variable-number-of-argmument)
  - [Abstract Class](#abstract-class)
  - [Enumeration Class](#enumeration-class)
  - [Sealed classes](#sealed-classes)
  - [Pattern Matching](#pattern-matching)
    - [Null Handling](#null-handling)
    - [GUARDs](#guards)
    - [Exhaustiveness](#exhaustiveness)
  - [Dominance](#dominance)
  - [Reflection (Page 462)](#reflection-page-462)
  - [Design hints for Inheritance](#design-hints-for-inheritance)
- [Interfaces, Lambda Expressions and Inner Class](#interfaces-lambda-expressions-and-inner-class)
  - [Interfaces](#interfaces)
    - [The interface concept](#the-interface-concept)
    - [Properties of interfaces](#properties-of-interfaces)
    - [Interfaces and abstract classes](#interfaces-and-abstract-classes)
    - [Static and Private method(527)](#static-and-private-method527)
    - [Default Method](#default-method)
    - [resolving default method conflict](#resolving-default-method-conflict)
    - [Interfaces and Callbacks](#interfaces-and-callbacks)
    - [Object Cloning](#object-cloning)
  - [Lambda expressions](#lambda-expressions)
    - [Syntax](#syntax)
    - [Functional Interfaces(559)](#functional-interfaces559)
    - [Method References](#method-references)
    - [Contructor Reference](#contructor-reference)
    - [Variable scope](#variable-scope)
    - [Processing Lambda Expression](#processing-lambda-expression)
    - [Creating Comparators](#creating-comparators)
  - [Inner Class](#inner-class)
    - [Use of an Inner Class to Access Object State](#use-of-an-inner-class-to-access-object-state)
    - [Special Syntax rules for inner classes](#special-syntax-rules-for-inner-classes)
    - [Local Inner Classes](#local-inner-classes)
    - [Accessing Variables from Outer Methods](#accessing-variables-from-outer-methods)
    - [Anonymous Inner Classes](#anonymous-inner-classes)
    - [Static class (605)](#static-class-605)
  - [Service Loaders (611)](#service-loaders-611)
  - [Proxies (615)](#proxies-615)
- [Exceptions, Assertiongs, and Loggings](#exceptions-assertiongs-and-loggings)
  - [Exeptions](#exeptions)
  - [Assertion](#assertion)
    - [Assertion Enabling and Disabling](#assertion-enabling-and-disabling)
  - [Logging](#logging)
    - [Logging Configuration](#logging-configuration)
- [Generic Programming](#generic-programming)
  - [Generic class](#generic-class)
  - [Generic methods](#generic-methods)
  - [Bound for type Variable](#bound-for-type-variable)
  - [Generic Code and the Virtual Machine (725)](#generic-code-and-the-virtual-machine-725)
    - [Generic Record Patterns](#generic-record-patterns)
  - [Wildcard Types](#wildcard-types)
    - [Supertype Bounds for Wildcards](#supertype-bounds-for-wildcards)
  - [Restrictions and Limitations (750)](#restrictions-and-limitations-750)
- [Collections (790)](#collections-790)
  - [The Java Collections Framework](#the-java-collections-framework)
    - [The collection interface](#the-collection-interface)
    - [Iterators](#iterators)
  - [Interfaces in the collections Framework](#interfaces-in-the-collections-framework)
  - [Algorithms](#algorithms)
- [Concurrency (930)](#concurrency-930)
  - [Running Threads](#running-threads)
  - [Thread state](#thread-state)
    - [New Thread](#new-thread)
    - [Runnable Thread](#runnable-thread)
    - [Blocked and Waiting Threads](#blocked-and-waiting-threads)
  - [Thread properties](#thread-properties)
    - [Thread inturrupted](#thread-inturrupted)
    - [Thread Names and Ids](#thread-names-and-ids)
    - [Thread prorities](#thread-prorities)
  - [Coordinating Tasks](#coordinating-tasks)
    - [Callables and Futures](#callables-and-futures)
    - [Invoking a Group of Tasks](#invoking-a-group-of-tasks)
    - [Thread-Local Variables](#thread-local-variables)
    - [The Fork-Join Framework](#the-fork-join-framework)
  - [Synchronization](#synchronization)
    - [Lock object \& Condition](#lock-object--condition)
    - [Deadlocks](#deadlocks)
    - [The synchronized keyword](#the-synchronized-keyword)
    - [Volatile Field](#volatile-field)
    - [ETC.....( xem them khoang trang 1050)](#etc-xem-them-khoang-trang-1050)
  - [Processes (1110)](#processes-1110)
    - [Building a process](#building-a-process)
- [Annotations (1114)](#annotations-1114)
  - [Defining Annotations](#defining-annotations)
  - [Annotations in the Java API](#annotations-in-the-java-api)
- [The Java Platform Module System (1166)](#the-java-platform-module-system-1166)
- [Streams](#streams)
  - [From Iterating to stream operations](#from-iterating-to-stream-operations)
  - [Stream creation](#stream-creation)
  - [Filter, map , flatMap methods](#filter-map--flatmap-methods)
  - [The Optional type](#the-optional-type)
  - [Collecting results](#collecting-results)
  - [Collecting into Map](#collecting-into-map)
  - [Grouping and Partitioning](#grouping-and-partitioning)
  - [DownStream Collectors (87v2)](#downstream-collectors-87v2)
  - [Reduction operations](#reduction-operations)
  - [Parallel Streams](#parallel-streams)
- [Input and Output](#input-and-output-1)
- [XML (312)](#xml-312)
  - [The XML Structure](#the-xml-structure)
- [Networking](#networking)
  - [Connecting to Servers](#connecting-to-servers)
    - [Using telnet](#using-telnet)
    - [Using Java](#using-java)
    - [Socket Timeout](#socket-timeout)
    - [Internet Address](#internet-address)
    - [Implementing Servers](#implementing-servers)
    - [Serving Multiple Client](#serving-multiple-client)


# DATA TYPES

## Integer types

1. Four type for integer:
   - byte : 1 byte
   - short: 2 bytes
   - int : 4 bytes
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
  - example `var x = 5` => x is integer

## Constant

- can declare CONSTANT with key word `final`
  - example: `final double CM_PER_INCH = 2.54;`
- can declare CONSTANT in class and outside main function => class CONSTANT, can use from other class

  - example: other class can access by use `Constants.CM_PER_INCH`

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
- use ``` """ ..... """ to declare a Text Blocks;

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

- ` java Main.java -g Hello World` => args = ["-g","Hello", "World"];

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

## Introduction Object Oriented Programming

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

## Defining Your Own Classes

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

### First Step with Constructor

- A constructor has the same name as the class
- A class can have more than one constructor
- A constructor can have zero, one or more parameters
- A constructor has no return value
- A contructor is always called with the nre operator
  !notice : Be careful not to introduce local variables with the same names as the instance fields
  The constructor declares local variables name and salary. These variables are only accessible inside the constructor. They shadow the instance fields with the same name. Some programmers accidentally write this kind of code when they type faster than they think, because their fingers are used to adding the data type. This is a nasty error that can be hard to track down. You just have to be careful in all of your methods to not use variable names that equal the names of instance fields.

```java
   public Employee(String n, double s, . . .)
   {
      String name = n; // ERROR
      double salary = s; // ERROR
      . . .
   }
```

### Declaring Local Variables with var

Declare local variables with the `var` keyword instead of specifying their type, provided their type can be inferred from can be inferred from the inittial value.
Example:

```java
   Employee harry = new Employee("Harry Hacker", 50000, 1989, 10, 1);
   var harry = new Employee("Harry Hacker", 50000, 1989, 10, 1); // should use  when data type of right-hand side is obvious
```

### Working with null Reference

- primitive type is never null
- object can reference to null

Method convenience:

```java
   name = Objects.requireNonNullElse(n, "unknown");
```

### Implicit and explicit arguments

- explicit arguments is argument the method is recieve in parenthese
- implicit arguments refer to object of type -> this keyword

### Benefit of Encapsulation

- Mutator method can perform error checking
- Becarefull not to write accessor methods that return references to mutable objects.-> 2 variable can refer to the same object -> object can be change -> break encapsulation

### Class-based access Privilage

- a method can access the private data of the object which it is invoked. -> a method of Employee class is permitted to access the private fields of any object type Employee

### Private methods

- use private keyword to set private

### Final Instance Field

```java
   class Employee{
      private final String name;
   }
```

- the final keyword useful for primitive value and Class Immutable (A class is Immutable if none of its method ever mutate its object)

## Static field and method

### static fields

- static field is class field,

```java
   class Employee{
      private static int nextId = 1;
      private int id;
   }
// nextId field is share for all instance of the class
```

### static constants

```java
   class Employee{
      private static final int nextId = 1;
   }

```

### Statuc method

- static method does not operate on an object, but it can access a static field
- should be use class name to call static method instead of object

### Factory Method

-> another common use for static methods. Instead use constructor example LocalDate.of()

- 3 three reasons to prefer a factory method over a constructor
  - can't give names to constructor. because constructor has same name as Class
  - when you use constructor, you can not define a type for constructor
  - A constructor always constructs a new object. You may want to share instances. For example, the Integer.valueOf factory method yields the same instance when you call it twice with the same small argument.

### The main method

- inpreview of Java 21 can have more than one main method

### Method parameters

- Java programming language always uses call by value (with object -> pass value is object reference )
  Summary:
- A method cannot modify a parameter of a primitive type (that is, number types, char, or boolean).
- A method can change the state of an object parameter.
- A method cannot make an object parameter refer to a new object.

## Object construction

### OverLoading

- overloading occurs if serveral methods have the same name in this case
- Java allows you to overload any method—not just constructor methods. Thus, to completely describe a method, you need to specify its name together with its parameter types. This is called the signature of the method.
- The return type is not part of the method signature. That is, you cannot have two methods with the same names and parameter types but different return types.

### Default Field Initialization

- If you don't set field explicitly in constructor, it is automaticaly set to a default value: number is 0, boolean is false and object reference is null

### Constructor with no arguments

- a constructor don't have to a parameters
- if class not have to a constructor -> instance field set to default

### initialize block , static initialize block

```java
   class Employee
{
   private static int nextId;

   private int id;
   private String name;
   private double salary;

   // object initialization block
   {
      id = nextId;
      nextId++;
   }

   public Employee(String n, double s)
   {
      name = n;
      salary = s;
   }

   public Employee()
   {
      name = "";
      salary = 0;
   }
   // static initialization block
   private static RandomGenerator generator = RandomGenerator.getDefault();
   static
   {
      nextId = generator.nextInt(10000);
   }
}
```

## Records (page 294,295)

### the record concept

A record is a special form of a class whose state is immutable and readable by the public. To declare a record, provide the name and the instance variables that hold the object state. Here is how you define Point as a record:

```java
   record Point(double x, double y){

   }

   // equivalent
   // private final double x;
   // private final double y;
   // The class has a constructor
   // Point(double x, double y)
   // and accessor methods
   // public double x()
   // public double y()
   // Instance fields of a record are automatically final
   ____________________________
   // can add owner method to record
   record Point(double x, double y)
   {
      public double distanceFromOrigin() { return Math.hypot(x, y); }
   }

   // can not add instance field to record
   record Point(double x, double y)
   {
      private double r; // ERROR
   }
   ______________
   // A record, like any class, can have static fields and methods:
    record Point(double x, double y)
   {
      public static Point ORIGIN = new Point(0, 0);
      public static double distance(Point p, Point q)
      {
         return Math.hypot(p.x - q.x, p.y - q.y);
      }
   }

```

Use a record instead of a class for immutable data that is completely represented by a set of variables. Use a class if the data is mutable, or if the representation may evolve over time. Records are easier to read, more efficient, and safer in concurrent programs.

### Constructor: Canonical, Compact, and custom

```java
   record Range(int from, int to)
   {
      public Range // Compact form, normalizing parameters

      {
         if (from > to) // Swap the bounds
         {
            int temp = from;
            from = to;
            to = temp;
         }
      }
   }
   record Range(int from, int to)
   {
      public Range(int from, int to) // legal, but more work than a compact constructor
      {
         if (from <= to)
         {
            this.from = from;
            this.to = to;
         }
         else
         {
            this.from = to;
            this.to = from;
         }
      }
   }
```

## Package

- Java allows you to group classes in a collection called package

### Package name

- Main reason to use package is guarantee the uniqueness of class names.
- guarantee a unique package name, use internaet domain name written in reverse. then use subpackage for different project
- From the compiler, no relationship between nested packages. ex: java.util and java.util.jar

### Class Importation

- A class can use all class from its own package and all public classes from other packages.
- Can access the public classes in another package in two ways.
  - The first is simply to use fully qualified name-> is package name followed by the class name. (shoud not be used)
  - use the import statement, ex: import java.time.\*;

### Static import

```java
   import static java.lang.System.out;
```

- so use can use the method and field of class but not need class name

### Addition of a class into a package

- To place classes inside a package, put the name of the package at the top of your source file, before the code that defunes the classes in the packages.( the structure of package is the same with the directory.)

```java
   package com.horstmann.corejava;

   public class Employee
   {
      . . .
   }
```

### Class Path

- Example: /home/user/classdir:.:/home/user/archives/archive.jar

### Setting class Path

- specify class path with option `-classpath` or `-cp` or `--class-path`
- `java -classpath /home/user/classdir:.:/home/user/archives/archive.jar MyProg`
- Using the -classpath option is the preferred approach for setting the class path. An alternate approach is the CLASSPATH environment variable. The details depend on your shell. With the Bourne Again shell (bash), use the command
  export CLASSPATH=/home/user/classdir:.:/home/user/archives/archive.jar

## Jar File (page 315)

### Creating JAR files

- `jar cvf jarFileName file1 file2...`
- General : jar options file1 file2 (315-316)

### Manifest (page 320)

- each jar file has manifest file describe jar file

## Document Command (page 330)

- Each /\*_ . . . _/ documentation comment contains free-form text followed by tags. A tag starts with an @, such as @since or @param.

### Class Comment

- must after import and before the class definition
- ....

## Class design hints

- Always keep data private
- Always initialize data
- Don't use too many basic types in a class
- Not all fields need individual field accessor and mutators
- Break up classes that have too many responsibilities
- Make the names of your classes and methods reflect their responsibilities.
- Prefer immutable class

# Inheritance

## Classes, Superclasses and Subclasses

### Defining subclasses

```java
   public class Manager extends Employee
   {
      add method and fields
   }
```

### Overriding methods

- user keyword `super(...argument)`

### Polymorphism

- a super class can refer to subclass, but in contrast, it not work and throw error
  example

```java
   class Manager extends Employee{

   }

   Employee staff[] = new Employee[3];
   var boss = new Manager();
   staff[0] = boss; // work well but staff[0] is employee, so it can't be use method of Manager class, but boss can
   // but if the method of Manager class override method of employee class -> it call method of Manager class
```

### UnderStanding Method call

- dynamic binding:
- a type object variable (reference value) and actual type of object

```java
   Employee e = new Manager();
   // e -> is reference of type Employee (reference type), but actually it refer to Manager object in memory , polimorphism
   // when you call method, e.work() -> it call method of actual object it refer to, -> so it call method work of Manager class (if work method of Manager is override work method of employee class), if if Manager class not have work() method -> compiler would be find in Employee Method -> dynamic binding.
```

### Preventing Inheritace

if you don't want a class can be inherted, you can declare a class with `final` keyword

### Casting

- is forcing convert from one type to another type

- surround another type in parenthese
  Ex:

```java
   double x = 3.456
   int y = (int) x;
   var staff = new Employee[3];
   staff[0] = new Manager();
   boss = (Manager) staff[0];
```

### Pattern Matching InstanceOf

```java
   // instead
   if (staff[i] instanceof Manager)
   {
      Manager boss = (Manager) staff[i];
      boss.setBonus(5000);
   }
   // do
   if(staff[i] instanceof Manager boss ){
      boss.setBonus(5000);
   }
```

## The cosmic superclass

### Varialbe of type object

- Only primitive type is are not object

### The equals Method

- to compare two object -> method equals in Object lass'

```java
   var emp1 = new Employee("MinhHieu",101);
   var emp2 = new Employee("MinhHieu",101);
   System.out.print(emp1.equals(emp2)) // TRue
   System.out.print(emp1 == emp2 ) // False

   //Example
   @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        MyClass myClass = (MyClass) obj;
        return id == myClass.id;
    }
```

### toString Method

- Whenever an object is concatenated with a string by the + operator, Java compiler automatically invokes the toString method to obtain a string reperesentation of the object.
- when you print the object -> it call toString Method
- Base object return <ClassName>@<HasCode>

### Hascode Method

- Base Object return hash code of memory address

## Generic Array Lists

- ArrayList is a generic class with type parameter. To specify the type of ArrayList hold, put it in angle bracket
  Ex:

```java
   ArrayList<Employee> emp = new ArrayList<Employee>(); // declare array with no fixed number element
   emp.ensureCapacity(100);  // -> set fixed element is 100
   emp.add(new Emp(....));   // -> add Element to array
   emp.size(); // return size
   emp.trimToSize() // fix number element of array is current number element of array
```

### Accessing Array List elements

```java
   emp.set(i, harry); // equivalent a[i] = harry;
   // to get element
   Employee e = staff.get(i);  // get element
   staff.set(i, emp);  // only set when staff have length >=i , if not, throw error IndexOutOfBoundsException:
   Employee e = staff.remove(n);  // remove an element
```

### Compatibility between Typed and Raw Array lists

```java
      public class EmployeeDB
   {
      public void update(ArrayList list) { . . . }
      public ArrayList find(String query) { . . . }
   }
   ArrayList<Employee> staff = . . .;
   employeeDB.update(staff);
   ArrayList<Employee> result = employeeDB.find(query); // yields warning
   @SuppressWarnings("unchecked") // use it for pass warning
   ArrayList<Employee> result = (ArrayList<Employee>) employeeDB.find(query);
   // yields another warning
   In a running program, all array lists are the same—there are no type parameters in the virtual machine. Thus, the casts (ArrayList) and (ArrayList<Employee>) carry out identical runtime checks.
```

## Object Wrappers and Auto Boxing

- Every primitive types have class counterparts.Example: class Integer -> int. These kinds of class are usually call wrappers.
- Wrapper class are immutable, they are also final, so you can't not subclass them.

```java
   var list = new ArrayList<Integer>();
   list.add(3) => list.add(Integer.valueOf(3))  // Auto Boxing
   int n = list.get(i).intValue();  // Unboxing
```

## Methods with a Variable Number of Argmument

```java
public static double max(double... values)
{
   double largest = Double.NEGATIVE_INFINITY;
   for (double v : values) if (v > largest) largest = v;
   return largest;
}
// like javaScript
```

## Abstract Class

- A class with one or more abstract methods must itself be declared abstract.

```java
   public abstract class Person{
      public abstract String getDescription(){System.out.println(staff.get(0));
        var testToArray = new Employee[staff.size()];
        staff.toArray(testToArray);
        System.out.println(testToArray[0]);
        Integer a = 1000;
        Integer b = 1000;
        System.out.println(a==b);
         
      }
   }
```

!Tip: A abstract class can have concrete methods

## Enumeration Class

```java
   public enum Size {
      SMALL("S"), MEDIUM("M"), LARGE("L"), EXTRA_LARGE("XL");

      private String abbreviation;

      Size(String abbreviation) {
         this.abbreviation = abbreviation;
      }

      public String getAbbreviation() {
         return abbreviation;
      }
   }
```

## Sealed classes

```java
   public abstract sealed class JSONValue
      permits JSONArray, JSONNumber, JSONString, JSONBoolean, JSONObject, JSONNull
   {

   }


   public class JSONComment extends JSONValue { . . . } // Error
   public sealed class Shape permits Circle, Square, Rectangle {
    // Common properties or methods for all shapes
   }

   public final class Circle extends Shape {
      double radius;
   }

   public final class Square extends Shape {
      double side;
   }

   public final class Rectangle extends Shape {
      double width, height;
   }

   // Pattern matching with sealed classes
   public String getShapeDescription(Shape shape) {
      return switch (shape) {
         case Circle c -> "Circle with radius " + c.radius;
         case Square s -> "Square with side " + s.side;
         case Rectangle r -> "Rectangle with width " + r.width + " and height " + r.height;
         default.....
      };
   }
```

## Pattern Matching

```java
   Employee e = . . .;
   String description = switch (e)
      {
         case Executive exec -> "An executive with a title of " + exec.getTitle();
         case Manager m -> "A manager who deserves a bonus";
         default -> "A lowly employee with a salary of " + e.getSalary();
      };

```

- Java 21 introduces unnamed variables: `case Employee __ -> "A lowly employee"`

### Null Handling

```java
   case null -> "No employee";
   case null, default -> "No free parking";
```

### GUARDs

```java
   Point p = . . .;
   String description = switch (p)
      {
         case Point(var x, var y) when x == 0 && y == 0 -> "origin";
         case Point(var x, var __) when x == 0 -> "on x-axis";
         case Point(var __, var y) when y == 0 -> "on y-axis";
         default -> "not on either axis";
      };
```

You can add a condition to a pattern called a guard, using the restricted when keyword.

### Exhaustiveness

- Any switch expression must be exhaustive: there must be a case for each possible selector value. This is an obvious requirement since the expression must always yield a value.
- Guarded pattern cannot be used for exhaustiveness checks
-

```java
   case Executive exec when exec.getTitle().getLength() >= 20 -> . . .
   case Executive exec when exec.getTitle().getLength() < 20 -> . . .
   // not work
```

## Dominance

- case after never read if case before always execute
-

## Reflection (Page 462)

## Design hints for Inheritance

- Place common operations and fields in the superclass
- Don't use protect field
- User inheritance to model the "is-a" relationship
- Don’t use inheritance unless all inherited methods make sense.
- Don’t change the expected behavior when you override a method.
- Use polymorphism, not type information.
- Don’t overuse reflection.

# Interfaces, Lambda Expressions and Inner Class

## Interfaces

### The interface concept

- Is a way of describing what classes should do it. A class can implement one or more interfaces.
  To makes a class implement an interface you carry out two steps
- You declare that your class intends to implement the given interface
- You supply definitions for all methods in the interfaces

### Properties of interfaces

- Interfaces are not class. Can't use new keyword to instantiate an interface
- even though can't construct interfaces object but you can still declare interface variables
- An interface variable must refer to an object of a class that implements the interfaces
- Just as methods in an interface are automatically public, fields are always public static final.

```java
   x = new Comparable(. . .); // ERROR
   Comparable x; // OK
   x = new Employee(. . .); // OK provided Employee implements Comparable
   if (anObject instanceof Comparable) { . . . }
   public interface Moveable
   {
      void move(double x, double y);
   }
   public interface Powered extends Moveable
   {
      double milesPerGallon();
   }
   public interface Powered extends Moveable
   {
      double milesPerGallon();
      double SPEED_LIMIT = 95; // a public static final constant
   }
```

### Interfaces and abstract classes

- a class can extends a class, but a class can implements multiple interfaces

### Static and Private method(527)

### Default Method

- you can supply a default method implementation for any interface method

```java
    public interface Comparable<T>
   {
      default int compareTo(T other) { return 0; }
         // by default, all elements are the same
   }
    public interface Iterator<E>
   {
      boolean hasNext();
      E next();
      default void remove() { throw new UnsupportedOperationException("remove"); }
      . . .
   }
   public interface Collection
   {
      int size(); // an abstract method
      default boolean isEmpty() { return size() == 0; }
      . . .
   }

```

### resolving default method conflict

Rule:

- Superclasses win. If a superclass provides a concrete method, default methods with the same name and parameter types are simply ignored.
- Interfaces clash. If an interface provides a default method, and another interface contains a method with the same name and parameter types (default or not), then you must resolve the conflict by overriding that method.
- class win

```java
   interface Person
   {
      default String getName() { return ""; }
   }

   interface Named
   {
      default String getName() { return getClass().getName() + "_" + hashCode(); }
   }
   class Student implements Person, Named { . . . }
   class Student implements Person, Named
   {
      public String getName() { return Person.super.getName(); } // solved
      . . .
   }

   // if one class provide a default and other not -> still error
   class Student extends Person implements Named { . . . } // class win -> choose method of class

```

### Interfaces and Callbacks

### Object Cloning

```java
   var original = new Employee("John Public", 50000);
   Employee copy = original;
   copy.raiseSalary(10); // oops--also changed original
   ____________________________
   Employee copy = original.clone();
   copy.raiseSalary(10); // OK--original unchanged
```

- if all instance fields of object is other basic types, copying the field is just fine. But the object contains references to subobject, the copying field gives you another reference to the same subobject
  ![Object clone](image/object_clone.png)

## Lambda expressions

### Syntax

```java
   (String first, String second) -> {
      first.length() - second.length();
   }
```

### Functional Interfaces(559)

You can supply a lambda expression whenever an object of an interface with a single abstract method is expected. Such an interface is called a functional interface

### Method References

```java
   var timer = new Timer(1000, event -> System.out.println(event));  // lambda
   var timer = new Timer(1000, System.out::println);  // method reference
```

### Contructor Reference

```java
   //For example, suppose we want to have an array of Person objects. The Stream interface has a toArray method that returns an Object array:

   Object[] people = stream.toArray();


   // But that is unsatisfactory. The user wants an array of references to Person, not references to Object. The stream library solves that problem with constructor references. Pass Person[]::new to the toArray method:
   Person[] people = stream.toArray(Person[]::new);
```

Constructor references are just like method references, except that the name of the method is new. For example, Person::new is a reference to a Person constructor

### Variable scope

- lambda expression is closure, but it can capture the value of variable, can't refer to changing variable, can't changing variable.

```java
   public static void countDown(int start, int delay)
   {
      ActionListener listener = event ->
         {

            start--; // ERROR: Can't mutate captured variable
            System.out.println(delay); // allowed
         };
      new Timer(delay, listener).start();
   }
   public static void repeat(String text, int count)
   {
      for (int i = 1; i <= count; i++)
      {
         ActionListener listener = event ->
            {
               System.out.println(i + ": " + text);
                  // ERROR: Cannot refer to changing i
            };
         new Timer(1000, listener).start();
      }
   }

```

### Processing Lambda Expression

If you design your own interface with a single abstract method, you can tag it with the @FunctionalInterface annotation.It is not required to use the annotation.

### Creating Comparators

The Comparator interface has a number of convenient static methods for creating comparators. These methods are intended to be used with lambda expressions or method references.

```java
Arrays.sort(people, Comparator.comparing(Person::getName));
Arrays.sort(people,
   Comparator.comparing(Person::getLastName)
      .thenComparing(Person::getFirstName));
   Arrays.sort(people, Comparator.comparing(Person::getName,
      (s, t) -> Integer.compare(s.length(), t.length())));

   Arrays.sort(people, Comparator.comparing(Person::getName,
   (s, t) -> Integer.compare(s.length(), t.length())));

   Arrays.sort(people, Comparator.comparing(Person::getName,
   Comparator.comparingInt(String::length)))
```

## Inner Class

- Inner class is class that defined inside another class
- Inner classes can be hidden from other classes in the same package.
- Inner class methods can access the data from the scope in which they are defined—including the data that would otherwise be private.

### Use of an Inner Class to Access Object State

An inner class object has a reference to an outer class object.
![Inner Class](image/inner_class.png)

```java
public void actionPerformed(ActionEvent event)
{
   System.out.println("At the tone, the time is "
      + Instant.ofEpochMilli(event.getWhen()));
   if (outer.beep) Toolkit.getDefaultToolkit().beep();
}
// The outer class reference is set in the constructor. The compiler modifies all inner class constructors, adding a parameter for the outer class reference. The TimePrinter class defines no constructors; therefore, the compiler synthesizes a no-argument constructor, generating code like this:
public TimePrinter(TalkingClock clock) // automatically generated code
{
   outer = clock;
}


```

### Special Syntax rules for inner classes

- actualy, the expression `OuterClass.this` denotes the outer class reference.

```java
public void actionPerformed(ActionEvent event)
{
   . . .
   if (TalkingClock.this.beep) Toolkit.getDefaultToolkit().beep();
}
```

- Conversely, you can write the inner object constructor more explicitly, using the syntax

```java
outerObject.new InnerClass(construction arguments);
```

- Note that you refer to an inner class as `OuterClass.InnerClass` when it occurs outside the scope of the outer class

### Local Inner Classes

- implement inner class in a funtion
- Local classes are never declared with an access specifier (that is, public or private). Their scope is always restricted to the block in which they are declared.

### Accessing Variables from Outer Methods

```java
   public void start(int interval, boolean beep)
{
   class TimePrinter implements ActionListener
   {
      public void actionPerformed(ActionEvent event)
      {
         System.out.println("At the tone, the time is " + Instant.ofEpochMilli(event.getWhen())); if (beep) Toolkit.getDefaultToolkit().beep();
      }
   }

   var listener = new TimePrinter();
   var timer = new Timer(interval, listener);
   timer.start();
}
```

beep local variable of start method

### Anonymous Inner Classes

```java
  var queen = new Person("Mary");
  // a Person object
var count = new Person("Dracula") { . . . initialization};
  // an object of an inner class extending Person
```

### Static class (605)

- The Java Language Specification uses the term “nested class” for any class that is declared inside another class or interface, “static class” for a (necessarily nested) static class, and “inner class” for a nested class that is not static.
- You should use a static class whenever a nested class does not need to access an outer class object.

## Service Loaders (611)

## Proxies (615)

# Exceptions, Assertiongs, and Loggings

## Exeptions

![Exception Hierachy](image/Exception_hierachy.png)(660)

- use try-catch to catching exception
- creating Expection: extend exception `class FileFormatException extends IOException`

Tips:

- Exception handling is not supposed to replace a simple test.
- Do not micromanage exceptions.
- Make good use of the exception hierarchy.
- Do not squelch exceptions.
- When you detect an error, “tough love” works better than indulgence.
- Propagating exceptions is not a sign of shame.
- Use standard methods for reporting null-pointer and out-of-bounds exceptions.
- Don't show stack traces to end users.

## Assertion

```java
   assert condition;
   and
   assert condition : expression;
```

### Assertion Enabling and Disabling

By default, assertions are disabled. Enable them by running the program with the -enableassertions or -ea option:
`java -enableassertions MyApp`

You can even turn on assertions in specific classes or in entire packages. For example:
`java -ea:MyClass -ea:com.mycompany.mylib... MyApp`
This command turns on assertions for the class MyClass and all classes in the com.mycompany.mylib package and its subpackages. The option -ea:... turns on assertions in all classes of the unnamed package.  
You can also disable assertions in certain classes and packages with the -disableassertions or -da option:
`java -ea:... -da:MyClass MyApp`

## Logging

```java
   System.Logger logger = System.getLogger("com.mycompany.myapp");
   logger.log(System.Logger.Level.INFO, "Opening file " + filename);

   // The record is printed like this:
   Aug 04, 2022 09:53:34 AM com.mycompany.myapp.Main read INFO: Opening file data.txt
```

With the import statement,you can shorten the levels:

```java
import static java.lang.System.Logger.Level.*;
logger.log(INFO, "Opening file " + filename);
    // Instead of System.Logger.Level.INFO
```

### Logging Configuration

You can change various properties of the backend by editing a configuration file. The default configuration file is located at conf/logging.properties in the JDK. To use another file, set the java.util.logging.config.file property to the file location by starting your application with
`java -Djava.util.logging.config.file=configFile MainClass`

# Generic Programming

-> Generic classes and methods have type parameters.

## Generic class

```java
   public Pair<T>{
      private T first;
      private T second;

      public T(){
         first = null;
         second = null;
      }

      public T (T first, T second){
         this.first = first;
         this.second = second;
      }
      public T getFirst() { return first; }
   }
   public class Pair<T, U> { . . . }
```

## Generic methods

```java
class ArrayAlg
{
   public static <T> T getMiddle(T... a)
   {
      return a[a.length / 2];
   }
}
String middle = ArrayAlg.<String>getMiddle("John", "Q.", "Public");
// compiler has enough information to infer method that you want so it equivalent
String middle = ArrayAlg.getMiddle("John", "Q.", "Public");
```

- Generic method can inside generic class or normal class

## Bound for type Variable

- The solution is to restrict T to a class that implements the Comparable interface

```java
public static <T extends Comparable> T min(T[] a) ...
//Now, the generic min method can only be called with arrays of classes that implement the Comparable interface, such as String, LocalDate, and so on.
```

A type variable can have multiple bounds. For example:

```java
    T extends Comparable & Serializable
```

## Generic Code and the Virtual Machine (725)

### Generic Record Patterns

Let us make our Pair class into a record:
`record Pair<T>(T first, T second) {}`

## Wildcard Types

In a wildcard type, a type parameter is allowed to vary. For example, the wildcard type
`Pair<? extends Employee> `

### Supertype Bounds for Wildcards

Wildcard bounds are similar to type variable bounds, but they have an added capability—you can specify a supertype bound, like this:
`? super Manager  `

## Restrictions and Limitations (750)

# Collections (790)

## The Java Collections Framework

### The collection interface

```java
   public inteface Collection<E>
   {
      boolean add(E element);
      Iterator<E> iterator();

   }
```

### Iterators

## Interfaces in the collections Framework

![Interfaces in the collections Framework](interface_collection.png)

## Algorithms

# Concurrency (930)

- what is different between multi process and multi thread?
- each process has a complete set of its own variables, threads share the same data

## Running Threads

```java
   package concurrency;

import java.time.Duration;
import java.util.TreeMap;
import java.util.concurrent.LinkedTransferQueue;

public class Main {
    private static final double MAX_AMOUNT = 10;
    private static final int STEPS = 10;
    private static final int DELAY = 2;
    public static void main(String[] args){
        Runnable r = () -> {
            try{
                for(int i =0;i <= STEPS;i++){
                    double amount = MAX_AMOUNT * Math.random();
                    BANK.transfer(0, 1, amount);
                    Thread.sleep((int) (DELAY * Math.random()));
                }
            }
            catch (InterruptedException e) {
                throw new RuntimeException(e);
            } ;

        };
        Runnable r_2 = () -> {
            try{
                for(int i =0;i <= STEPS;i++){
                    double amount = MAX_AMOUNT * Math.random();
                    BANK.transfer(2, 3, amount);
                    Thread.sleep((int) (DELAY * Math.random()));
                }
            }
            catch (InterruptedException e) {
                throw new RuntimeException(e);
            } ;

        };
        var t = new Thread(r);
        var t_2 = new Thread(r_2);
        t.start();
        t_2.start();


    }
}

```

## Thread state

![Thread state](image/Thead_state.png)

Thread can be in one of six states:

- New
- Runnable
- Blocked
- Waiting
- Timed Waiting
- Terminated

### New Thread

When you create a Thread with the new operator: new Thread(r)- The thread is not running -> new state

### Runnable Thread

Once you invoke the start method, the thread is in the runnable state.but A runnable thread may or may not actually be running. It is up to the thread scheduler to give the thread time to run. Regardless it may not actually running or still running

In java 21: have two kinds threads: platform threads and virtual threads

Java platform thread -> thread provided by the operating system , which schedule its execution
Vitual thread -> run on platform threads and are schedule by the java runtime

Each processor can run one platform thread at a time. On a machine with multi processor can run multi thread parrallel. If there are more runnable threads than available processors, some of them are not actually running. They need to be scheduled for execution.

### Blocked and Waiting Threads

## Thread properties

Virtual threads have the same API as platform threads. A simple way to create and start a virtual thread is:  
 `Thread t = Thread.startVirtualThread(myRunnable);`

The isVirtual method of the Thread class returns true when a thread is virtual.

### Thread inturrupted

InterruptedException chỉ được ném ra khi hai điều kiện đồng thời xảy ra:

Thread đang trong trạng thái chờ đợi (ví dụ: gọi Thread.sleep(), wait(), hoặc join()).
Thread bị interrupt bởi một thread khác qua phương thức interrupt()

### Thread Names and Ids

By default, threads have catchy names such as Thread-2. You can set any name with the setName method:
var t = new Thread(runnable);
t.setName("Web crawler");

### Thread prorities 

## Coordinating Tasks
### Callables and Futures
### Invoking a Group of Tasks
```java
   package executors;

import java.io.IOException;
import java.nio.file.*;
import java.time.Duration;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ExecutorDemo {
    /**
     * Counts occurrences of a given word in a file.
     * @return the number of times the word occurs in the given word
     */
    public static long occurrences(String word, Path path) throws IOException {
        try(var in = new Scanner(path)){
            int count = 0;
            while (in.hasNext())
                if (in.next().equals(word)) count++;
            return count;
        }
        catch(IOException ex){
            return 0;
        }
    }

    /**
     * Returns all descendants of a given directory
     * @param rootDir the root directory
     * @return a set of all descendants of the root directory
     */
    public static Set<Path> descendants(Path rootDir) throws IOException{
        try (Stream<Path> entries = Files.walk(rootDir)){
            return entries.filter(Files::isRegularFile).collect(Collectors.toSet());
        }
    }

    /** Yields a task that searches for a word in a file.
     * @param word the word to search
     * @param path the file in which to search
     * @return the search task that yields the path upon success
     */
    public static Callable<Path> searchForTask(String word, Path path){
        return () -> {
            try(var in = new Scanner(path)){
                while (in.hasNext()){
                    if(in.next().equals(word)) return path;
                    if(Thread.currentThread().isInterrupted()){
                        System.out.println("Search in " +path+ " cancel.");
                        return null;
                    }
                }
                throw new NoSuchElementException();
            }

        };
    }


    public static void main(String[] args) throws IOException, InterruptedException, ExecutionException {
        try(var in = new Scanner(System.in)){
            System.out.print("Enter base directory: (e.g. /opt/jdk-21-src): ");
            String start = in.nextLine();
            System.out.print("Enter keyword (e.g. volatile): ");
            String word = in.nextLine();
            Set<Path> files = descendants(Path.of(start));
            var tasks = new ArrayList<Callable<Long>>();
            for (Path file: files){
                Callable<Long> task = () -> occurrences(word,file);
                tasks.add(task);
            }
//            ExecutorService executor = Executors.newCachedThreadPool();
//            ExecutorService executor = Executors.newSingleThreadExecutor();
            ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();
            Instant startTime = Instant.now();
            List<Future<Long>> results = executor.invokeAll(tasks);
            Instant endTime = Instant.now();
            long total = 0;
            for(Future<Long> result: results){
                total += result.get();
            }
            System.out.println("Occurrences of " + word + ": " + total);
            System.out.println("Time elapsed: "            + Duration.between(startTime, endTime).toMillis() + " ms");
            var searchTasks = new ArrayList<Callable<Path>>();
            for(Path file: files){
                searchTasks.add(searchForTask(word,file));
            }
            startTime = Instant.now();
            Path found = executor.invokeAny(searchTasks);
            endTime = Instant.now();
            System.out.println(word + " occurs in: " + found);
            System.out.println("Time elapsed: "            + Duration.between(startTime, endTime).toMillis() + " ms");
            executor.close();
        }
    }



}

```

### Thread-Local Variables
Sometimes you want to make a task-specific object available to all methods that collaborate on the task, without having to pass the object as a parameter of each method call. You can use a thread-local variable for this purpose. This is not an actual variable, but an object whose get and set methods access a value that depends on the current thread.

```java
   public static final ThreadLocal<Connection> CONNECTION = new ThreadLocal<>();
   CONNECTION.set(connect(uri, username, password));
   Connection connection = CONNECTION.get();
   var result = connection.executeQuery(query);
   ...


   ////////////////////////////
   Scoped values are a preview feature of Java 21 that provide a more performant version of inheritable thread-local variables. Scoped values have per-thread instances, but they are immutable and have a bounded lifetime. Scoped values are inherited in virtual threads created by a StructuredTaskScope. This code snippet shows how to use them: 
      public static final ScopedValue<Connection> CONNECTION = ScopedValue.newInstance(); 
   . . .
   ScopedValue.where(CONNECTION, connect(uri, username, password)).run(() -> doWork());
   . . .
   public void doWork() {
      . . .
      Connection connection = CONNECTION.get();
      var result = connection.executeQuery(query);
      . . .
   } 
         When using virtual threads, prefer scoped values over thread-local variables.
```

### The Fork-Join Framework

if (problemSize < threshold)
{
   solve problem directly
}
else 
{
   break problem into subproblems
   recursively solve each subproblem
   combine the results
}

To put the recursive computation in a form that is usable by the framework, supply a class that extends RecursiveTask<T> (if the computation produces a result of type T) or RecursiveAction (if it doesn't produce a result). Override the compute method to generate and invoke subtasks and to combine their results. 
```java
    class Counter extends RecursiveTask<Integer>
{
   . . .
     protected Integer compute()
   {
      if (to - from < THRESHOLD)
      {
         solve problem directly
      }
      else
      {
         int mid = from + (to - from) / 2;
         var first = new Counter(values, from, mid, filter);
         var second = new Counter(values, mid, to, filter);
         invokeAll(first, second);
         return first.join() + second.join();
      }
   }
}
```

## Synchronization
- what happend if multi thread can access the same object in the same time (concurrent access) -> can orrcurs not correct 
how to manage -> Lock object and Condition Object
### Lock object & Condition
```java
   package synch;
import java.util.*;
import java.util.concurrent.locks.*;

public class Bank {
    private final double[] accounts;
    private final Lock bankLock = new ReentrantLock();
    private final Condition sufficientFunds = bankLock.newCondition();

    /**
     *  Constructs the bank.
     *  @param n the number of accounts
     *  @param initialBalance the initial balance for each account
     */
    public Bank(int n, int initialBalance) {
        accounts = new double[n];
        Arrays.fill(accounts, initialBalance);
    }

    /**
     * Transfers money from one account to another
     * @param from the account to transfer from
     * @param to the account to transfer to
     * @param amount the amount to transfer
    */
    public void transfer(int from, int to, double amount) throws InterruptedException {
        bankLock.lock();
        try{
            while(accounts[from] < amount) sufficientFunds.await();
            System.out.print(Thread.currentThread());
            accounts[from] -= amount;
            System.out.printf(" %10.2f from %d to %d", amount, from, to);
            accounts[to] += amount;
            System.out.printf(" Total Balance: %10.2f%n", getTotalBalance());
            sufficientFunds.signalAll();
        }
        finally {
            bankLock.unlock();
        }
    }


    /**
    * Gets the sum of all account balances
    * @return the total balance
    */
    public double getTotalBalance(){
        bankLock.lock();
        try{
            double sum = 0;
            for (double a: accounts) sum+= a;
            return sum;
        } finally {
           bankLock.unlock();
        }
    }

    /**
     * Gets the number of accounts in the bank.
     * @return the number of accounts
     */
    public int size(){
        return accounts.length;
    }

}
```

### Deadlocks
- conflict between another thread

### The synchronized keyword
instead of using an explicit lock, we can simply declare the transfer method of the Bank class as synchronized.

```java
public synchronized void method()
{
   method body
}
public void method()
{
   this.intrinsicLock.lock();
   try
   {
      method body
   }
   finally
   {  this.intrinsicLock.unlock();
   }
}

```
### Volatile Field
```java 
class Example {
    private volatile boolean flag = true;

    public void stop() {
        flag = false;  // Thread 1 modifies the flag
    }

    public void run() {
        while (flag) {  // Thread 2 will see the updated value
            // do work
        }
    }
}
```
### ETC.....( xem them khoang trang 1050)

## Processes (1110)
### Building a process


# Annotations (1114)
##  Defining Annotations
- Each annotation must be declared by an annotation interface, with the `@interface` syntax.
```java
   @Target(ElementType.METHOD)
   @Retention(RetentionPolicy.RUNTIME)
   public @interface RepeatedTest
{
   int failureThreshold();
   . . .
} 
```
- To specify a default value for an element, add a default clause after the method defining the element. For example,
```java
public @interface RepeatedTest
{
   int failureThreshold() default Integer.MAX_VALUE;
   . . .
} 
```

## Annotations in the Java API
The Java API defines a number of annotation interfaces in the java.lang, java.lang.annotation, and javax.annotation packages.



# The Java Platform Module System (1166)

** #JavaCoreV2 **

#  Streams
## From Iterating to stream operations

- Streams follow the “what, not how” principle.
- Streams seems superficially similar to collection, allowing you transform and retrieve data. but there are significant differences:
  - 1. Stream doesn't store its elements. They may be stored in an underlying collection or generated on demand.
  - 2. Stream operation don't mutated their source.
  - 3. Stream operations are lazy when possible. This means they are not executed until their result is needed.

```java
java.util.stream.Stream<T>
- Stream<T> filter(Predicate<? super T> p) 
   yields a stream containing all elements of this stream fulfilling p.   

- long count() 
   yields the number of elements of this stream. This is a terminal operation

java.util.Collection<E> 
- default Stream<E> stream() 
- default Stream<E> parallelStream() 
   yield a sequential or parallel stream of the elements in this collection.
```


## Stream creation
```java 
   package streams;


import java.io.IOException;
import java.lang.reflect.Field;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;
import java.util.regex.Pattern;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

public class CreatingStream {
    public static <T>  void show(String title, Stream<T> stream){
        final int SIZE = 10;
        List<T> firstElement = stream.limit(SIZE +1).toList();
        System.out.print(title + ": ");
        for(int i=0;i<firstElement.size();i++){
            if(i>0) System.out.print(", ");
            if(i<SIZE) System.out.print(firstElement.get(i));
            else System.out.print("...");
        }
    }

    public static void main(String[] args) throws IOException {
        Path path = Path.of("/home/ubuntu/Desktop/test");
        String content = Files.readString(path);
        Stream<String> words = Stream.of(content.split("\\PL+"));
        show("words", words);
        Stream<String> song = Stream.of("gently", "down", "the", "stream");
        show("song", song);
        Stream<String> silence = Stream.empty();
        show("silence", silence);
        Stream<String> echo = Stream.generate(() -> "Echo");
        show("echo", echo);
        Stream<Double> randoms = Stream.generate(Math::random);
        show("Randoms", randoms);
        Stream<String> greetings = "Hello \n Minh \n Hieu".lines();
        show("greetings" , greetings);

        Stream<String> wordsAnotherWay = Pattern.compile("\\PL+").splitAsStream(content);
        show("wordsAnotherWay", wordsAnotherWay);

        try (Stream<String> lines = Files.lines(path).limit(1))
        {
            show("lines", lines);
        }

        Iterable<Path> iterable = FileSystems.getDefault().getRootDirectories();
        Stream<Path> rootDirectories = StreamSupport.stream(iterable.spliterator(), false);
        show("rootDirectories", rootDirectories);

        Iterator<Path> iterator = Path.of("/usr/share/dict/words").iterator();
        Stream<Path> pathComponents = StreamSupport.stream(Spliterators.spliteratorUnknownSize(
                iterator, Spliterator.ORDERED), false);
        show("pathComponents", pathComponents);a
        Object[] power =  Stream.iterate(1.0, p-> p*2).peek(System.out::println).limit(20).toArray();
    }
}

```
## Filter, map , flatMap methods 

## The Optional type
```java
   package optional;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

public class OptionalTest {
    public static void main(String[] args) throws IOException {
        String content = Files.readString(Path.of("/home/ubuntu/Desktop/test"));
        List<String> words = List.of(content.split("\\PL+"));
        Optional<String> optionalValue = words.stream().filter(x -> x.contains("fred")).findFirst();
        System.out.println(optionalValue.orElse("No word") + " contains fred");
        Optional<String> optionalString = Optional.empty();
        String results = optionalString.orElse("N\\A");
        System.out.println("Result: " + results);
        results = optionalString.orElseGet(()-> Locale.getDefault().getDisplayName());
        System.out.println("Result: " + results);
        try{

            results = optionalString.orElseThrow(IllegalStateException::new);
            System.out.println("Results: " + results);
        }
        catch (Throwable t){
            t.printStackTrace();
        }

        optionalValue = words.stream().filter(x -> x.contains("red")).findFirst();
        optionalValue.ifPresent(s -> System.out.println(s + "contains red"));
        var result = new HashSet<String>();
        optionalValue.ifPresent(result::add);
        Optional<Boolean> added = optionalValue.map(result::add);
        added.ifPresent(System.out::println);

    }
}

```

## Collecting results
```java
   package collecting;

import java.io.File;
import java.io.IOException;
import java.io.StringReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;


public class CollectingResults {
    public static Stream<String> noVowels() throws IOException {
        String content = Files.readString(Path.of("/home/ubuntu/Desktop/test"));
        List<String> wordList = List.of(content.split("\\PL++"));
        Stream<String> words = wordList.stream();
        return words.map(s-> s.replaceAll("[aieouAIEOU]",""));
    };

    public static <T> void show(String label, Set<T> set){
        System.out.println(label+ ": " + set.getClass().getName());
        System.out.println("[" + set.stream().limit(10).map(Object::toString).collect(Collectors.joining(", ")) + "]");
    }

    public static Stream<String> getMaxWordLength() throws IOException {
        String content = Files.readString(Path.of("/home/ubuntu/Desktop/test"));
        List<String> wordList = List.of(content.split("\\PL++"));
        Stream<String> words = wordList.stream();
        return words.filter(s-> s.length() == 16);
    };

    public static void main(String[] args) throws IOException {
        Iterator<Integer> iter = Stream.iterate(0,n->n+1).limit(10).iterator();
        while (iter.hasNext()){
            System.out.println(iter.next());
        }

        Object[] numbers = Stream.iterate(0, n-> n +1).limit(10).toArray();
        System.out.println("Object Array: "+ Arrays.toString(numbers));

        try {
            var number = (Integer) numbers[0];
            System.out.println("Number: " + number);
            System.out.println("The following statement throws an exception:");
            var number2 = (Integer[]) numbers;
        }catch (ClassCastException e){
            System.out.println(e);
        }

        Integer[] numbers3 = Stream.iterate(0, n-> n+1).limit(10).toArray(Integer[]::new);
        System.out.println("Integer array: " + Arrays.toString(numbers3));

        Set<String> noVowelSet = noVowels().collect(Collectors.toSet());
        show("noVowelSet", noVowelSet);

        TreeSet<String> noVowelTreeSet = noVowels().collect(Collectors.toCollection(TreeSet::new));
        show("noVowelTreeSet", noVowelTreeSet);
        String result = noVowels().limit(10).collect(Collectors.joining());
        System.out.println("Joining: " + result);
        result = noVowels().limit(10)
                .collect(Collectors.joining(", "));
        System.out.println("Joining with commas: " + result);
        IntSummaryStatistics summary = noVowels().collect(
                Collectors.summarizingInt(String::length));
        double averageWordLength = summary.getAverage();
        double maxWordLength = summary.getMax();
        System.out.println("Average word length: " + averageWordLength);
        System.out.println("Max word length: " + maxWordLength);
        System.out.println("forEach:");
//        noVowels().limit(10).forEach(System.out::println);
        System.out.println(noVowels().filter(s -> s.length()==16).toList());


    }
}

```
## Collecting into Map

```java
   package collecting;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class CollectingIntoMaps {
    public record Person(int id, String name) {
    }

    ;

    public static Stream<Person> people() {
        return Stream.of(new Person(1001, "Minh Hieu"), new Person(1002, "Huong"), new Person(1003, "Tam"));

    }

    public static void main(String[] args) {
        Map<Integer, String> idToName = people().collect(Collectors.toMap(Person::id, Person::name));
        System.out.println("idToName: " + idToName.toString());
        Map<Integer, Person> idToPerson = people().collect(Collectors.toMap(Person::id, Function.identity()));
        System.out.println("idToPerson: " + idToPerson.getClass().getName() + " : " + idToPerson);
        idToPerson = people().collect(Collectors.toMap(Person::id, Function.identity(), (existValue, newValue) -> {
            throw new IllegalStateException();
        }, TreeMap::new));

        System.out.println("idToPerson: " + idToPerson.getClass().getName()
                + idToPerson);
        Map<String, String> languageNames = Locale.availableLocales().collect(
                Collectors.toMap(
                        Locale::getDisplayLanguage,
                        l -> l.getDisplayLanguage(l),
                        (existingValue, newValue) -> existingValue));
        System.out.println("languageNames: " + languageNames);
        Map<String, Set<String>> countryLanguageSets = Locale.availableLocales().collect(
                Collectors.toMap(
                        Locale::getDisplayCountry,
                        l -> Set.of(l.getDisplayLanguage()),
                        (a, b) ->
                        { // union of a and b
                            Set<String> union = new HashSet<>(a);
                            union.addAll(b);
                            return union;
                        }));
        System.out.println("countryLanguageSets: " + countryLanguageSets);

    }

}

```

## Grouping and Partitioning

```java
   Map<String, List<Locale>> countryToLocales = Locale.availableLocales().collect(
   Collectors.groupingBy(Locale::getCountry));
   List<Locale> swissLocales = countryToLocales.get("CH");
   // Yields locales de_CH, fr_CH, it_CH, and maybe more
   Map<Boolean, List<Locale>> englishAndOtherLocales = Locale.availableLocales().collect(
   Collectors.partitioningBy(l -> l.getLanguage().equals("en")));
   List<Locale> englishLocales = englishAndOtherLocales.get(true);

```


## DownStream Collectors (87v2)
```java
package collecting;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;
import java.util.stream.Stream;

import static java.util.stream.Collectors.*;

public class DownstreamCollectors {
    public record City(String name, String state, int population) {
    }

    ;

    public static Stream<City> readCities(String filename) throws IOException {
        return Files.lines(Path.of(filename)).map(l -> l.split(",")).map(a -> new City(a[0], a[1], Integer.parseInt(a[2])));
    }

    public static void main(String[] args) throws IOException {
//        Map<String, Set<Locale>> countryToLocaleSet = Locale.availableLocales().collect(groupingBy(Locale::getCountry, toSet()));
//        System.out.println("countryToLocaleSet: " + countryToLocaleSet);
        Map<String, Map<String, List<Locale>>> countryAndLanguageToLocale = Locale.availableLocales().collect(groupingBy(Locale::getCountry, groupingBy(Locale::getLanguage)));
        System.out.println("Hindi locales in India: "
                + countryAndLanguageToLocale.get("VN"));
//        Map<String,Long> countryToLocaleCount = Locale.availableLocales().collect(groupingBy(Locale::getCountry,counting()));
//        System.out.println("countryToLocaleCounts: " + countryToLocaleCount.get("VN"));
        Stream<City> cities = readCities("cities.txt");
        Map<String, Integer> stateToCityPopulation = cities.collect(groupingBy(
                City::state, summingInt(City::population)));
        System.out.println("stateToCityPopulation: " + stateToCityPopulation);
        cities = readCities("cities.txt");
        Map<String, Optional<String>> stateToLongestCityName = cities
                .collect(groupingBy(City::state,
                        mapping(City::name, maxBy(Comparator.comparing(String::length)))));
        System.out.println("stateToLongestCityName: " + stateToLongestCityName);

        Map<String, Set<String>> countryToLanguages = Locale.availableLocales().collect(groupingBy(
                Locale::getDisplayCountry, mapping(Locale::getDisplayLanguage, toSet())));
        System.out.println("countryToLanguages: " + countryToLanguages);

        cities = readCities("cities.txt");
        Map<String, IntSummaryStatistics> stateToCityPopulationSummary = cities
                .collect(groupingBy(City::state, summarizingInt(City::population)));
        System.out.println(stateToCityPopulationSummary.get("NY"));

        cities = readCities("cities.txt");
        Map<String, String> stateToCityNames = cities.collect(groupingBy(
                City::state,
                reducing("", City::name, (s, t) -> s.length() == 0 ? t : s + ", " + t)));

        cities = readCities("cities.txt");
        stateToCityNames = cities.collect(groupingBy(City::state,
                mapping(City::name, joining(", "))));
        System.out.println("stateToCityNames: " + stateToCityNames);

        cities = readCities("cities.txt");
        record Pair<S, T>(S first, T second) {
        }
        Pair<List<String>, Double> result = cities.filter(c -> c.state().equals("NV"))
                .collect(teeing(
                        mapping(City::name, toList()), averagingDouble(City::population),
                        Pair::new));
        System.out.println(result);

    }

}

```

## Reduction operations
``` java
   List<Integer> values = List.of(1,2,3,4);
        Optional<Integer> sum = values.stream().reduce((x,y) -> x +y);
        System.out.println(sum.get());
   int result = words.reduce(0, 
   (total, word) -> total + word.length(), 
   (total1, total2) -> total1 + total2);     
```
## Parallel Streams 

# Input and Output

# XML (312)

## The XML Structure

An XML Structure should be start with header such as (Optional )
```xml
   <?xml version="1.0"?> or <?xml version="1.0" encoding="utf-8"?>
```
<?xml version="1.0">

- Character references have the form &#decimalValue; or &#xhexValue
   - For example,&#233; &#xE9;

- Entity references have the form &name;
  - &lt; &gt; &amp; &quot; &apos;

- Processing instructions are instructions for applications that process XML documents. They are delimited by <? and ?>,
  -  for example: <?xml-stylesheet href="mystyle.css" type="text/css"?> 
- Comments are delimited by <!-- and -->, 
  - for example <!-- This is a comment. -->
        

# Networking

## Connecting to Servers
### Using telnet
### Using Java
A socket is one endpoint of a two-way communication link between two programs running on the network. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to.
```java
package socket;

import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;

public class SocketTest {
    public static void main(String[] args) throws IOException {
        try(var s = new Socket("time-a.nist.gov",13)){
            s.setSoTimeout(1000);
            var in = new Scanner(s.getInputStream());
            while (in.hasNextLine()){
                String line = in.nextLine();
                System.out.println(line);
            }
        }
    }
}
```

### Socket Timeout 
```java
var s = new Socket(. . .);
s.setSoTimeout(10000); // time out after 10 seconds
```

### Internet Address
```java
package inetAddress;

import java.io.*;
import java.net.*;

{
   public static void main(String[] args) throws IOException
   {
      if (args.length > 0)
      {
         String host = args[0];
         InetAddress[] addresses = InetAddress.getAllByName(host);
         for (InetAddress a : addresses)
            System.out.println(a);
      }
      else
      {
         InetAddress localHostAddress = InetAddress.getLocalHost();
         System.out.println(localHostAddress);
      }
   }
}
```

### Implementing Servers   
```java
package server;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class EchoServer {
    public static void main(String[] args) throws IOException {
        int port = args.length > 1 ? Integer.parseInt(args[0]): 8189;
        try (var s = new ServerSocket(port);
             Socket incoming = s.accept()){
             serve(incoming);
        }
    }

    public static void serve(Socket incoming) throws IOException {
        try(var in = new Scanner(incoming.getInputStream());
            var out = new PrintWriter(incoming.getOutputStream(),true);
        ){
            out.println("Hello! Enter Bye to exit.");
            boolean done = false;
            while (!done && in.hasNextLine()){
                String line = in.nextLine();
                out.println("Echo: " + line);
                if(line.strip().equals("BYE")){
                    done= true;
                }
            }
        }
    }
}

```
### Serving Multiple Client 
```Java
   package server;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class EchoServer {
    public static void main(String[] args) throws IOException {
        int port = args.length > 1 ? Integer.parseInt(args[0]): 8189;

        try (var s = new ServerSocket(port)){
            int i = 1;
            ExecutorService service = Executors.newVirtualThreadPerTaskExecutor();
            while (true){
                Socket incoming = s.accept();
                System.out.println("Spawning: " + i);
                service.submit(() -> serve(incoming));
                i++;
            }
        }
    }

    public static void serve(Socket incoming){
        try(var in = new Scanner(incoming.getInputStream());
            var out = new PrintWriter(incoming.getOutputStream(),true)
        ){
            out.println("Hello! Enter Bye to exit.");
            boolean done = false;
            while (!done && in.hasNextLine()){
                String line = in.nextLine();
                out.println("Echo: " + line);
                if(line.strip().equals("BYE")){
                    done= true;
                }
            }
        }
        catch (IOException e){
            e.printStackTrace();
        }
    }
}



```

































































