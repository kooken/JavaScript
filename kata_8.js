// Implement a function called multiply, which takes two numbers and returns their product
const multiply = (number1, number2) => {
	return number1 * number2;
};

/*
You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.
*/
function otherAngle(a, b) {
	return 180 - (a + b);
  }

console.log(otherAngle(90, 35));

/*
In this Kata you should fix/create a program that returns the following values:
- false/False if either a or b (or both) are not numbers
- a % b plus b % a if both arguments are numbers
You may assume the following:
- If a and b are both numbers, neither of a or b will be 0.
*/
const myFirstKata = (a, b) => {
	if (typeof(a) !== 'number' || typeof(b) !== 'number') {
	  return false;
	 }
	 else {
	  return (a % b) + (b % a);
	}
}

console.log(myFirstKata(2, 7));

/*
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.)
called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans.
It then returns true if exactly one of the two expressions are true, false otherwise
*/
function xor(a, b) {
	if (a === true && b === true) {
	  return false;
	} else if (a === true || b === true) {
	  return true;
	} else {
	  return false;
	}
}

// Find the smallest integer in the array
function findSmallestInt(arr) {
	return Math.min([arr]);
}

console.log(findSmallestInt([78,56,232,12,8]));

/*
In this game, the hero moves from left to right. The player rolls the dice and moves the
number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and
the roll (1-6) and return the new position.
*/
function move (position, roll) {
	return position + (roll * 2);
}
