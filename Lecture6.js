// ES6+ MODERN JAVASCRIPT

// ----- DESTRUCTURING -----

/*
Destructuring lets you unpack values from arrays or properties from objects
into distinct variables — concisely and readably.
*/

// Array destructuring
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;
console.log(red, green, blue); // 255 128 0

// Skip elements with commas
const [first, , third] = [10, 20, 30];
console.log(first, third); // 10 30

// Default values — used when the element is undefined
const [a = 5, b = 10] = [1];
console.log(a, b); // 1 10 (b falls back to default)

// Swap two variables without a temp variable
let x = "hello";
let y = "world";
[x, y] = [y, x];
console.log(x, y); // "world" "hello"

// Object destructuring
const hero = { name: "Arya Stark", age: 18, weapon: "Needle" };
const { name, age, weapon } = hero;
console.log(name, age, weapon); // "Arya Stark" 18 "Needle"

// Rename while destructuring
const { name: heroName, age: heroAge } = hero;
console.log(heroName, heroAge); // "Arya Stark" 18

// Default values in object destructuring
const { name: charName, house = "Unknown" } = hero;
console.log(charName, house); // "Arya Stark" "Unknown"

// Destructuring in function parameters — common pattern
const greet = ({ name, age }) => {
	console.log(`Hello, ${name}! You are ${age} years old.`);
};

greet(hero); // "Hello, Arya Stark! You are 18 years old."

// Nested destructuring
const team = {
	teamName: "Red team",
	lead: { firstName: "Jon", lastName: "Snow" },
};

const { teamName, lead: { firstName } } = team;
console.log(teamName, firstName); // "Red team" "Jon"

// ----- SPREAD OPERATOR (...) -----

/*
The spread operator (...) expands an iterable (array, string, object)
into individual elements. It's like "unpacking" the contents.
*/

// Spread in arrays — merge or copy arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Copy an array (avoids reference issues)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] — unchanged
console.log(copy);     // [1, 2, 3, 4]

// Spread in function calls — pass array elements as arguments
const nums = [3, 1, 4, 1, 5, 9];
console.log(Math.max(...nums)); // 9

// Spread with objects (covered in Lecture4.js)
const defaults = { color: "black", size: "M" };
const custom = { ...defaults, size: "L", logo: true };
console.log(custom); // { color: 'black', size: 'L', logo: true }

// ----- REST PARAMETERS (...) -----

/*
Rest looks the same as spread but does the opposite — it COLLECTS
multiple arguments into a single array. Used in function parameters.
*/

// Collect all arguments into an array
const sumAll = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);
console.log(sumAll(1, 2, 3));        // 6
console.log(sumAll(10, 20, 30, 40)); // 100

// Mix of named params and rest
const introduce = (greeting, ...names) => {
	console.log(`${greeting}: ${names.join(", ")}`);
};
introduce("Welcome", "Jon", "Arya", "Sansa"); // "Welcome: Jon, Arya, Sansa"

// ----- OPTIONAL CHAINING (?.) -----

/*
Optional chaining (?.) safely accesses deeply nested properties.
If any part of the chain is null or undefined, it returns undefined
instead of throwing a TypeError.
*/

const user = {
	profile: {
		address: {
			city: "Winterfell",
		},
	},
};

console.log(user.profile.address.city);      // "Winterfell" — works fine
console.log(user.profile?.address?.city);    // "Winterfell" — same result, safer
console.log(user.profile?.phone?.number);    // undefined — no error thrown
// console.log(user.profile.phone.number);   // TypeError: Cannot read properties of undefined

// Works with methods too
const arr = [1, 2, 3];
console.log(arr?.map(n => n * 2)); // [2, 4, 6]
const nothing = null;
console.log(nothing?.map(n => n * 2)); // undefined — no error

// ----- NULLISH COALESCING (??) -----

/*
?? returns the RIGHT-HAND side value only if the left side is null or undefined.
Unlike ||, it does NOT treat 0, false, or "" as "missing" values.
*/

const username = null ?? "Guest";
console.log(username); // "Guest"

const score = 0 ?? 100;
console.log(score); // 0 — 0 is a valid value, not nullish

const score2 = 0 || 100;
console.log(score2); // 100 — || treats 0 as falsy, so falls through

// Common use: default values that should allow 0 or false
const volume = null ?? 50;
console.log(`Volume: ${volume}`); // "Volume: 50"

// Combining optional chaining with nullish coalescing
const town = user.profile?.location?.city ?? "Unknown city";
console.log(town); // "Unknown city"

// ----- SHORT-CIRCUIT EVALUATION -----

/*
&& and || don't just return true/false — they return one of their operands.
This enables concise conditional patterns.

|| returns the first TRUTHY value, or the last value if all are falsy.
&& returns the first FALSY value, or the last value if all are truthy.
*/

console.log("hello" || "fallback"); // "hello" — first truthy
console.log(null || "fallback");    // "fallback" — null is falsy
console.log(0 || "" || "default");  // "default" — first truthy

console.log("hello" && "world");  // "world" — all truthy, returns last
console.log(null && "world");     // null — first falsy, short-circuits

// Practical: conditional rendering pattern
const isLoggedIn = true;
const message = isLoggedIn && "Welcome back!";
console.log(message); // "Welcome back!"

const isAdmin = false;
const adminPanel = isAdmin && "Show admin panel";
console.log(adminPanel); // false — isAdmin is falsy, short-circuits

// ----- TEMPLATE LITERALS — ADVANCED USAGE -----

// Multi-line strings
const poem = `Roses are red,
Violets are blue,
JavaScript is great,
And so are you.`;

console.log(poem);

// Expressions inside template literals
const items = ["sword", "shield", "potion"];
console.log(`You have ${items.length} items: ${items.join(", ")}.`);

// Nested template literals
const status = true;
console.log(`Status: ${status ? "active" : "inactive"}`);
