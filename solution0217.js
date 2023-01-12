/*
<<<<<<< HEAD
--------------- 8 Kyu - Add Length ------------------

Instructions:

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
=======
--------------- 8 Kyu - Powers of 2 ------------------

Instructions:

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
>>>>>>> c0fa1d2fe6b11483d089f14bc92a18722ae47d0d

-------------
Sample Tests

<<<<<<< HEAD
describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(addLength('apple ban'),["apple 5", "ban 3"]);
Test.assertSimilar(addLength('you will win'),["you 3", "will 4", "win 3"]);
  });
});

=======
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(powersOfTwo(0), [1])
    assert.deepEqual(powersOfTwo(1), [1, 2])
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
  })
});
>>>>>>> c0fa1d2fe6b11483d089f14bc92a18722ae47d0d

--------------
PREP

Parameters: 
<<<<<<< HEAD
    -str, a string of words

Return: 
    -the string as an array wherein each element is a word from the param string, followed by a space, and the word's length


Example:
    "apple ban" --> ["apple 5", "ban 3"]
    "you will win" -->["you 3", "will 4", "win 3"]

Psuedo Code:
    -.split(' ') string by spaces so we can work on it as an array of words
    
    -.map() string and use template literal to return each array element/word, followed by a space and its .length


*/
//-------------------- Solution- version with comments below -------------------------------------

function addLength(str) {
  return str.split(' ').map((x) => {
    return `${x} ${x.length}`
  })
  }

//-------------------------- Solution With Comments ------------------------------------

function addLength(str) {
    //.split(' ') string by spaces so we can work on it as an array of words
    //use .map() & template literal to return each array element/word, followed by a space and its .length
  return str.split(' ').map((x) => {
    return `${x} ${x.length}`
  })
  }

//----- Best Practices / Lessons Learned ---------------
=======
    -n, a non-negative integer
  

Return: 
    -Evaluate and return 2**0 through 2**n

Example:
  n = 0  ==> [1]        # [2^0]
  n = 1  ==> [1, 2]     # [2^0, 2^1]
  n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

Psuedo Code:
    - use for loop to iterate from numbers 0 through n

    - on each iteration, evaluate 2**i, and .push() into an array

    - return arrayt


*/

//--------------- Solution ------------------------

function powersOfTwo(n){

// declare powers variabe to hold our solution
let powers = []

//use for loop evaluate 2 to the power of each number from 0 through n
//on each iteration, .push() result into powers array 
for (let i = 0; i <= n; i++) {
  powers.push(2**i)
}
  return powers;
}
>>>>>>> c0fa1d2fe6b11483d089f14bc92a18722ae47d0d
