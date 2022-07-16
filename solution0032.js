/*
--------------- 8 Kyu - String repeat ------------------

Instructions:

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

-------------
Sample Tests

describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});


--------------

Psuedo Code:
- .repeat() method
*/

function repeatStr (n, s) {
    return s.repeat(n);
  }