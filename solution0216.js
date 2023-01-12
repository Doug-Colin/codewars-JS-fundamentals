/*
--------------- 8 Kyu - You only need one - Beginner ------------------

Instructions:

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
  })
})

--------------
PREP

Parameters: 
    -a, an array
    -x, a value to look for in the array

Return: 
    -true if x is in the array, false if not


Example:
    "c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

Psuedo Code:
-check for value in array via .includes(), return true if included, otherwise false

*/
//-------------------- Solution -------------------------------------

function check(a, x) {
    return a.includes(x) ? true : false;
    }