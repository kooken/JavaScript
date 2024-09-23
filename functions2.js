// Function declaration

/*
function functionName(arg1, arg2, ...) {
	some code;
}
*/

function sumValues1 (value1, value2) {
	return value1 + value2;
}

console.log(sumValues1(23, 46)); // function invocation (call; function execution);

// Function expression

/*
let functionName = function(arg1, arg2, ...) {
	some code;
	return something;
};

need to print ';' at the end of the function expression!!
*/

let sumValues2 = function (value1, value2) {
	return value1 + value2;
}

console.log(sumValues2(23, 46));

// Arrow functions (one-line)

// let functionName = (arg1, arg2, ...) => expression;

let sumValues3 = (value1, value2) => value1 + value2;

console.log(sumValues3(23, 46));
