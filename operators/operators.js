"use strict";
// why we use operators
// operators are used to perform operations on variables
// Arithmatic
// its types are  addition(+), subtraction(-), multiplication(*), division(/), modulus(%),exponentiation(**)
let num1 = 3;
let num2 = 9;
console.log(num1 + num2); // addition
console.log(num1 - num2); // subtraction
console.log(num1 * num2); // multiplication
// console.log(num1 / num2); // division
// it solve this as  0.3333333333333333 because  it return float number 
console.log(num1 % num2); // modulus(correct division)
console.log(num1 ** num2); // exponentiation
// Assignment
// its types are  addition assignment(+=), subtraction assignment(-=), multiplication assignment(*=),
// division assignment(/=), modulus assignment(%=), exponentiation assignment(**=)
let a = 5;
let b = 10;
a += b; // a = a + b
console.log(a); // 15
a -= b; // a = a - b
console.log(a); // 5
a *= b; // a = a * b
console.log(a); // 50
a /= b; // a = a / b
console.log(a); // 5
a %= b; // a = a % b
console.log(a); // 5
a **= b; // a = a ** b
console.log(a); // 9765625
// Comparison
// its types are  greater than(>), less than(<), greater than or equal to(>=), less than or equal to(<=),
//  equal to(==), not equal to(!=)
let x = 10;
let y = 5;
console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false
console.log(x == y); // false
console.log(x != y); // true
// Logical operators
// its types are  logical AND(&), logical OR(|), logical NOT(!), logical XOR(^), logical AND AND (&&), 
// logical  OR OR(||)
let z = 5;
let w = 10;
console.log(z == w && z <= w);
console.log(z == w || z <= w);
console.log(!(z == w));
// console.log(z ^ w);
// console.log(z && w);
// console.log(z || w);
// Bitwise operators
