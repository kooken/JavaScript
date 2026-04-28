// OBJECTS

// ----- CREATING OBJECTS -----

/*
An object is a collection of key-value pairs (properties).
Keys are strings (or Symbols). Values can be any data type.
Objects are the main way to group related data together.
*/

// Object literal — the most common way to create objects
const person = {
	firstName: "Daenerys",
	lastName: "Targaryen",
	age: 24,
	isAlive: true,
};

console.log(person);

// Empty object — can add properties later
const emptyObj = {};
console.log(emptyObj); // {}

// ----- ACCESSING PROPERTIES -----

// Dot notation — use when the key name is known and a valid identifier
console.log(person.firstName); // "Daenerys"
console.log(person.age);       // 24

// Bracket notation — use when the key is dynamic or contains special characters
console.log(person["lastName"]); // "Targaryen"

let key = "isAlive";
console.log(person[key]); // true — bracket notation allows dynamic keys

// Accessing a property that doesn't exist returns undefined (no error)
console.log(person.dragons); // undefined

// ----- ADDING AND MODIFYING PROPERTIES -----

person.house = "Targaryen"; // add a new property
person.age = 25;            // overwrite an existing property

console.log(person.house); // "Targaryen"
console.log(person.age);   // 25

// ----- DELETING PROPERTIES -----

const car = { brand: "BMW", color: "black", year: 2020 };
console.log(car); // { brand: 'BMW', color: 'black', year: 2020 }

delete car.color;
console.log(car); // { brand: 'BMW', year: 2020 }

// ----- CHECKING IF A PROPERTY EXISTS -----

console.log("brand" in car);   // true
console.log("color" in car);   // false — we deleted it
console.log("wheels" in car);  // false

// ----- OBJECT METHODS -----

/*
A method is a function stored as a property of an object.
Inside a method, `this` refers to the object the method belongs to.
*/

const dragon = {
	name: "Drogon",
	color: "black",
	breathFire() { // shorthand method syntax (preferred)
		console.log(`${this.name} breathes fire!`);
	},
	describe: function () { // old-style method syntax (also valid)
		console.log(`${this.name} is a ${this.color} dragon.`);
	},
};

dragon.breathFire();  // "Drogon breathes fire!"
dragon.describe();    // "Drogon is a black dragon."
console.log(dragon.name); // "Drogon" — properties and methods live on the same object

// ----- ITERATING OVER OBJECTS -----

const scores = { alice: 95, bob: 82, carol: 88 };

// Object.keys() — returns an array of the object's keys
console.log(Object.keys(scores)); // ["alice", "bob", "carol"]

// Object.values() — returns an array of the object's values
console.log(Object.values(scores)); // [95, 82, 88]

// Object.entries() — returns an array of [key, value] pairs
console.log(Object.entries(scores)); // [["alice", 95], ["bob", 82], ["carol", 88]]

// Looping over an object with for...in
for (let name in scores) {
	console.log(`${name}: ${scores[name]}`);
}

// Looping over entries (more flexible)
for (let [name, score] of Object.entries(scores)) {
	console.log(`${name} scored ${score} points`);
}

// ----- NESTED OBJECTS -----

const kingdom = {
	name: "Westeros",
	ruler: {
		firstName: "Aegon",
		lastName: "Targaryen",
	},
	capital: "King's Landing",
};

console.log(kingdom.ruler.firstName);     // "Aegon"
console.log(kingdom["ruler"]["lastName"]); // "Targaryen"

// ----- OBJECT SPREAD -----

// Spread (...) copies all properties from one object into another
const baseSettings = { theme: "dark", language: "en" };
const userSettings = { ...baseSettings, fontSize: 16 };

console.log(userSettings); // { theme: 'dark', language: 'en', fontSize: 16 }

// Properties listed later override earlier ones
const overrideSettings = { ...baseSettings, language: "fi" };
console.log(overrideSettings); // { theme: 'dark', language: 'fi' }

// ----- COMPARING OBJECTS -----

/*
Objects are compared by REFERENCE, not by value.
Two separate objects with identical properties are NOT equal.
*/

const obj1 = { x: 1 };
const obj2 = { x: 1 };
const obj3 = obj1; // obj3 points to the SAME object in memory

console.log(obj1 === obj2); // false — different references
console.log(obj1 === obj3); // true — same reference

// To compare by value, compare individual properties or use JSON.stringify
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
