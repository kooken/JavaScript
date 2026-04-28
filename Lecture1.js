// VARIABLES AND DATA TYPES

// ----- DECLARING VARIABLES -----

/*
var - old way (function-scoped, avoid in modern JS)
let - modern way for values that can change
const - modern way for values that should NOT change (most of the time, prefer const)
*/

var oldStyle = "I'm declared with var"; // function-scoped, can be re-declared
let changeable = "I can be reassigned";
const fixed = "I cannot be reassigned";

changeable = "See? I was reassigned";
// fixed = "This would throw an error"; // TypeError: Assignment to constant variable

console.log(oldStyle);
console.log(changeable);
console.log(fixed);

// ----- PRIMITIVE DATA TYPES -----

/*
JavaScript has 7 primitive types:
1. string    - text
2. number    - integers and floats (no separate int/float types)
3. boolean   - true or false
4. undefined - variable declared but not assigned
5. null      - intentionally empty value
6. bigint    - very large integers (rarely needed)
7. symbol    - unique identifier (advanced, rarely needed)
*/

let myString = "Hello, JavaScript!";
let myNumber = 42;
let myFloat = 3.14;
let myBoolean = true;
let myUndefined; // declared but not assigned — value is undefined
let myNull = null; // intentionally empty

console.log(myString);
console.log(myNumber);
console.log(myFloat);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);

// ----- TYPEOF OPERATOR -----
// typeof returns the data type of a value as a string

console.log(typeof myString);   // "string"
console.log(typeof myNumber);   // "number"
console.log(typeof myFloat);    // "number" - both ints and floats are "number"
console.log(typeof myBoolean);  // "boolean"
console.log(typeof myUndefined);// "undefined"
console.log(typeof myNull);     // "object" — this is a known quirk of JavaScript!

// ----- SPECIAL NUMBER VALUES -----

console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity
console.log("text" / 2);     // NaN (Not a Number)
console.log(typeof NaN);     // "number" — another JS quirk: NaN is of type number
console.log(isNaN("text" / 2)); // true — use isNaN() to check for NaN

// ----- STRINGS -----

let single = 'Single quotes work';
let double = "Double quotes work";
let backtick = `Backticks work too — and allow template literals`;

// Template literals (backticks) let you embed expressions directly
let name = "Maria";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
console.log(`Next year I will be ${age + 1}.`);

// Strings are immutable — you can't change a character in place
let word = "hello";
// word[0] = "H"; // this silently does nothing in non-strict mode
let capitalized = "H" + word.slice(1); // you create a new string instead
console.log(capitalized); // "Hello"

// ----- NAMING CONVENTIONS -----

/*
- Use camelCase for variables and functions: myVariable, getUserName
- Use UPPER_SNAKE_CASE for constants that are true configuration values: MAX_SIZE, API_URL
- Names are case-sensitive: myVar and myvar are different variables
- Names can include letters, digits, _ and $, but cannot START with a digit
- Avoid single-letter names (except loop counters like i, j)
*/

const MAX_RETRIES = 3;
let userFirstName = "Anna";
let $price = 9.99; // $ is valid but unusual — often seen in jQuery code

console.log(MAX_RETRIES);
console.log(userFirstName);
console.log($price);

// ----- MULTIPLE ASSIGNMENT -----

let x = 1, y = 2, z = 3; // declare multiple variables in one line (readable for related values)
console.log(x, y, z);

// Swap two variables using a temporary variable
let a = "first";
let b = "second";
let temp = a;
a = b;
b = temp;
console.log(a, b); // "second" "first"

// Modern swap using destructuring (covered in Lecture6.js)
[a, b] = [b, a];
console.log(a, b); // "first" "second" (back to original)
