/*
--------------- 6 Kyu -  ------------------

Instructions:

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.strictEqual(isPangram(string), true)
  })
  it("test2", () => {
    var string = "This is not a pangram."
    assert.strictEqual(isPangram(string), false)
  });
});

--------------
PREP

Parameters: 
    -a string  

Return: 
    -true if the string contains every letter of the alphabet. Otherwise false


Example:
    "The quick brown fox jumps over the lazy dog." --> true
    "This is not a pangram." --> false

Psuedo Code:
    -convert string toLowerCase() and letters only via .match(regex) 

    -use new Set() to make it unique chars only

    -check if length of Set() is 26 by passing into array

    -return true if so, otherwise false


*/

function isPangram(string){
    let lettersOnly = string.toLowerCase().match(/[a-z]/g);
    let uniqueCharArray = Array.from(new Set(lettersOnly));
    return uniqueCharArray.length == 26 ? true : false;
  }

//refactored:

function isPangram(string){
    return Array.from(new Set(string.toLowerCase().match(/[a-z]/g))).length == 26 ? true : false;
  }
