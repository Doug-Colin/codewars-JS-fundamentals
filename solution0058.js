/*
--------------- 7 Kyu - Ones and Zeros ------------------

Instructions:

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

-------------
Sample Tests

describe("One's and Zero's", () => {

  it("Example tests", () => {
      Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
      Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
      Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
      Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
  });

});


--------------

Psuedo Code:

-you can convert an integer to binary by dividing the integer by 2, and dividing the quotient of each division by two, until you reach zero. Put the remainders of each division in reverse order and you have the binary equivalent. 

-However, we need to do the reverse of this, which is a bit more complicated

-Fortunately you don't need to to this manually, because parseInt() can take a second parameter that alters the base
-since binary format is base 2, you can simply use parseInt('#', 2)
*/

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
  };