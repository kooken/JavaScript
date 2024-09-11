// WHILE loops

/*
while (condition){
	some code;
}
*/

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

// DO ... WHILE

/*
do{
	some code;
}
while (condition){
some code;
}
*/

let k = 0;

do { // do this code:
	console.log(k);
	k++;
} while (k < 3); // until this condition is met;

const fruits = ['apple', 'pears', 'plums', 'grape'];
let countFruits = 0;

do {
	console.log(fruits[countFruits]);
	countFruits++;
} while (countFruits < fruits.length); // condition for do;
