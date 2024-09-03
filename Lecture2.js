// Operations with strings
let firstPhrase = 'Hello world!';
console.log(`My first phrase in JavaScript is "${firstPhrase}"`);
console.log("The length of this phrase is", firstPhrase.length, "symbols");
console.log("The type of this variable is", typeof firstPhrase);
console.log(`The 0 index of this phrase is "${firstPhrase[0]}"`);
console.log(`The 6 index of this phrase is "${firstPhrase[6]}"`);
console.log(`Modified phrase to lower case is "${firstPhrase.toLowerCase()}"`);
console.log(`Modified phrase to upper case is "${firstPhrase.toUpperCase()}"`);

// Math operators

let a = 8;
let b = 3;

console.log(`a is number ${a}`)
console.log(`b is number ${b}`)
console.log(`Result of the addition a to b is ${a + b}`); // addition
console.log(`Result of the substraction b from a is ${a - b}`); // substraction
console.log(`Result of the a and b multiplication is ${a * b}`); // multiplication
console.log(`Result of the a and b division is ${a / b}`); // division
console.log(`Remainder of the a and b division is ${a % b}`); // remainder of the division
console.log(`Result of the a sign change is ${a *= -1}`); // change sign to negative
console.log(`The result of subtracting 1 from the number b (now ${b}) with -- operator is ${-- b}`); // -- operator
console.log(`The result of adding 1 to the number b (now ${b}) with ++ operator is ${++ b}`); // ++ operator
console.log(`The result of dividing the number b (now ${b}) by 0 is ${b / 0}`) // division by 0
console.log(`Type of the result of dividing the number by 0 is ${ typeof (b / 0)}`) // type of division by 0
console.log(`isFinite method with division the number by 0 is ${ isFinite (b / 0)}`) // isFinite method
console.log(`isFinite method with division the numbers by each other is ${ isFinite (a / b)}`) // isFinite method

// Comparison operators

let c = 5;
console.log(`c is number ${c}`)
bool = (c == 5);
console.log("Is c equal to 5? The answer is", bool); // using not strict operator '==' that compare only values
bool = (c == '5');
console.log("Is c equal to '5'? The answer is", bool); // using not strict operator '==' that compare only values
bool = (c === 5);
console.log("Is c equal to 5? The answer is", bool); // using strict operator '===' - compare values AND data types
bool = (c === '5');
console.log("Is c equal to '5'? The answer is", bool); // using strict operator '===' - compare values AND data types

let d = "5";
let e = -10;
let f = "c";
let g = "C";
console.log(`Is ${d} equal to 5? The answer is ${d == 5}`); // using not strict operator
console.log(`Is ${d} equal to 5? The answer is ${d === 5}`); // using strict operator
console.log(`Is ${e} NOT equal to "-10"? The answer is ${e != "-10"}`); // using not strict operator
console.log(`Is ${e} NOT equal to "-10"? The answer is ${e !== "-10"}`); // using strict operator
console.log(`Is ${f} equal to ${g}? The answer is ${f == g}`); // using not strict operator
console.log(`Is ${f} equal to "c"? The answer is ${f === "c"}`); // using strict operator

let h = 3;
let k = 7;
console.log(`h is number ${h}`)
console.log(`k is number ${k}`)
console.log(`Is h greater than 0? The answer is ${h > 0}`); // using > operator
console.log(`Is h less than k? The answer is ${h < k}`); // using < operator
console.log(`Is h greater than 0 or equal to 0? The answer is ${h >= 0}`); // using >= operator
console.log(`Is k less than 0 or equal to 0? The answer is ${k <= 0}`); // using <= operator

// Logical operators
// && (AND), || (OR), ! (NOT)
// The priority of && operator is HIGHER than ||, so && executes earlier

let bodyMass = 70;
console.log(`The body mass is ${bodyMass} kg`);
console.log(`Is body mass more than 50 OR less than 90 kg? The answer is ${bodyMass > 50 || bodyMass < 90}`);
console.log(`Is body mass more than 10 AND less than 50 kg? The answer is ${bodyMass > 10 && bodyMass < 50}`);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Changing data types
// From string to number using +str OR Number(str)
// From number to string using String(num)

let newString = "345";
console.log(`The type of ${newString} is ${typeof newString}`);
console.log(newString + 4); // adding new value to the end of the string
console.log(`Changing the type of ${newString} ${typeof newString} to ${typeof +newString} ${newString}`); // changing string to number by adding "+" sign to the string
console.log(`The type of ${newString} is ${typeof newString}`); // checking that our string is still string because we haven't convert it yet
console.log(`Changing the type of ${newString} ${typeof newString} to ${typeof (Number(newString))} ${newString}`); // changing string to number using Number() method
console.log(`The type of ${newString} is ${typeof newString}`); // checking that our string is still string because we haven't convert it yet
// to convert our variable into a new data type we should declare new variable, for example:
let stringToNumber = Number(newString);
console.log(`The type of ${stringToNumber} is ${typeof (stringToNumber)}`);

let newNumber = 237;
console.log(`The type of ${newNumber} is ${typeof newNumber}`);
console.log(`Changing the type of ${newNumber} ${typeof newNumber} to ${typeof (String(newNumber))} ${newNumber}`); // changing number to string using String() method
console.log(`The type of ${newNumber} is ${typeof newNumber}`); // checking that our number is still number because we haven't convert it yet
// to convert our variable into a new data type we should declare new variable, for example:
let numberToString = String(newNumber);
console.log(`The type of ${numberToString} is ${typeof (numberToString)}`);

// Another data types

let newVar; // we didn't define a value of newVar, so it's undefined
console.log(`The type of ${newVar} is ${typeof newVar}`);
let newNull = null; // we define null as a value of newNull variable
console.log(`The type of ${newNull} is ${typeof newNull}`); // null is an object data type

// Conditional statements if and else

let herHeight = 168;
let hisHeight = 168;
if (herHeight < hisHeight){ // condition is in parenthesis if (condition){what to do if our condition is true}
	console.log("He is higher than her")
}
else if (herHeight == hisHeight){ // if have one more condition: else if (another condition){what to do if our condition is true}
	console.log("Their height is equal")
}
else { // else {what to do if our condition is false}
	console.log("She is higher than him")
}

// prompt() method

/* I will comment everything here because prompt isn't supported by Node.js
const userAge = Number(prompt("What's your age?"));
 OR
const userAge = +prompt("What's your age?");

const userAge = Number(prompt("What's your age?", 21)); 21 stands for default hint value

Because by default promt() method returns a string, so we need to convert the string into number
to do some operations or conditional statements.
*/



