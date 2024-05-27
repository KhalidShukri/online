// Topic 2:Basics of JavaScript

// 2.1 Variables and Data Types
// Variables are used to store data i Javascript
// Variables are declared using the :

// `var
// let
// const

// The let and const keywords were introduced in ECMAScript 6(ES 6) and provide block level scoping and contant declaration respectively

// JavaScript has several built-in data types including:

// 1.Primitve data types
// ->numders(both integers and floating point numbers
// ->String(sequence of characters
// ->Boolean(true or false
//->undefined(value assigned to uninitialixed variable)
// ->null(non-existent or ivalid values)
// ->Symbol(unique and immutable identifier introduced in ES6)
// ->BIGINT(ARBITRARY PRECISION INTEGERS, INTRODUCED IN es2023)

// 2.Non-primitive data types
// ->Object(collection of key-value pairs)
// ->function(reusable blocks of code)

// JavaScript is a dynamically-typed language,meaning that variables can hold valuies of different types, and their types can change during run-time

// Declaring variable

let age = 25;    
const name = "Khalid Shukri";
var isStudent = true;


// Data Types

// objects
const person = {
    name:'Khalid',
    age:20
}

// function
const greetuser = function(){
console.log("Hello JvaScript")
}

// null
let value = null;

// ?undefined
let undefinedValue;

// symbol
const sym = Symbol('unique')

// ?Bigint

const bigNum = 9004473645665n;

// output/display the value to yhe console

console.log(bigNum);

console.log(sym);

// 2.2:Operators

// JavaScript provides various operators for performing operations on values and also the variables themselves
// These include:

// a.Arithmetic operators
// addition,+
// subtractiopn,-
// Multiplication.*
// division,/
// modulus(rEMAINDER OF AN EQUATION)%,
// **(exponentiation, introduction in ES6)

// B.ASSIGNMENT OPERATORS
// aSSIGNMENT,=
// +=
// -=
// *=
// /=
// **=

// C.comparisson operators
// equal to ==
// identical to ===
// not equal to!=
// not identical to !==
// greater than >
// less than <
// Greatter than or equal to >=
// less tha or equal to <=

// d.logical operators
// And &&
// or ||
// not !

// e. conditional (ternary) operators
// comdition ? valurIfTrue : valueIfValue

// f. comma operator
// expression1, expression2, .....expression N


// g.unary operators
// increment ++
// decrement --
// typeof
// void
// delete

// Operator precedence and associativity determine the order in which operations are performed when multiple  are prsent in an expression


// Operators Example

// Create two variabels

let x = 5;
let y = 3

// Arithmetic operators
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y) 
console.log(x ** y) 

// Assignment Operators

x += y; 
// same as x= x+y, the new x=8
console.log(x)


y -= 2;
// same as y=y-2 so y=1

console.log(y);
// compariosn operators
console.log(x > y);
console.log(x === y);
console.log(x !== y);


// logical operators
let z = 10;
// And(returns true if both operands evaluate as true)
console.log((x > y) && (y < z));

// Or (returns true if one of the operands return tru)
console.log((x > y) || (y > z));

// ?Not (negates an expression)
console.log(!(x === y));

// 2.3. cONTROL fLOW
// cONTROL FLOW STATEMENTS ALLOW YOU TO CONTROL THE ORDER OF EXECUTION OF YOUR CODE BASED ON CERTAIN CONDITIONS OR LOOPS

// 1. cONDITIONAL STATEMENTS
// if...else statement: Executes a block of code
// if...else if...else
// switch statement:evaluates an expression and executes the associated block of code on matching cases
// 2.loops 
// for loop:executes a block of code a specific number of times based on a counter variable
// while loop:executes a block of code as long as a specified condition is true
// do...while:similar to while loop but the code block is executed atleast once before checking the condition


// 3.Break and repeat statements

// break statement exits the current loop or the switch statements
// continue statement: skips the current iteration of a loop and moves to the next iteration

// The control flow statements allow you to craete complex logics and algorithms in your JavaScript codes

// ?Examples



// 2.4 functions







    
