/*
--------------- 8 Kyu - Return Negative ------------------

Instructions:

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(makeNegative(42), -42);
  });
});
--------------
Psuedo Code:
-if number is greater than 0, multiply it by -1 to convert to neg
-if num is not > 0 return num
*/

function makeNegative(num) {
    return num > 0 ? (num * -1) : num; 
   }