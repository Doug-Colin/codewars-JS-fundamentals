/*
--------------- 8 Kyu - Convert a Number to a String ------------------
Instructions:

We need a function that can transform a number into a string.
What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"

--------------
Sample Tests

const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});

--------------

Psuedo Code:
-use .toString()
*/

function numberToString(num) {
    return num.toString();
    }