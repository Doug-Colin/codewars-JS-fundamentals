/*
--------------- 7 Kyu - Summing a number's digits ------------------

Instructions:

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

-------------
Sample Tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumDigits(10), 1);
    assert.strictEqual(sumDigits(99), 18);
    assert.strictEqual(sumDigits(-32), 5);
    })
  })


--------------
PREP

Parameters: 
    -a number

Return: 
    -the sum of the digits irrespective of sign


Example:
    10 --> 1
    99 --> 18
    -32 --> 5

Psuedo Code:

    -convert num toString()
    -remove negative sign, if present, via .replace()
    -split string into array
    -map() array string values to numbers via Number wrapper
    -return sum of digits via .reduce

*/


function sumDigits(number) {
  
    //convert num toString()
    //remove negative sign, if present, via .replace()
    //split string into array
    //map() array string values to numbers via Number wrapper

    let arr = number.toString()
                    .replace('-', '')
                    .split('')
                    .map(x => Number(x));
    
    //use .reduce() to return sum of digits
    return arr.reduce((a, b) => a + b)
    
  }