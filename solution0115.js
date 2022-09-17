/*
--------------- 6 Kyu - Find the Odd Integer ------------------

Instructions:

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

-------------
Sample Tests

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});

--------------
PREP

Parameters: 
    -An array of integers  

Return: 
    -The integer that appears an odd number of times

Example:
    -[7] should return 7, because it occurs 1 time (which is odd).
    -[0] should return 0, because it occurs 1 time (which is odd).
    -[1,1,2] should return 2, because it occurs 1 time (which is odd).
    -[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    -[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

Psuedo Code:
    -declare an empty object to store key value pairs of each element and its occurences
        - let occurrenceCounter = {};

    -use for-of to loop through array and count element occurrences 
        - 

    -
        -

*/


function findOdd(A) {

    //declare an empty object to store key value pairs of each element and its occurences
    let counter = {};
    
    //use for ...of to loop through array and count element occurrences
    for (const element of A) {
      
      if (counter[element]) {
      counter[element] += 1;
      } else {
      counter[element] = 1
      }
    }
    
    //use for ...in loop to return element with odd # of occurrences, since prop is a string, convert to num via parseInt
    for(prop in counter) {
      if (counter[prop] % 2 == 1) {
      return parseInt(prop);
    }
    }
    
  }  

