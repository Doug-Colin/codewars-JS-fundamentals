/*
--------------- 6 Kyu -   ------------------

Instructions:

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});


--------------

Psuedo Code:

-use .map(element, index, array) => {} to compare characters with array.indexOf

Lessons Learned

-The indexOf() method returns the first index at which a given element can be found in the array, searching from index 0 forward (unless otherwise speciafied in params)
        indexOf(searchElement)

-The lastIndexOf() method returns the last index at which a given element can be found in the array. The array is searched backwards from the last element, unless otherwise specified in params.
        lastIndexOf(searchElement)

// this solution returns the string arg, converting it to lower case, splitting it, and then using .map(function (elemnent, index, array)) {}
//to map through the array, returning a new array that is a ternary comparison of indexOf(), which searches through the array from the beginning, and lastIndexOf(), which searches the array backwards, returning the specified characters for matches and non-matches.  Finally, .join(''); is used to join the results together. 

-
*/


function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (element, index, array) {
        return array.indexOf(element) == array.lastIndexOf(element) ? '(' : ')'
      })
      .join('');
  }