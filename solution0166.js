/*
--------------- 7 Kyu - Find the next perfect square! -----------------

Instructions:

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("findNextSquare", function() {
  it("should return the next square for perfect squares", function() {
    Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
    Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
    Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
    Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
  });
  
  it("should return -1 for numbers which aren't perfect squares", function() {
    Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
    Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
  });
});


--------------
PREP

Parameters: 
    -sq, a number that is a perfect square

Return: 
    -if sq is a perfect square, next perfect square
    -otherwise -1


Example:
    121 --> 144
    625 --> 676
    114 --> -1 since 114 is not a perfect square

Psuedo Code:
    -save the root of parameter sq via Math.sqrt()

    -find if the root is an integer via Number.isInteger()

    -if true, using ternary, return the next perfect square by adding 1 to the root and squaring via expon. operator (**2)

    -otherwise return -1


*/




function findNextSquare(sq) {
  
    // save the root of parameter sq via Math.sqrt()
    const root = Math.sqrt(sq)
    
    //find if the root is an integer via Number.isInteger(); 
    //...if true, return the next perfect square by adding 1 to the root and squaring via expon. operator (**2)
    //...if false, return -1
    return Number.isInteger(root) ? (root + 1) ** 2 : -1
  }