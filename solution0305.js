/*
--------------- 6 Kyu - Array Deep Count ------------------

Instructions:

You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(deepCount([]), 0, "Expected 0");
    assert.deepEqual(deepCount([1, 2, 3]), 3, "Expected 3");
    assert.deepEqual(deepCount(["x", "y", ["z"]]), 4, "Expected 4");
    assert.deepEqual(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7");
    assert.deepEqual(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8");
 });   
});

--------------
PREP

Parameters: 
    -a, an array possibly containng nested arrays of unknown depth

Return: 
    -The number of ALL elements within an array, *including* any nested arrays (nested arrays each count as an element).

Example:
    []                   -->  0
    [1, 2, 3]            -->  3
    ["x", "y", ["z"]]    -->  4
    [1, 2, [3, 4, [5]]]  -->  7

Psuedo Code:
    -write a 'deep' count function (function that counts in a deep data structure)
        - iterate through all array elements
        -if element is array: 
            -increment count variable for each element. 
            -recursively call function and assign val to count (count += thisFunction())
        return count

    -probably best done via .reduce()


*/

//-------------------- Solution (without comments) -------------------------------------

function deepCount(a){

    //the 'depth' of a nested data structure is the degree to which it is nested
    //we need to count two things here, to 'full depth'; all nested elements, and all nested array occurrences
    //lets take care of the nested array occurrences first
    //use .reduce() to iterate through param array and count all occurrences of arrays
    //on each element, this function checks if the element is an array via Array.isArray()
    //if it is, it increments the count, 
    //and recursively calls itself to count nested arrays, adding each occurrence to the count
    //hence, so long as an element of the param arr is an array itself, this function will add one to the count,
    //and call itself on the element to check if the subelement is an array, only stopping when elements are no longer arrays
    const arrayDeepCount = (arr) => {
      return arr.reduce((count, x) => {
        if (Array.isArray(x)) {
          count++; // Increment the count for each nested array found
          count += arrayDeepCount(x); // Recursively count nested arrays
        }
        return count;
      }, 0);
    };
    
    //count the occurrence of nested non-array elements by flattening the array and checking its length
    //add the count of nested arrays themselves via our recursive function above, and retun
    return a.flat(Infinity).length + arrayDeepCount(a)
  }

//-------------------- Solution (with comments) ----------------------------------------

function deepCount(a){

    const arrayDeepCount = (arr) => {
      return arr.reduce((count, x) => {
        if (Array.isArray(x)) {
          count++;
          count += arrayDeepCount(x);
        }
        return count;
      }, 0);
    }; 

    return a.flat(Infinity).length + arrayDeepCount(a)
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
//similar function, without unnecessary nested function, is simply recursive on itself. 
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
  }