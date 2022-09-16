/*
--------------- 7 Kyu - Maximum Triplet Sum (Array Series #7) ------------------

Instructions:

Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
    
    -Array/list size is at least 3 .

    -Array/list numbers could be a mixture of positives , negatives and zeros .

    -Repetition of numbers in the array/list could occur , So (duplications are not included when summing).  

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(maxTriSum([3,2,6,8,2,3]),17);
    assert.strictEqual(maxTriSum([2,9,13,10,5,2,9,5]),32);
    assert.strictEqual(maxTriSum([2,1,8,0,6,4,8,6,2,4]),18);
    assert.strictEqual(maxTriSum([-3,-27,-4,-2,-27,-2]),-9);
    assert.strictEqual(maxTriSum([-14,-12,-7,-42,-809,-14,-12]),-33);
    assert.strictEqual(maxTriSum([-13,-50,57,13,67,-13,57,108,67]),232);
    assert.strictEqual(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29]),41);
    assert.strictEqual(maxTriSum([-2,0,2]),0);
    assert.strictEqual(maxTriSum([-2,-4,0,-9,2]),0);
    assert.strictEqual(maxTriSum([-5,-1,-9,0,2]),1);
  });
});


--------------
PREP

Parameters: 
    -An array of at least 3 integers, possible being pos, neg, 0.

Return: 
    - The highest sum reachable by adding 3 array elements, without using duplication 

Example:
    -[3,2,6,8,2,3] ==> 17

Psuedo Code:
    -Remove duplicates by declaring new Set object from param array, sorted descending
        -const noDuplicates = new Set(numbers.sort((a, b) => b - a));    
        
    -create an Array from the unique Set
        -const uniqueNumbers = Array.from(noDuplicates)
    
    -slice() array to first three elements and add via reduce
    
        -uniqueNumbers.slice(0, 3).reduce((a, b) => a + b))

    -return
        

*/

function maxTriSum(numbers){

    //Remove duplicates by declaring new Set object from param array, sorted descending
    const noDuplicates = new Set(numbers.sort((a, b) => b - a));

    //create an Array from the unique Set
    const uniqueNumbers = Array.from(noDuplicates);

    //slice() array to first three elements and add via reduce, return
    return uniqueNumbers.slice(0, 3).reduce((a, b) => a + b);
  }


  //refactored:

  function maxTriSum(numbers){
    
    //Remove duplicates by declaring new Set object from param array, sorted descending
     const noDuplicates = new Set(numbers.sort((a, b) => b - a));
 
   //Create array from unique values, .slice to first/highest 3 elements, and add via .reduce()
     return Array.from(noDuplicates).slice(0, 3).reduce((a, b) => a + b);
 
   }