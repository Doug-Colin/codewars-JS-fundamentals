/*
--------------- 8 Kyu - Name Shuffler ------------------

Instructions:

Write a function that returns a string in which firstname is swapped with last name.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
  });
});

--------------
PREP

Parameters: 
-str, a string of a first and last name separated by a space

Return: 
    -the same string with the names/words reversed


Example:
    "john McClane" --> "McClane john"

Psuedo Code:
    -.split(' ') string by space into array of words

    -use .reverse() to reverse them

    -join(' ') back together with a space between and return


*/

function nameShuffler(str){
    //split() array by spaces into two separate words, reverse() those elements, join() them back together with a space 
    return str.split(' ').reverse().join(' ')
  }
//refactored:

//----- Best Practices / Lessons Learned ---------------
