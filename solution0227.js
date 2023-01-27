/*
--------------- 8 Kyu - Sum The Strings ------------------

Instructions:

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Tests example test cases", () => {
    assert.strictEqual(sumStr("4","5"), "9");
    assert.strictEqual(sumStr("34","5"), "39");
  });
});


--------------
PREP

Parameters: 
    -a and b, two numbers in string form

Return: 
    -the sum of the params in string form


Example:
    "4",  "5" --> "9"
    "34", "5" --> "39"
    "", "" --> "0"
    "2", "" --> "2"
    "-5", "3" --> "-2"

Psuedo Code:
    -use Number() or parseInt()  to convert to num

    -add

    -use .toString() to return in string form


*/
//-------------------- Solution- version with comments below -------------------------------------

function sumStr(a,b) {

    return (Number(a) + Number(b)).toString()
  }

//-------------------------- Solution With Comments ------------------------------------

function sumStr(a,b) {
    //use Number() to convert string number to number type
    //find sum
    //use .toString() to return in string form
    return (Number(a) + Number(b)).toString()
  }

//----- Best Practices / Lessons Learned ---------------
