/*
--------------- 8 Kyu - Convert to Binary ------------------

Instructions:

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);  
  });
})


--------------
PREP

Parameters: 
    -n, a non-negative integer

Return: 
    -n in binary format

Example:
    to_binary(1)   should return 1 
    to_binary(5)   should return 101 
    to_binary(11)  should return 1011 

Psuedo Code:
    -use .toString(2) to convert to binary/base 2 number in string format

    -use Number() or parseInt() to convert back to number type and return
*/

//-------------------- Solution (without comments) -------------------------------------

function toBinary(n){
    return Number(n.toString(2));
  }

//-------------------- Solution (with comments) ----------------------------------------

function toBinary(n){
    //use toString(2) to convert n to binary form in string
    //use Number() to convert to number type and return
    return Number(n.toString(2));
  }

//--------------- Best Practices / Lessons Learned -------------------------------------