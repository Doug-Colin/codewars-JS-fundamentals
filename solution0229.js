/*
--------------- 7 Kyu - Currying functions: multiply all elements in an array ------------------

Instructions:

To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

**You must not mutate the original array

-------------
Sample Tests

const {assert,config} = require("chai"); config.truncateThreshold = 0;

describe("example tests", function() {
  it("return value must be an array", function () {
    const actual = multiplyAll ([]) (0) ;
    assert( Array.isArray(actual), `but it returned ${ JSON.stringify(actual) }, of type ${ typeof actual }` );
  });
  it("return value must have correct length", function() {
    assert.strictEqual( multiplyAll ([1,2]) (1) .length , 2, `but it did not`);
  });
  it("function must not mutate the original array", function () {
    const array = [1,2,3];
    multiplyAll (array) (0) ;
    assert.deepEqual( array, [1,2,3], `but it did` );
  });
  it("returned array must have correct values", function() {
    assert.deepEqual( multiplyAll ([1,2,3]) (2) , [2,4,6], `multiplyAll ([ 1, 2, 3 ]) (2) `);
    assert.deepEqual( multiplyAll ([1,2,3]) (1) , [1,2,3], `multiplyAll ([ 1, 2, 3 ]) (1) ` );
    assert.deepEqual( multiplyAll ([1,2,3]) (0) , [0,0,0], `multiplyAll ([ 1, 2, 3 ]) (0) `);
    assert.deepEqual( multiplyAll ([]) (10) , [], `multiplyAll ([]) (10) ` );
  });
});

--------------
PREP

Parameters: 
    -an array of integers

Return: 
    -another function which takes a single integer as an argument and returns a new array; the new array is each of the first array's elements multiplied by said integer. 


Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];

Psuedo Code:

    -inner function returns another function that uses .map() to return new array of outer functions param elements * integer 

   


*/
//-------------------- Solution- version with comments below -------------------------------------
function multiplyAll(arr){
    return function innerArr(i) {
      return arr.map(x=>x*i)
    }
    }

//-------------------------- Solution With Comments ------------------------------------
function multiplyAll(arr){
    //return another function, that takes param i (integer), and returns an array via .map() of the outer arrays elements*integer 
    return function innerArr(i) {
      return arr.map(x=>x*i)
    }
    }

//----- Best Practices / Lessons Learned ---------------
