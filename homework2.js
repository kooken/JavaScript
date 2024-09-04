/*
Task 1
Write a program to approve a vacation depending on the month. If the month is “July”
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
Task 2
Write a simple calculator (*, /, +, -). Check your code for exception coverage for arithmetic
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
Task 3
Solve the problem using the topics covered (exclusively using the topics covered):
"A snail crawls up a wall 5 meters high. Every day it crawls up 3 meters, and every night
it slides down 2 meters. How many days will it take it to crawl to the top of the wall?"
*/

let wallHeight = 5;
let snailCrawlsUp = 3;
let snailSlidesDown = 2;
let totalDistance = 0;
let answer = 0;
if ((totalDistance += snailCrawlsUp) < wallHeight){
	console.log(`Day ${++answer}, your distance is ${totalDistance} m now`);
	console.log("Go forward!")
}
else if (totalDistance == wallHeight){
	console.log(`Day ${++answer}, your distance is ${totalDistance} m now`);
	console.log("Finish! Yay!")
}
totalDistance -= snailSlidesDown
if ((totalDistance += snailCrawlsUp) < wallHeight){
	console.log(`Day ${++answer}, your distance is ${totalDistance} m now`);
	console.log("Go forward!")
}
else if (totalDistance == wallHeight){
	console.log(`Day ${++answer}, your distance is ${totalDistance} m now`);
	console.log("Finish! Yay!")
}
totalDistance -= snailSlidesDown
if ((totalDistance += snailCrawlsUp) < wallHeight){
	console.log(`Day ${++answer}, your distance is ${totalDistance} m now`);
	console.log("Go forward!")
}
else if (totalDistance == wallHeight){
	console.log(`Day ${++answer}, your distance is ${totalDistance} m now`);
	console.log("Finish! Yay!")
}
totalDistance -= snailSlidesDown

/*
Task 4
Write a program for a vending machine. The customer enters their name and age and gets a drink.
If the customer is under 21, the line “Take a glass of juice” is displayed; if the customer is 21
or older, the line “I can offer you a glass of wine” is displayed; if over 80, the line “Maybe some
tea?” is displayed.
*/

/* I will write code here, but it won't work because prompt isn't supported by Node.js
To run the code install Live Server package from extensions.
For this you need to create a .html file and put your code inside like this:
<body>
<script>
CODE IS HERE
</script>
</body>
and then right click on the file - Open with Live Server. The page will be opened in your default
browser and the code can be viewed from console in the developer mode in your browser.
*/

/*
const userName = prompt("What's your name?"); prompt method declare the input as a string
console.log(`Hello, ${userName}!`);
const userAge = Number(prompt("What's your age?")); OR we can use +prompt("What's your age?")
if (userAge < 21){
	console.log("We can offer you a glass of juice!");
}
else if (userAge >= 21 && userAge < 80){
	console.log("We can offer you a glass of wine!");
}
else if (userAge >= 80){
	console.log("We can offer you a cup of tea!");
}
else{
	console.log("We can offer you sweet nothing!");
}
*/

/*
Task 5
Body Mass Index
• Underweight (Below 18.5) - displays the message “I didn’t eat enough porridge”
• Healthy Weight (18.5 - 24.9) displays the message “Well done! Keep it up!”
• Overweight (25.0 - 29.9) displays the message “It’s better to give the cake to your neighbor”
• Obesity (30.0 and Above) displays the message “Starting tomorrow - on water and cucumbers!”
*/

const userHeight = 1.80; // OR we can use prompt() const userHeight = Number(prompt("What's your height? (in meters)"))
const userWeight = 87; // OR we can use prompt() const userWeight = Number(prompt("What's your weight? (in kg)"))
const BMI = userWeight / (userHeight * userHeight);
if (BMI <= 18.5){
	console.log("I didn’t eat enough porridge");
}
else if (BMI > 18.5 && BMI <= 24.9){
	console.log(`Your Body Mass Index is ${BMI}`);
	console.log("Well done! Keep it up!");
}
else if (BMI >= 25.0 && BMI <= 29.9){
	console.log(`Your Body Mass Index is ${BMI}`);
	console.log("It’s better to give the cake to your neighbor");
}
else if (BMI >= 30.0){
	console.log(`Your Body Mass Index is ${BMI}`);
	console.log("Starting tomorrow - on water and cucumbers!");
}
else {
	console.log("Incorrect data");
}

/*
Task 6
Write a program to calculate the cost of tickets. For passengers over 18 years old - full price,
for infants under 2 years old - 10% of the cost, for children from 2 to 18 years old - 50% of the cost,
for pensioners over 65 years old - 60% of the cost.
*/

const passengerAge = 0; // OR we can use prompt() const passengerAge = Number(prompt("What's your age?"))
let ticketPrice = 3; // ticket price in Helsinki OR we can use prompt() let ticketPrice = Number(prompt("What's the ticket price in your city?"))
if (passengerAge >= 18 && passengerAge < 65){
	console.log(`Your ticket price is ${ticketPrice} euros.`)
}
else if (passengerAge > 0 && passengerAge <= 2){
	console.log(`Your ticket price is ${ticketPrice - (ticketPrice * 0.1)} euros.`)
}
else if (passengerAge > 2 && passengerAge < 18){
	console.log(`Your ticket price is ${ticketPrice - (ticketPrice * 0.5)} euros.`)
}
else if (passengerAge >= 65){
	console.log(`Your ticket price is ${ticketPrice - (ticketPrice * 0.6)} euros.`)
}
else {
	console.log(`Your ticket is priceless`)
}
