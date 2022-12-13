/*
--------------- 8 Kyu -  ------------------

Instructions:

You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(getAge("4 years old"), 4);
  })
})

--------------
PREP

Parameters: 
    -inputString, a string beginning with a number character, representing someone's age.
 

Return: 
    -the number as an integer.


Example:
getAge("4 years old") --> 4

Psuedo Code:
    -return Number(string[0])


*/

function getAge(inputString){
    return Number(inputString[0]);
    }