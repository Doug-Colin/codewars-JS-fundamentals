/*
--------------- 7 Kyu - Make a function that does arithmetic! ------------------

Instructions:

Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
    assert.strictEqual(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
    assert.strictEqual(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
    assert.strictEqual(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");
  })
})

--------------
PREP

Parameters: 
    -three params, the first two (a, b) being numbers, and the third (operator) being a string representing the arithemetic operation to be applied to those numbers. 

Return: 
    -the result of applying the operator on a & b


Example:

    5, 2, "add"      --> 7
    5, 2, "subtract" --> 3

Psuedo Code:
    -use object to store key : value pairs representing the parameter string and the corresponding operation on a & b

    -return the value from the corresponding operation via bracket notation

    -


*/

function arithmetic(a, b, operator){
  
    //Declare object and assign the possible operator strings as keys
    //assign each key the value of using the corresponding arith. operation on a & b
    
    const operation = {
    'add' : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide': a / b,
  }
    
    //Return the the value via bracket notation
    return operation[operator];
    
  }

