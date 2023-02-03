/*
---------------  Kyu -  ------------------

Instructions:

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
  })


--------------
PREP

Parameters: 
    -name, a string representing a name

Return: 
    -if the name begins with capital or lowercase r, return string 'name plays banjo', otherwise 'name does not play banjo'

Example:
("Adam"), "Adam does not play banjo");
("Paul"), "Paul does not play banjo");
("Ringo"), "Ringo plays banjo");
("bravo"), "bravo does not play banjo");
("rolf"), "rolf plays banjo");

Psuedo Code:
    -convert name to lowercase
    
    -check if() name begins with 'r' via .charAt(0) 

    -using ternary statement, return relevant string via template literal
*/

//-------------------- Solution (without comments) -------------------------------------

function areYouPlayingBanjo(name) {
    return name.charAt(0).toLowerCase(0) === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
  }

//-------------------- Solution (with comments) ----------------------------------------

function areYouPlayingBanjo(name) {
    // find first character of name via .charAt(0) and convert .toLowerCase()
    //using ternary statement, if that equals 'r', use template literal to return affirmative statement, otherwise opposite
    return name.charAt(0).toLowerCase(0) === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
  }

//--------------- Best Practices / Lessons Learned -------------------------------------