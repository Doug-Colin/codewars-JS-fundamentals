/*
--------------- 6 Kyu - Sum of Digits / Digital Root ------------------

Instructions:

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( digitalRoot(16), 7 )
    assert.strictEqual( digitalRoot(456), 6 )
  });
});

--------------
PREP

Parameters: a non negative integer.

Return: The sum of the digits of the integer, reducing each sum until a single-digit number is produced. 

Example: 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

Psuedo Code:

-if 'n' is single digit, return n (n < 10)
-else ()
- apply reduce() function to an array of n.
-convert n to Array via Array.from(String(n), Number)
-can return Array.from(String(n), Number) as an argument of digitalRoot(). This way the function works at n recursively until it is a single digit. 
*/

function digitalRoot(n) {
    if (n < 10) {
      return n;
    } else {
      return digitalRoot(Array.from(String(n), Number).reduce((a, b) => a + b));
    }
  }