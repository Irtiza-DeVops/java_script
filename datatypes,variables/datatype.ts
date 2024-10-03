console.log("hello World");
let MyName = "irtiza";
console.log(MyName);
// rule to declare var
// number
// it is used to  declare a number

let age:Number = 9;
let num_1 = 2;
let $num_2 = 5;
// string
 // it is used to declare a string


let person = "irtiza";
console.log(person);
// bolean
 // it is used to declare a boolean

let isTrue:boolean = true;
let isFalse:boolean = false;
console.log(isTrue, isFalse);
// undefined
 // it is used  to declare a undefined


let unassigned;
let myUndefined: undefined = undefined;
console.log(myUndefined);




// explicit(the fine way to show data type)
// it is used to  show the data type of the variable


let explicitNumber:number = 9;
console.log(explicitNumber);
let explicitString:string = "irtiza";
console.log(explicitString);
let explicitBoolean:boolean = true;

console.log(explicitBoolean);
// implicit(dont show or represent data type)
// it is used to declare a variable without showing the data type

let implicitNumber = 9;
console.log(implicitNumber);
let implicitString = "irtiza";
console.log(implicitString);
let implicitBoolean = true;
console.log(implicitBoolean);
// null
 // it is used to declare a null value
 // its syntax is  let variableName: datatype = null;
 // it is used to declare a variable and assign it the value of null
 // it is used when we want to explicitly declare a variable and set it to a specific value
 // it is used when we want to make sure that a variable will never hold a value that is not defined or null
 // it is used when we want to make sure that a variable will always hold a value that is of a specific type
let myNull: null = null;
console.log(myNull);



// template leteral syntax
 // it is used to declare a variable and assign it a value that is a string with embedded expressions
 // it is used when we want to declare a variable and set it to a specific value
 // it is used when we want to make sure that a variable will always hold a value that is a string with embedded expressions
 // it is used when we want to make sure that a variable will always hold a value that is of a specific type
let myName:string= "irtiza";
let my_age = 15;
let myTemplate = `my name is ${myName} and my age is ${my_age}`;
console.log(myTemplate);


// array (it may be str or num  or boolean etc)
// its syntax is  like this : let arrayName:datatype[] = [value1,value2,value3];

let myArray: number[] = [1,2,3,4,5];
console.log(myArray);
let myArray2: string[] = ["a","b","c"];
console.log(myArray2);

// tuple (fixed length and type of array)
// its syntax is   like this : let arrayName:[datatype1,datatype2,datatype3] = [value1,value2,value3]
// it is used to  store multiple values in a single variable


let myTuple: [number,string,boolean] = [10,"irtiza",true];
console.log(myTuple);

// any (it may be str or num  or boolean etc)
 // its syntax is  let variableName:any = value;
 // it is used to declare a variable and assign it a value that can be of any type
 // it is used when we want to declare a variable and set it to a specific value
 // it is used when we want to make sure that a variable will always hold a value that can be of any type
 // it is used when we want to make sure that a variable will always hold a value that is of a specific type
let myAny: any = 10;

myAny = "irtiza";

console.log(myAny);

// enum (it may be str or num  or boolean etc)
 // its syntax is  like this : enum variableName {value1,value2,value3}
 // it is used to declare a variable and assign it a value that is a number
 // it is used when we want to declare a variable and set it to a specific value
 // it is used when we want to make sure that a variable will always hold a value that is a number
 // it is used when we want to make sure that a variable will always hold a value that is of a specific type
 enum Color {Red,Green,Blue};
 let myColor: Color = Color.Red;
 console.log(myColor);

