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
// / ?Examples

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let k = 10; k >= 1; k--){
    console.log(k)
}
let k = 1;
while (k <= 10) {
    console.log(k)
    k++
}

let p = -30;
while (p <= 30){
    console.log(p)
    p = p + 15
}
let c = 1;
do {
    console.log(c)
    c++
} while (c <= 10)


    // break
    for (a = 1;a <= 10; a++) {
        if (a === 6) {
            break
        } else
        console.log(a)
    }

    // 5*1

    let num1 = 5
for (let b = 1;b <= 12; b++) {
    console.log(num1 + " x " + b +" = " + (num1 * b))
}






// single if statemet
let userAge = 18;

if (userAge >= 18);{
    console.log("You are an adult")
}

// if..else statement

let MyNum = 100;
if (MyNum >= 20){
    console.log(MyNum + " is greater than 20")
}else{
    console.log(MyNum + " is less than 20")
}

// if.. else... if... else

let myothernum = 5;

if (myothernum > 5) {
    console.log("5 is graeter than 5")

} else if (myothernum < 5) {
    console.log("5 is less than 5")

} else if (myothernum == 5) {
    console.log("5 is equal to 5")

} else {

}

// switch
let Favcolor = 'Green'

switch (Favcolor) {
    case 'nlue':
        console.log("Your favourite color is blue");
        break;
        case 'Red':
            console.log("Your favourite color is red");
            break;
        case 'Green':
            console.log("Your favourite color is Green");
            break;
        default:
            console.log("We dont know your favourite color");
}

// write a JavScript program that converts temperatures to celcius.  if temperature is below zero 0, prints freezing if between 0 and 30 print cold if between 30 and 60 print warm if its above 60 print hot

let temp = 0;
let Newtemp = (temp- 32) * 5 / 9;
if (Newtemp < 0) {
    console.log('Freezing')
} else if(Newtemp < 30) {
    console.log('Cold')
} else if (Newtemp < 60) {
    console.log('Warm')
} else {
    console.log('Hot')
}

// program that prints he day of the week using switch statement  switch variable should be integer 1-7
let day = 5;
switch (day){
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monady")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Insert a number between 1 and 7")

}






// 3.Break and repeat statements

// break statement exits the current loop or the switch statements
// continue statement: skips the current iteration of a loop and moves to the next iteration

// The control flow statements allow you to craete complex logics and algorithms in your JavaScript codes




// 2.4 functions
// they are reusable blocks of code that perform a specific task.

// Function declaration
// function functionName(psrsm1, param2,...){
//     // Function Body
//     return value
// }

function greetings() {
    console.log('Hello Everyone');
}

greetings()

function addnumber() {
    let n1 = 3
    let n2 = 7
    let sum = n1 + n2
    console.log("The sum is:  " + sum)
}

addnumber()

function addtwonumbers(x,y) {
    let sum = x + y
    console.log("the sum is: " + sum)

}

addtwonumbers(910,20)

function dispalyusername(username){
    return username
}

console.log(dispalyusername("Khalid"))


// function that takes a yeat as argument and returns true if the year is leap year and false if otherwise. a leap year is divisible by 4
function year(_leap) {
    if ((_leap % 4 === 0 && _leap !== 0) || _leap % 400 === 0) {
        return true

    } else {
        return false
    }

}

console.log(year(2024)) 
console.log(year(2014))
console.log(year(2019))
console.log(year(2094))

// Arrays

// Arrays in javascript are used to store ordered collection of values.
// Arrays can contain values of different of different data types including objects and other arrays(Multioi-dimensional arrays)
// 1.Creating and assigning arrays
// const arr = [value1,value2,valueN]

// const emparr = [];

const fruits = ['apple','banana','orange']

const numbers = [1,2,3,4,5]

const mixed = ['hello',43,true,null]



// 2.Array Methods
// push() and pop(-ADD AND REMOVE FROM THE END OF THE ARRAY)


// sHIFT() AND UNSHIFT()-ADDING AND REMOVING AT THE BEGINNING OF AN ARRAY



// slice()-Returns a shallow copyof a portion of an array


// splice()-changes the contents of an array by removing or replacing existing elements and or adding elements

// concat()-merges two or more arrays together and returns a new array


// indexOf() and lastIndexOf-Returns the index of the first or last occurrence of a specified elemnt in the array

// includes( determines whether an array includes a certain value)
// reverse-recerses the order of array elemnts

// sort-sorts the array elemnts in place

// map() filter() and reduce()-high order functions for transorming and manipulating arrays
// push
fruits.push('grape')
console.log(fruits)
// pop
fruits.pop()
console.log(fruits)
// unshift
fruits.unshift('kiwi')
console.log(fruits)
// shift
fruits.shift()
console.log(fruits)

// slice
let slicedarray = fruits.slice(1, 3)
console.log(slicedarray)

// splice
fruits.splice(1,1,'pears')
console.log(fruits)

// concat
let newarray = ['mango','pineapple']
var combinedarray = fruits.concat(newarray)
console.log(combinedarray)

// 3.Array iteration
// Foreach()- executes a provided function once for each array element.
// map() creates a new array with the rseults of calling a provided function on every elemnt of the original array
// filter() creates a new array with all ements that pass the tests implemented function
// Reduce() -applies a function against an accumulator and each element of the array to reduce it to a single value

// /foreach

fruits.forEach(fruits => [
    console.log(fruits)
])

const doublenumber = numbers.map(num => num * 2)
console.log(doublenumber)

const evennumbers = numbers.filter(num => num % 2 ===0)
console.log(evennumbers)

// reduce()

const sum = numbers.reduce((acc, num)=> acc + num, 0)
console.log(sum)

// objects
// objects in javascript are unordered collection of key value parts
// they are used to store complex data structures and real world entities

// 1.object literal
// const obj = {
//     key1:value1,
//     key2: value2,
//     keyend:valueend,
// }

const person1 = {
    name: 'Khalid',
    age: 18,
    greet: function() {
        console.log(`hello, my name is ${this.name}`)
    }
    
}


// // access and modify object properties

// // dot notation
// obj.key1
// // bracket notation
// obj['key2']
console.log(person1.name)
person1.age = 50;
console.log(person1)
person1.occupation = 'software developer'
console.log(person1)
// // adding a new property
// obj.newkey = newvalue;


// // delete a property
// delete obj.key2;

// object methodsc
// const obj = {
//     method1: function() {
//             // method body
//     },
//     method2() {
//             // method body(shorthand sysntax)
//     }
// }
person1.greet()
// 4.the 'this' keyword
// /the this keyword refers to the current object context.its value depends on how the function is caled


    







    
