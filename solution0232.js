/*
--------------- 7 Kyu - 
Debug Sum of Digits of a Number ------------------

Instructions:

Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

-------------
Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("Fixed tests", () => {
    assert.strictEqual(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
    assert.strictEqual(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
    assert.strictEqual(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');
  });
});

--------------
PREP

Parameters: 
    -integer, a positive integer  

Return: 
    -the sum of integer's digits


Example:
    123  => 6
    223  => 7
    1337 => 14

Psuedo Code:
    -convert integer to single digits via .toString()

    -use .reduce() to find sum


*/
//-------------------- Solution- version with comments below -------------------------------------
function getSumOfDigits(integer) {

    return integer.toString()
          .split('')
          .map(x => Number(x))
          .reduce((a, b) => a+b)
    }

//-------------------------- Solution With Comments ------------------------------------

function getSumOfDigits(integer) {
    //convert integer to string so we can .split() it into an array of digit-characters
    //use .map() to convert digit-characters 'back' into numbers
    //use .reduce() function to find sum of those numbers
    return integer.toString()
          .split('')
          .map(x => Number(x))
          .reduce((a, b) => a+b)
    }

//----- Best Practices / Lessons Learned ---------------
