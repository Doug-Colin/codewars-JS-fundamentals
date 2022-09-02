/*
--------------- 7 Kyu - Binary Addition ------------------

Instructions:

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.


-------------
Sample Tests

describe("addBinary(1,2)", function() {
  var results1 = addBinary(1,2);
  it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
  });
  it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
  });
});

--------------
PREP

Parameters: two numbers.

Return: the sum of those numbers in binary.

Example:

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

Psuedo Code:

- add two params

- use .toString(2) on sum

-return
*/

function addBinary(a,b) {
    return (a + b).toString(2);
    }