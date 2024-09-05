// Math operators

let a = 8;
let b = 3;
let c = -23;
let d = 923.2238;
let e = 64;

console.log(`a is number ${a}`);
console.log(`b is number ${b}`);
console.log(`c is number ${c}`);
console.log(`d is number ${d}`);
//addition
console.log(`Result of the addition a to b is ${a + b}`);
// substraction
console.log(`Result of the substraction b from a is ${a - b}`);
// multiplication
console.log(`Result of the a and b multiplication is ${a * b}`);
// division
console.log(`Result of the a and b division is ${a / b}`);
// exponentiation
console.log(`Result of the a and b exponentiation is ${a ** b}`);
// Math.pow(base, exponent) function raises a number to a power
console.log(`The number 2 to the power of 3 will be ${Math.pow(a, b)}`);
// remainder of the division
console.log(`Remainder of the a and b division is ${a % b}`);
/*
check if the number is odd or even using the remainder of the division:
- number % 2 == 0 - the number is odd;
- number % 2 == 1 - the number is even.
*/
if (a % 2 == 0){
	console.log(`The number ${a} is odd`);
}
else if (a % 2 == 1){
	console.log(`The number ${a} is even`);
}
// change sign to negative
console.log(`Result of the a sign change is ${a *= -1}`);
// -- operator - just substracting 1 from integer
console.log(`The result of substraction number ${b} with -- operator is ${-- b}`);
// -- operator - just adding 1 to integer
console.log(`The result of addition number ${b} with ++ operator is ${++ b}`);
// division by 0 gives you an Infinity
console.log(`The result of dividing the number ${b}) by 0 is ${b / 0}`);
// type of integer divided by 0
console.log(`Type of the result of dividing the number by 0 is ${ typeof (b / 0)}`);
// isFinite method
console.log(`isFinite method with division the number by 0 is ${ isFinite (b / 0)}`);
// isFinite method
console.log(`isFinite method with division the numbers by each other is ${ isFinite (a / b)}`);
// Math.abs(integer) returns absolute value of an integer
console.log(`Absolute value of ${c} is ${Math.abs(c)}`);
// Math.ceil(integer) rounds up and returns the smallest integer greater than or equal to a given number
console.log(`The result of ${d} round up will be ${Math.ceil(d)}`);
// Math.round(integer) rounds up and returns the value of a number rounded to the nearest integer
console.log(`The result of ${d} round up will be ${Math.round(d)}`);
// Math.floor(integer) rounds down and returns the largest integer less than or equal to a given number
console.log(`The result of ${d} round up will be ${Math.floor(d)}`);
// Math.max(values) returns the largest of the numbers given as input parameters,
//or '-Infinity' if there are no parameters
console.log(`The max value of [ ${a}, ${b}, ${c}, ${d}] is ${Math.max(a, b, c, d)}`);
console.log(`The max value of nothing is ${Math.max()}`);
// Math.min(values) returns the smallest of the numbers given as input parameters,
//or 'Infinity' if there are no parameters
console.log(`The min value of [ ${a}, ${b}, ${c}, ${d}] is ${Math.min(a, b, c, d)}`);
console.log(`The min value of nothing is ${Math.min()}`);
// Math.random() returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
console.log(`The random value is ${Math.random()}`);
/* If we need random value within specific range, we need to multiply Math.random() by the number we need,
for example: *10 for tens, *100 for hundreds, *1000 for thousands, etc.
And then we round this value using Math.round().
*/
console.log(`The random value from 1 to 10 is ${Math.round(Math.random() * 10)}`);
console.log(`The random value from 1 to 100 is ${Math.round(Math.random() * 100)}`);
console.log(`The random value from 1 to 1000 is ${Math.round(Math.random() * 1000)}`);
// (integer).toFixed() method rounds the string to a specified number of decimals
console.log(`The result of 989.20029 round up to 4 decimals is ${(989.20029).toFixed(4)}`);
// variable.toFixed() method rounds the string to a specified number of decimals
console.log(`The result of ${d} round up to 2 decimals is ${(d).toFixed(2)}`);
// Math.cbrt() static method returns the cube root of a number
console.log(`The cube root of ${e} is ${Math.cbrt(e)}`);
/*
Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument.
If the input is 0 or -0, it will be returned as-is.
*/
console.log(`The sign of a number ${c} is ${Math.sign(c)}`);
console.log(`The sign of a number ${d} is ${Math.sign(d)}`);
console.log(`The sign of a 0 is ${Math.sign(0)}`);
// Math.trunc() static method returns the integer part of a number by removing any fractional digits
console.log(`The integer part of a number ${d} is ${Math.trunc(d)}`);
