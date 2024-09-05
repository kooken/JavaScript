// FUNCTIONS

let testString = "I love Netflix";

/*
Functions with NO RETURN:
- just prints values;
- doesn't return anything;
- can't be used further;
*/

const showGreeting = () => {
	// tab before code
	const text = 'Hello, world!'; // declaring a variable
	console.log(text); // printing a variable
  }

// function call - function();
showGreeting();

/*
Functions with RETURN:
- we will have an output as a result of function execution;
- this output can be used further in another functions or parts of a code;
- when program sees 'return' it terminates the function execution;
*/

const sumValues = () => {
	let number1 = 238;
	let number2 = 459;
	return number1 + number2;
}

console.log(sumValues() + sumValues()); // using output of a function

const calcValues = () => {
	let number1 = 238;
	let number2 = 459;
	return number1 - number2;
	return number1 + number2; // won't be executed, because we have 'return' earlier in the function!
}
console.log(calcValues());

/*
Functions with arguments
*/

// str is argument in this function
const getLastChar = (str) => {
	return str[str.length - 1];
  };

// to call a function we need to pass an argument: function(argument);
console.log(getLastChar('Hello'));
console.log(getLastChar(testString));

// a and b are arguments in this function
const average = (a, b) => {
	return (a + b) / 2;
  };

// to call a function with several arguments: function(argument1, argument2, etc.);
console.log(average(1, 5));
console.log(average(1, 2));

// a function to truncate text from the beginning by length and adding '...' in the end;
const truncate = (text, length) => {
	const result = `${text.slice(0, length)}...`;
	return result;
  };

console.log(truncate(testString, 9));

// function raises a number to a power
// by default our base is 2
const pow = (x, base = 2) => {
	return x ** base;
  };

console.log(pow(3)); // will be 9, because we didn't pass the base value and by default it's 2.
console.log(pow(3, 3)); // will be 27, because we pass the base value '3' and it replaces the default value.

// function to hide card number
// #1 option
const getHiddenCard1 = (cardNumber, stars = 4) => {
	const slicedCardNumber = cardNumber.slice(cardNumber.length - 4, cardNumber.length); // slice only 4 last digits
	const incrypted = "*".repeat(stars) + slicedCardNumber;
	return incrypted;
}

// #2 option
const getHiddenCard2 = (cardNumber, starsCount = 4) => {
	const visibleDigitsLine = cardNumber.slice(12); // slice only 12 digits out of 16
	return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
  };

console.log(getHiddenCard1("1234567812345678", 4));
console.log(getHiddenCard2("1234567812345678", 4));

// One-line function, what's after => will be returned as an output
const double = (x) => x ** 2; // with one argument
const power = (x, y) => x ** y; // with two arguments

console.log(double(5));
console.log(power(2, 3));

// Function to capitalize only first letter of the word

// Long version
const capitalize1 = (str) => {
	const firstLetter = str[0].toUpperCase(); // capitalizing the first letter
	const otherLetters = str.slice(1, str.length); // slice the rest of the word
	return firstLetter + otherLetters;
}

// One-line version
const capitalize2 = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

console.log(capitalize1('fortnite'));
console.log(capitalize2('fortnite'));

/*
Predicate functions:
- functions that will return ONLY boolean value;
- should start with is__ or has__;
*/

// Checking age - will return true if age < 1 and false if anything else.
const isInfant = (age) => age <= 1;

console.log(`The person is infant? The answer is ${!isInfant(3)}.`);
console.log(`The person is infant? The answer is ${!isInfant(1)}.`);

/*
By using ! we deny the answer, so:
- of our answer is true - it will be false;
- if our answer is false - it will be true.
*/

// Checking age - will return true if age >= 60 and false if anything else.
const isPensioner = (age) => age >= 60;

console.log(isPensioner("l"));
console.log(isPensioner(18));

// Checking is our greeting for Mister or not. If yes - returns true, if no - returns false.
const isMister = (greeting) => greeting === 'Mister';

console.log(isMister('Baby'));
console.log(isMister('Mister'));

// Checking is phone number international (starts with '+') or not
// Long version
const isInternationalPhone1 = (string) => {
	const firstSymbol = string[0];
	return firstSymbol === "+";
  }

// One-line version
const isInternationalPhone2 = (phone) => phone[0] === '+';

console.log(isInternationalPhone1('+79602223423'));
console.log(isInternationalPhone2('89602223423'));

/* Checking if our password strong or not (depending only on length)
- if passwords' length is more than 8 AND less than 20 - return TRUE
  |                   condition #1                   |
- else - return FALSE
*/
const isStrongPassword = (password) => {
	const length = password.length;
	return length > 8 && length < 20;
  };

console.log(isStrongPassword('qwerty'));
console.log(isStrongPassword('qwerty1234'));
console.log(isStrongPassword('zxcvbnmasdfghjkqwertyui'));

/* Checking if our apartment id good by area and location
- if area >= 100 OR (area >= 80 AND located on the Main Street) - return TRUE
  |condition #1 | OR |            condition #2                 |
 - else - FALSE
*/
const isGoodApartment = (area, street) => {
	const result = area >= 100 || (area >= 80 && street === 'Main Street');
	return result;
  };

console.log(isGoodApartment(120, 'Queens Street'));
console.log(isGoodApartment(120, 'Main Street'));
console.log(isGoodApartment(80, 'Main Street'));

// Checking if the year is leap or not

const isLeapYear = (year) => {
	const result = year % 400 === 0 || (year % 4 === 0) && (year % 100 !== 0);
	return result;
}

console.log(isLeapYear(2018));
console.log(isLeapYear(2016));

// Custom function for string reversing
const reverse = (s) => s.split('').reverse().join('');

console.log(reverse('fortnite'));

// Checking if our word is palindrome
const isPalindrome = (word) => reverse(word).toLowerCase() === word.toLowerCase();

console.log(isPalindrome('Wow'));

// Checking if our word is NOT a palindrome using denial (!)
const isNotPalindrome = (word) => !isPalindrome(word);

console.log(isNotPalindrome('Wow'));

/* OR (||) in such code works so:
- it looks through two arguments;
- chooses one that can be converted to TRUE;
- as we know TRUE is 1, FALSE is 0.
*/
console.log(0 || 1); // will return 1, because it stands for TRUE

/* AND (&&) in such code works so:
- it looks through two arguments;
- chooses one that can be converted to FALSE;
- as we know TRUE is 1, FALSE is 0.
*/
console.log(0 && 1); // will return 0, because it stands for FALSE

/*
GENERAL RULES
- 0, ''(nothing/empty), undefined, NaN(Not a Number), null converted to FALSE (so called falsy values);
- everything else converted to TRUE.
*/

// Returning the position of letter if exists or nothing
const getLetter = (text, position) => text[position - 1] || '';

console.log(getLetter('Library', 4));
console.log(getLetter('Library', 15));
