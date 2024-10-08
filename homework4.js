/*
Task 1
Draw a rhombus:
         1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
  123456787654321
 12345678987654321
1234567890987654321
 12345678987654321
  123456787654321
   1234567654321
    12345654321
     123454321
      1234321
       12321
        121
*/

let size = 10;

// Upper part
for (let i = 1; i <= size; i++) {
    let row = '';
    // initial spaces
    for (let j = 1; j <= size - i; j++) {
        row += ' ';
    }
    // numbers in ascending order
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    // numbers in descending order
    for (let j = i - 1; j >= 1; j--) {
        row += j;
    }
    console.log(row);
}

// Lower part
for (let i = size - 1; i >= 1; i--) {
    let row = '';
    // initial spaces
    for (let j = 1; j <= size - i; j++) {
        row += ' ';
    }
    // numbers in ascending order
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    // numbers in descending order
    for (let j = i - 1; j >= 1; j--) {
        row += j;
    }
    console.log(row);
}


/*
Task 2
Draw a Christmas Tree:
    *
   ***
  *****
 *******
*********
*/

for (let i = 1; i <= 5; i++) {
    let row = '';
    // initial spaces;
    for (let j = 1; j <= 5 - i; j++) {
        row += ' ';
    }
    // adding asterisks;
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += '*';
    }
    console.log(row);
}

/*
Task 3
Draw a triangle:
1
2 6
3 7 10
4 8 11 13
5 9 12 14 15
*/

let num = 1;

for (let i = 1; i <= 5; i++) {
    let row = '';
    let temp = num;

    for (let j = 1; j <= i; j++) {
        row += temp + ' ';
        temp += (5 - j);
    }

    console.log(row.trim());
    num++;
}

/*
Task 4
You have an array with three types of brackets, like
[ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] .
The number of elements and the sequence can be different.
You need to find out if all the brackets are paired in the correct sequence
(opening and then closing). Also, brackets can be nested, but nevertheless,
if the sequence is observed, they are considered paired.
Example:
[ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - two do not have a pair (the sequence is broken)
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - all have a pair
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - three do not have a pair
*/



/*
Task 5
Print lines containing both letters ‘a’ and ‘o’. Words should not be repeated.
let vegetables1 = [‘Cabbage‘, ‘Turnip‘, ‘Radish‘, ‘Carrot’, ‘Onion‘, ‘Potato‘];
*/



/*
Task 6
1) Print lines with even index and even length;
2) The same in reversed order;
3) Find the sum of all numbers;
4) Get the array [1000, 3, true, null, 15, undefined, 100, 313, 425].
let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
*/



/*
Task 7
Find the sum of all numbers:
let numbers = [3, 5, 25, 70, 171,200,326, 345, 999, 1000, 1005];
*/


