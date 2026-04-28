// ARRAY METHODS

/*
Array methods let you transform, search, and iterate over arrays
without writing manual for/while loops. Most of them take a callback
function as an argument — a function you define that gets called on
each element of the array.
*/

const heroes = ["Arya", "Jon", "Daenerys", "Sansa", "Tyrion"];
const numbers = [4, 9, 2, 7, 1, 5, 8, 3, 6];
const prices = [12.5, 3.99, 45.0, 7.25, 100.0];

// ----- forEach -----
/*
Executes a function for each element. Returns nothing (undefined).
Use it when you only want side effects (e.g. logging), not a new array.
*/

heroes.forEach((hero) => {
	console.log(`Hero: ${hero}`);
});

// forEach also gives you the index as a second argument
heroes.forEach((hero, index) => {
	console.log(`${index + 1}. ${hero}`);
});

// ----- map -----
/*
Creates a NEW array by transforming each element with a callback.
The original array is unchanged.
*/

const upperHeroes = heroes.map((hero) => hero.toUpperCase());
console.log(upperHeroes); // ["ARYA", "JON", "DAENERYS", "SANSA", "TYRION"]
console.log(heroes);      // original unchanged

const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [8, 18, 4, 14, 2, 10, 16, 6, 12]

// ----- filter -----
/*
Creates a NEW array with only the elements for which the callback returns true.
*/

const shortNames = heroes.filter((hero) => hero.length <= 4);
console.log(shortNames); // ["Arya", "Jon"]

const expensiveItems = prices.filter((price) => price > 10);
console.log(expensiveItems); // [12.5, 45, 100]

// Combining map and filter
const discountedExpensive = prices
	.filter((price) => price > 10)
	.map((price) => price * 0.9); // 10% discount
console.log(discountedExpensive);

// ----- find -----
/*
Returns the FIRST element for which the callback returns true.
Returns undefined if nothing matches.
*/

const foundHero = heroes.find((hero) => hero.startsWith("D"));
console.log(foundHero); // "Daenerys"

const notFound = heroes.find((hero) => hero === "Cersei");
console.log(notFound); // undefined

// ----- findIndex -----
/*
Same as find, but returns the INDEX of the first match instead of the element.
Returns -1 if nothing matches.
*/

const idx = heroes.findIndex((hero) => hero === "Sansa");
console.log(idx); // 3

console.log(heroes.findIndex((hero) => hero === "Cersei")); // -1

// ----- some -----
/*
Returns true if AT LEAST ONE element passes the test. Otherwise false.
Stops as soon as it finds a match (short-circuits).
*/

console.log(numbers.some((n) => n > 8));  // true (9 passes)
console.log(numbers.some((n) => n > 10)); // false (none pass)

// ----- every -----
/*
Returns true if ALL elements pass the test. Otherwise false.
Stops as soon as it finds one that fails (short-circuits).
*/

console.log(numbers.every((n) => n > 0)); // true (all positive)
console.log(numbers.every((n) => n > 5)); // false (4 fails)

// ----- includes -----
/*
Returns true if the array contains the given value. Uses strict equality (===).
*/

console.log(heroes.includes("Arya"));   // true
console.log(heroes.includes("Cersei")); // false
console.log(numbers.includes(7));       // true

// ----- reduce -----
/*
Reduces the array to a single value by accumulating results.
reduce(callback, initialValue)
callback receives (accumulator, currentElement) on each iteration.
*/

// Sum all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 45

// Find the maximum value
const max = numbers.reduce((acc, n) => (n > acc ? n : acc), numbers[0]);
console.log(max); // 9

// Count occurrences of each value in an array
const votes = ["yes", "no", "yes", "yes", "no", "yes"];
const tally = votes.reduce((acc, vote) => {
	acc[vote] = (acc[vote] || 0) + 1;
	return acc;
}, {});
console.log(tally); // { yes: 4, no: 2 }

// ----- sort -----
/*
Sorts the array IN PLACE (modifies the original!).
Without a comparator, sorts values as strings — this causes issues with numbers.
*/

const words = ["banana", "apple", "cherry", "date"];
words.sort();
console.log(words); // ["apple", "banana", "cherry", "date"] — alphabetically correct

const unsorted = [10, 1, 21, 2];
unsorted.sort(); // sorts as strings! "1", "10", "2", "21"
console.log(unsorted); // [1, 10, 2, 21] — WRONG for numbers

// For numbers, pass a comparator function: (a, b) => a - b
const fixed = [10, 1, 21, 2];
fixed.sort((a, b) => a - b); // ascending
console.log(fixed); // [1, 2, 10, 21]

fixed.sort((a, b) => b - a); // descending
console.log(fixed); // [21, 10, 2, 1]

// ----- flat -----
/*
Flattens nested arrays by one level (or more with a depth argument).
*/

const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());    // [1, 2, 3, 4, [5, 6]] — one level deep
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6]  — two levels deep
console.log(nested.flat(Infinity)); // always fully flattened

// ----- Method chaining summary -----
/*
Most array methods return a new array, so you can chain them:
array.filter(...).map(...).reduce(...)
This is a powerful, readable pattern for data processing.
*/

const result = numbers
	.filter((n) => n % 2 === 0)      // keep only even numbers: [4, 2, 8, 6]
	.map((n) => n ** 2)              // square them: [16, 4, 64, 36]
	.reduce((acc, n) => acc + n, 0); // sum: 120

console.log(result); // 120
