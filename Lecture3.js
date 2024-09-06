// SWITCH
/*
- break is a must after each case, except for default!
- we can't use switch in switch
- we can use if in switch
- we can use switch in if
*/

let day = '3';
let str = 'go';

switch (day){ // expression in parenthesis (expression)
	case '3' : // what if our expression is '3'
		console.log("Tuesday");
		console.log("Ok");
			if (str == 'go') console.log("let's GOO"); // if both expressions are in this case
		break; // we found the case for our expression and can quit
	case 3 : // what if our expression is 3
		console.log("Wednesday");
		console.log("Ok");
		break; // we found the case for our expression and can quit
	case '4' : // what if our expression is '4'
		console.log("Thursday");
		break; // we found the case for our expression and can quit
	case 5 : // what if our expression is 5
		console.log("Friday");
		break; // we found the case for our expression and can quit
	default: // what if our expression is something else
		console.log("Another day"); // we found nothing and can quit WITHOUT break
}

/*
or we can do switch shorter and more simple inside the function
no need to use break every time, just use return instead!
*/

const daySwitch = (day) => {
switch (day){ // function argument in parenthesis (argument)
	case '3' : // what if our expression is '3'
		return "Tuesday";
	case 3 : // what if our expression is 3
		return "Wednesday";
	case '4' : // what if our expression is '4'
		return "Thursday";
	case 5 : // what if our expression is 5
		return "Friday";
	default: // what if our expression is something else
		return "Another day"; // we found nothing and can quit WITHOUT break
	}
}

console.log(daySwitch(5));

// ARRAYS

const myArr = []; // declaring the array[], can use 'let' as well
const arr = new Array(); // declaring the array using class Array()

console.log(myArr); // [empty array]
console.log(arr); // [empty array]

const arr1 = ['a', 'b', 'c'];
 // adding the elements separated by comma (,)
console.log(arr1);

const arr2 = ['a', 1, 'c']; // can add both strings and nums in 1 array

console.log(arr2);

let arr3 = [null, 'One', false, undefined, [5, 4, 8], arr1]; // can add almost everythng, even another arrays

console.log(arr3);

arr3 = [1, 10]; // rewrite the array, but works only if we declare our array with 'let'

console.log(arr3);
console.log(arr1[0]); // printing the element at the index[], starting with 0 only!
console.log(arr1.length); // printing the length of the array (number of elements inside the array)
console.log(arr1[arr1.length - 1]); // printing the last element of the array
console.log(arr1.at(-1)); // printing the element at the index position at(index), starting from -1!

// FOR LOOPS
/*
for (expression 1; expression 2; expression 3){
	some code to be executed
}
expression 1 - start - usually we start with i and we don't declare it before!
It should stay inside the for loop;
expression 2 - condition;
expression 3 - step;
*/

for (let i = 1; i < 5; i++){ // we start from i = 1, and while our i is less than 5 we add +1 to the i
	console.log('Current number is', i);
}

console.log('Hello QA!');

let text = "JAVASCRIPT";
let newText = ''; // empty string
//let count = 0; // declaring a counter if we want to skip certain amount of symbols in the text
for (let i = 0; i < text.length; i++){ // while i is less then length of the text, we add i (so we going symbol by symbol in text string)
	//if (count % 2 == 0){ // while our counter is divided by two without a remainder
		newText = newText + text[i] + "br"; // we add a "br" after each symbol(i) in text string
	//} enf of if
	//count++; // adding ... to the counter, so we skip ... characters in the text
}
console.log(newText); // printing the newText

let arr4 = [1, 2, 3, 4, 5, 6];
let newArr = [];

for (let i = 0; i < arr4.length; i++){
	newArr = newArr + arr4[i]; // adding symbol by symbol from old array into a new array
}
console.log("old array =", arr4, "type of old array is", typeof arr4,
	"; new array =", newArr, "type of new array is", typeof newArr);
// type of newArr is string, because arr4[i] is not an element of array, it's just a symbol
