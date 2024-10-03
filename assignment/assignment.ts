// Q1: Voting Eligibility
let age1 = 20;
if (age1 >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}

// Q2: Comparison Operator
let a1 = 5;
let b1= 3;
if (a1 > b1) {
  console.log("a is greater than b.");
} else {
  console.log("a is not greater than b.");
}

// Q3: Student Welcome
let isStudent = true;
if (isStudent) {
  console.log("Welcome, student!");
} else {
  console.log("Access restricted.");
}

// Q4: Even/Odd Check
let num = 7;
if (num % 2 === 0) {
  console.log(num + " is even.");
} else {
  console.log(num + " is odd.");
}

// Q5: Personalized Greeting
let firstName = "Maryam";
console.log("Hello, " + firstName + "! How are you?");

// Q6: Largest Number
let x2= 10;
let y2 = 20;
let z2 = 15;
let largest = x2;
if (y2 > largest) largest = y2;
if (z2 > largest) largest = z2;
console.log("The largest number is " + largest + ".");

// Q7: Morning Greeting
let greeting = "Good morning";
let name1 = "Ali";
console.log(`${greeting},${name1}`);

// Q8: Umbrella Check
let isRaining1 = false;
if (isRaining1) {
  console.log("Take an umbrella!");
} else {
  console.log("Enjoy the sun!");
}

// Q9: Arithmetic Operations
let n1 = 8;
let n2 = 4;
console.log("Addition: " + (n1 + n2));
console.log("Subtraction: " + (n1 - n2));
console.log("Multiplication: " + (n1 * n2));
console.log("Division: " + (n1 / n2));

// Q10: Grade Assignment
let marks = 85;
let grade;
if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else if (marks >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade: " + grade);
