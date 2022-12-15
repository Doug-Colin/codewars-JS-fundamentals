/*
--------------- 7 Kyu - Previous multiple of three ------------------

Instructions:

Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;

describe("Basic tests", function() {
  const answer = [null, null, 36, 12, 9] ;
  [1, 25, 36, 1244, 952406].forEach((q, i) =>
    it(`n = ${q}`, function() {
      assert.strictEqual( prevMultOfThree(q), answer[i] );
    }));
  });

--------------
PREP

Parameters: 
    -n, an integer

Return: 
    -the integer if it is a multiple of 3. If it is not, remove the last digit continuously until it is. 
    -otherwise return null

Example:
    1      => null
    25     => null
    36     => 36
    1244   => 12
    952406 => 9

Psuedo Code:
    -if (n % 3 == 0 ) {
        return n
    }

    -otherwise, use decremental for loop, starting with n.toStringz().split('').length, and on each iteration, remove last digit via .pop().

    -on each iteration, if (n.join('') % 3 !== 0), repeat

    -if .length < 1, break, return null
*/

const prevMultOfThree = n => {
    n = n.toString().split('')
    
    for (let i = n.length; i >= 1; i--) {
    console.log(i)
    
    if (n.join('') % 3 !== 0) {
      n.pop()
    }
      
  }
    console.log(n)
    return Number(n.join('')) % 3 == 0 ? n : null;
  }