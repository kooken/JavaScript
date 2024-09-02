/*
1.1 Write a program to approve a vacation depending on the month. If the month is “July”
or “August”, the program should show - ‘approved’, if other months, then - “denied”.
*/
let vacationMonth = "September";
if (vacationMonth == "July" ||vacationMonth == "August"){
	console.log("approved");
}
else {
	console.log("denied");
}

/*
1.2 Write a simple calculator (*, /, +, -). Check your code for exception coverage for arithmetic
operations. You should have two variables for the original numbers and one for the operator.
Depending on the operator, one or another arithmetic operation should occur and the result should be
output to the console.
*/
let number1 = 23;
let number2 = 4;
let operator = "%";
if (operator == "/"){
	console.log(number1 / number2);
}
else if (operator == "+"){
	console.log(number1 + number2);
}
else if (operator == "-"){
	console.log(number1 - number2);
}
else if (operator == "*"){
	console.log(number1 * number2);
}
else {
	console.log("Operator error");
}

/*
1.3 Solve the problem using the topics covered (exclusively using the topics covered):
"A snail crawls up a wall 5 meters high. Every day it crawls up 3 meters, and every night
it slides down 2 meters. How many days will it take it to crawl to the top of the wall?"
*/

let wallHeight = 5;
let snailCrawlsUp = 3;
let snailSlidesDown = 2;
let answer = (wallHeight/(snailCrawlsUp - snailSlidesDown));
console.log(`It will take ${answer} days to crawl to the top of the wall`);
