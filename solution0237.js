/*
--------------- 8 Kyu - Enumerable Magic - Does My List Include This? ------------------

Instructions:

Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

-------------
Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(include([1,2,3,4], 3), true )
    assert.strictEqual(include([1,2,4,5], 3), false)
    assert.strictEqual(include([], 3),        false)
  });
});

--------------
PREP

Parameters: 
    -arr, an array/list
    -item, the item we want to check for in arr

Return: 
    -true if arr includes item, otherwise false


Example:
    ([1,2,3,4], 3), true
    ([1,2,4,5], 3), false

Psuedo Code:
    -using ternary, check for item in arr via arr.includes(item), and return true if so, otherwise false
*/


//-------------------- Solution- version with comments below -------------------------------------

function include(arr, item){
    return arr.includes(item) ? true : false;
  }

//-------------------------- Solution With Comments ------------------------------------

function include(arr, item){
    //using ternary, check for item in arr via arr.includes(item), and return true if so, otherwise false
    return arr.includes(item) ? true : false;
  }

//----- Best Practices / Lessons Learned ---------------
