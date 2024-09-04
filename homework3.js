/*
Task 1
Write a calculator program with switch, handle possible input errors
*/

let number1 = 511;
let number2 = 3;
let operator = '/';
if (typeof number1 == 'number' && typeof number2 == 'number'){
switch (operator){
		case '*' :
			console.log(number1 * number2);
			break;
		case '/' :
				if (number1 == 0 || number2 == 0) console.log("We can't divide 0 or by 0")
				else console.log(number1 / number2)
			break;
		case '+' :
			console.log(number1 + number2);
			break;
		case '-' :
			console.log(number1 - number2);
			break;
		default:
			console.log("Incorrect operator!");
	}
}
else{
	console.log("Incorrect type!")
}

/*
Task 2
Use a for loop to print even numbers from 2 to 10
*/

for (i = 2; i <= 10; i += 2){
	console.log('Current number is', i);
}

/*
Task 3 (from job interview)
You have an array with brackets, let's say
[ '(', ')', '(', ')', ')'] . The number of elements and the sequence can be different.
You need to figure out if the number of opening and closing brackets of the same type is
equal.
*/

let countOpenBrackets = 0;
let countCloseBrackets = 0;
let testArray = [ '(', ')', '(', ')', ')'];
for (i = 0; i < testArray.length; i++){
	if (testArray[i] == '(') countOpenBrackets++;
	else if (testArray[i] == ')') countCloseBrackets++;
}
if (countOpenBrackets == countCloseBrackets) console.log("The number of brackets is equal! Yay!")
else if (countOpenBrackets != countCloseBrackets) console.log("The number of brackets is not equal! Meh.")
console.log(`The number of open brackets is ${countOpenBrackets}`);
console.log(`The number of close brackets is ${countCloseBrackets}`);

/*
Task 4
There is an encrypted sentence
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
we know that it means “You are the best QA ever”.
We need to come up with a decoder program.
*/

let encrypted = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let decrypted = "";
for (i = 0; i < encrypted.length; i += 3){
	decrypted = decrypted + encrypted[i];
}
console.log(decrypted);
