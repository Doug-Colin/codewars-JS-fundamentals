/*
--------------- 7 Kyu - Sums of consecutive integers ------------------

Instructions:

The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.
-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(position(4, 14, 3), 5);
Test.assertEquals(position(2, 25, 0), 12);
Test.assertEquals(position(7, 749, 5), 109);
Test.assertEquals(position(3, -9, 1), -3);
Test.assertEquals(position(5, 0, 0), -2);
  });
});

--------------
PREP

Parameters: 
    -x, number of consecutive integers
    -y, sum of consecutive integers
    -n, position of requested integer

Return: 
    -the consecutive integer at position n

Example:
position(4, 14, 3) == 5

Psuedo Code:
    -use for loop to push all values between 1 and y into an array

    -use .forEach to iterate through array, using index param to check if x number of integers can be .reduced to sum y

    -if so, return arr[n]


*/

//-------------------- Solution (without comments) -------------------------------------

function position(x, y, n) {
  
    let integers = []
    let sequence = []
  
    const arrayRange = (start, stop, step) =>
        Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
        );
    
    if (y<1) {
      for (let i = 0; i >= -2000; i--) {
        if ( arrayRange(i, i+x-1, 1).reduce((a,b)=>a+b) == y ) {
          sequence = arrayRange(i, i+x-1, 1)
          return sequence[n]
        }
      }
    } else {
      for (let i = 1; i <= y; i++) {
        if ( arrayRange(i, i+x-1, 1).reduce((a,b)=>a+b) == y ) {
          sequence = arrayRange(i, i+x-1, 1)
          return sequence[n]
        }
      }
    }
  }

//-------------------- Solution (with comments) ----------------------------------------

function position(x, y, n) {
    //declare empty array to hold our sequence of integers
    let sequence = []
    
    //function arrayRange() will allow you to create an array from a range
    const arrayRange = (start, stop, step) =>
        Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
        );
    
    //if y < 1, use for loop to decrement from 0 though -2000, in deccrements of 1
    //at each decrement:
      //use arrayRange to generate a sequence starting with the 0, of x length
      //use .reduce to find sum of that sequence
      //if sum equals y, we've found our sequence, so reassign it to our sequence array
      //return the sequence element at index n 
    if (y<1) {
      for (let i = 0; i >= -2000; i--) {
        if ( arrayRange(i, i+x-1, 1).reduce((a,b)=>a+b) == y ) {
          sequence = arrayRange(i, i+x-1, 1)
          return sequence[n]
        }
      }
    } else {
      //if y is not < 1, do the same thing, but with an incrementing loop. 
      for (let i = 1; i <= y; i++) {
        if ( arrayRange(i, i+x-1, 1).reduce((a,b)=>a+b) == y ) {
          sequence = arrayRange(i, i+x-1, 1)
          return sequence[n]
        }
      }
    }
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

// God damnit. It's often best to run through the mathematical relationships between parameters, and see if a math solution is possible, before writing 100 lines of code...
function position(x, y, n) {
    return y / x - (x - 1) / 2 + n;
  }

  //Still, learning how to use Array.from to generate an array from a range was great. 