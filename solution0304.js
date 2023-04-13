/*
--------------- 7 Kyu - Length and two values. ------------------

Instructions:

Given an integer n and two other values, build an array of size n filled with these two values alternating.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Test", () => {
  it('small arrays', () => {
    assert.deepEqual(alternate(5, true, false), [true, false, true, false, true])
  });
  
  it('larger arrays', () => {
    assert.deepEqual(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
  });
  
  it('with 0', () => {
    assert.deepEqual(alternate(0, "lemons", "apples"), [])
  });
});


--------------
PREP

Parameters: 
    -n, the size of the array to be returned
    -firstValue and secondValue, the alternating values to add to the array until it has n length.  

Return: 
    -an array of length n with the two values alternating

Example:
    5, true, false     -->  [true, false, true, false, true]
    10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
    0, "one", "two"    -->  []

Psuedo Code:
    -declare solution array
    
    -write for loop from 1 through n. On each iteration, if i%2!==0, solution.push(firstVal), if i%2==0, .push(secondVal)

    -return array.


*/

//-------------------- Solution (without comments) -------------------------------------

function alternate(n, firstVal, secondVal){
    
    let solution = Array.from({ length: n }, () => "")
    
    return solution.map((_, i) => { return i%2 == 0 ? firstVal : secondVal })
  }

//-------------------- Solution (with comments) ----------------------------------------

function alternate(n, firstVal, secondVal){
    //use array constructor to declare array of n length with each element an empty string
    //(if val is not declared for elements, they will be undefined and .map() cannot be used to populate them)
    let solution = Array.from({ length: n }, () => "")
    
    //use .map() and ternary to return firstVal if index is even and secondVal if index is odd. 
    return solution.map((_, i) => { return i%2 == 0 ? firstVal : secondVal })
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

