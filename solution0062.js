/*
--------------- 7 Kyu - Isograms ------------------

Instructions:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});

--------------

Psuedo Code:
-use .map to see if x === x?
-.reduce()
-probably need to use .indexOf and .lastIndexOf to search through
-did not work, perhaps Regex..
-solutions do indeed show regex, alternately, the Set constructor, in which each key-value pair of the Set has a unique value. Still, not sure how it works with '.size' == 'str.length'

*/


function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

//------------------------------

  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }