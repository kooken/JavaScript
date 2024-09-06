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

// Functions with IF condition

// Guessing if our number is 42 or not
const guessNumber = (number) => {
	if (number === 42){
		return "You win!";
	}
	return "Try again!"
}

console.log(guessNumber(42));
console.log(guessNumber(23));

// Checking sentence type
const getTypeOfSentence = (sentence) => {
	let sentenceType; // declaring a variable to store answer
	if (sentence.endsWith('?')) {
	  sentenceType = 'Question'; // will return 'Question' if true and store it in the variable
	} else {
	  sentenceType = 'General'; // will return 'General' if false and store it in the variable
	}

	return `${sentenceType} sentence`;
};

console.log(getTypeOfSentence('Hodor'));
console.log(getTypeOfSentence('Hodor?'));

// Normalizing websites' url
const normalizeUrl = (url) => {
	if (url.startsWith('https://')){
		return `${url}`;
	}
	else {
		return `https://${url}`;
	}
}

console.log(normalizeUrl("google.com"))
console.log(normalizeUrl("https://ai.fi"));

// Checking allies of the house Targaryen
const whoIsThisHouseToTargaryens = (house) => {
	if (house === 'Stark' || house === 'Velaryon'){
		return 'ally';
	}
	else if (house === 'Hightower' || house === 'Lannister'){
		return 'enemy';
	}
	else {
		return 'neutral';
	}
}

console.log(whoIsThisHouseToTargaryens("Velaryon"))
console.log(whoIsThisHouseToTargaryens("Strong"));

/*
Ternary operators
expression ? returns this if true : returns this if false
__ ? __ : ___
*/

// Long version
const abs1 = (number) => {
	return number >= 0 ? number : -number;
};

console.log(abs1(10)); // will return 10 because 10 is more than 0
console.log(abs1(-10)); // will return 10 because -10 is less than 0 (--10 = 10)

// One-line version
const abs2 = (number) => (number >= 0 ? number : -number);

console.log(abs2(10)); // will return 10 because 10 is more than 0
console.log(abs2(-10)); // will return 10 because -10 is less than 0 (--10 = 10)

// converting text

// using ordinary logical operators
const convertText1 = (string) => {
	if (string === ''){
		return '';
	}
	else if ((string[0] !== string[0].toUpperCase())){
		return `${reverse(string)}`;
	}
	else if (string[0] === string[0].toUpperCase()){
		return `${string}`;
	}
}

console.log(convertText1(''));

// using ternary operators
const convertText2 = (string) => {
	if (string === '') {
	  return '';
	}

	const reversable = string[0] !== string[0].toUpperCase();
	return reversable ? reverse(string) : string;
};

console.log(convertText2(''));

// WHILE loops

// Printing numbers in ascending order
const printNumbers = (lastNumber) => {
	let i = 1; // cycle counter, starts with 1
	while (i <= lastNumber) { // while our counter is less or equal to lastNumber - loop is working
	  console.log(i); // we write i in each loop iteration
	  i = i + 1; // and add +1 to i to increase the counter or we can write just i++ or i += 1;
	}
	console.log('finished!'); // the loop is over (i reaches our lastNumber)
};

printNumbers(3); // 1, 2, 3;

// Printing numbers in descending order
const printReverseNumbers = (lastNumber) => {
	let i = lastNumber; // cycle counter, starts with lastNumber (to start a descending order)
	while (i >= 1) { // while our counter is more or equal to 1 (last number to show) - loop is working
	  console.log(i); // we write i in each loop iteration
	  i--; // and subctract 1 from i to decrease the counter;
	}
	console.log('finished!'); // the loop is over (i reaches 1)
};

printReverseNumbers(5); // 5, 4, 3, 2, 1

// Sum all numbers within range (first number of the range - start, last number - finish)
const sumNumbersFromRange = (start, finish) => {
	let i = start; // i is the first number to sum
	let sum = 0;

	while (i <= finish) { // while i is less or equal to the last number
	  sum = sum + i; // adding this number to the sum or sum += i;
	  i = i + 1; // next number in the range or i++;
	}

	return sum;
};

console.log(sumNumbersFromRange(1, 5)); // so 1 + 2 + 3 + 4 + 5 = 15 (1 is the 1st number, 5 - last);

// Multiplying all numbers within range (first number of the range - start, last number - finish)
const multiplyNumbersFromRange = (start, finish) => {
	let i = start; // i is the first number to sum
	let sum = 1;

	while (i <= finish) { // while i is less or equal to the last number
	  sum = sum * i; // adding this number to the sum or sum += i;
	  i = i + 1; // next number in the range or i++;
	}

	return sum;
}

console.log(sumNumbersFromRange(1, 3)); // so 1 * 2 * 3  = 6 (1 is the 1st number, 3 - last);

// Repeating string exact number of times
const repeat = (string, times) => {
	let result = ''; // start point for the string
	let i = 1;

	while (i <= times) {
	  result = `${result}${string}`;
	  i = i + 1;
	}

	return result;
};

console.log(repeat('hello', 3)); // repeat 'hello' 3 times = 'hellohellohello';

// Concat all the numbers within the range
const joinNumbersFromRange = (start, finish) => {
	let result = ''; // start point for the string
	let i = start;

	while (i <= finish) {
	  result = `${result}${i}`;
	  i = i + 1;
	}

	return result;
}

console.log(joinNumbersFromRange(1, 3)); // so '1' + '2' + '3'  = 123;

// Print each symbol of the string on a new line
const printNameBySymbol = (name) => {
	let i = 0;
	while (i < name.length) { // or i <= name.length - 1;
	  console.log(name[i]);
	  i = i + 1;
	}
};

console.log(printNameBySymbol('Rhaenyra'));

// Print each symbol of the string on a new line in a reversed order
const printReversedWordBySymbol = (string) => {
	let i = string.length - 1;
	while (i >= 0) {
	  console.log(string[i]);
	  i--;
	}
}

console.log(printReversedWordBySymbol('Rhaenyra'));

// Counting how many times the letter occurs in a string
const countChars = (str, char) => {
	str = str.toLowerCase(); // convert all string to lower case to check all cases;
	char = char.toLowerCase(); // convert letter to lower case to check all cases;
	let i = 0; // counter for string (for going one by one in the string);
	let count = 0; // counter for letters;
	while (i < str.length) {
	  if (str[i] === char) { // or str[i].toLowerCase() === char.toLowerCase();
		count++; // if we see a letter in a string, add 1 to the counter;
	  }
	  i++; // going to the next symbol in the string;
	}
	return count;
};

console.log(countChars('Dracarys', 'r'));

// Reversing strings
const reverseString = (str) => {
	let i = 0;
	let result = ''; // a variable to put our reversed string;
	while (i < str.length) {
	  result = `${str[i]}${result}`; // or result = str[i] + result (concatenation);
	  i++; // going to the next letter to be reversed;
	}
	return result;
};

console.log(reverseString('Vermithor'));
console.log(reverseString(''));

// Returning a new string, consists only of even symbols of an original string
const even = (str) => {
	let i = 1;
	let result = ''; // a variable to put our string;
	while (i < str.length) {
	  result = `${result}${str[i]}`; // or result = result + str[i] (concatenation);
	  i += 2; // going to the next even symbol;
	}
	return result;
};

console.log(even('Vermithor'));

// Deleting all specific symbols in a string
const filterString = (string, symbol) => {
	let i = 0;
	let result = '';
	while (i < string.length){
		if (string[i] === symbol){
			result = `${result}`;
		}
		else if (string[i] !== symbol){
			result = `${result}${string[i]}`;
		}
		i++;
	}
	return result;
}

console.log(filterString('If I look back I am lost', 'I')); // 'f  look back  am lost'
console.log(filterString('zz Zorro', 'z')); // ' Zorro'

// Converting every nth element of a string to upper case
const makeItFunny = (text, symbol) => {
	let i = 0;
	let result ='';
	while (i < text.length){
		if (((i + 1) % symbol === 0)){
		result = `${result}${text[i].toUpperCase()}`;
		}
		else{
			result = `${result}${text[i]}`;
		}
		i++;
	}
	return result;
}

console.log(makeItFunny('I never look back', 3)); // 'I NevEr LooK bAck';

// Checking if string has got this exact symbol
const hasChar = (text, symbol) => {
	let i = 0;
	while (i < text.length){
		if (text[i] === symbol){
			return true;
		}
		i++;
	}
	return false;
}

console.log(hasChar('Hexlet', 'H')); // true
console.log(hasChar('Hexlet', 'h')); // false
console.log(hasChar('Awesomeness', 'm')); // true
console.log(hasChar('Awesomeness', 'd')); // false


/*
Function that swaps places in string every 2 consecutive characters.
If the length of the string is odd, then the last character remains in its place.
*/
const encrypt = (str) => {
	let result = '';
	for (let i = 0; i < str.length; i += 2) {
	  const nextSymbol = str[i + 1] || '';
	  result = `${result}${nextSymbol}${str[i]}`;
	}

	return result;
};

console.log(encrypt('Hello, World!')); // strings' length is odd -> '!' stays in its place;
console.log(encrypt('Dohaeras, Vermithor!')); // strings' length is even;
