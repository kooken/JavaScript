/*
Task 1
1.1 Declare two variables: firstName и lastName.
1.2 Assign the value “John” to the variable firstName and the value “Adams” to the variable lastName.
1.3 Print the value of firstName and lastName to the console
(it should show John Adams).
1.4 Use the same variables (overwrite) firstName and lastName to print the new value (Anna Karenina).

The result should be two lines on the screen:
John Adams
Anna Karenina
*/
let firstName = "John";
let lastName = "Adams";
console.log(firstName, lastName);
firstName = "Anna";
lastName = "Karenina";
console.log(firstName, lastName);

/*
Task 2
2 Print the data type of the following variables to the console:
let a,
let c = 9,
let str = “Hi 5!”,
let b = true,
let y = 9 + ‘1’ ,
let x = 'a' / 6
*/
let a;
let c = 9;
let str = "Hi 5!";
let b = true;
let y = 9 + '1';
let x = 'a' / 6;
console.log(typeof a);
console.log(typeof c);
console.log(typeof str);
console.log(typeof b);
console.log(typeof y);
console.log(typeof x);
