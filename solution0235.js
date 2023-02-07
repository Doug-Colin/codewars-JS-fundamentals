/*
--------------- 6 Kyu - Calculate number of inversions in array ------------------

Instructions:

Array inversion indicates how far the array is from being sorted.

Inversions are pairs of elements in array that are out of order.

-------------
Sample Tests

const {assert} = require("chai");

describe("Sample tests", function() {
  it("Tests", function() {
    assert.strictEqual(countInversions([]), 0);
    assert.strictEqual(countInversions([1,2,3]), 0);
    assert.strictEqual(countInversions([2,1,3]), 1);
    assert.strictEqual(countInversions([6,5,4,3,2,1]), 15);
    assert.strictEqual(countInversions([6,5,4,3,3,3,3,2,1]), 30);
  });
});

--------------
PREP

Parameters: 
    -array, an array of integers

Return: 
    -the amount of 'inversions', or pairs of elements, that are out of order

Example:
    [1, 2, 3, 4]  =>  0 inversions
    [1, 3, 2, 4]  =>  1 inversion: 2 and 3
    [4, 1, 2, 3]  =>  3 inversions: 4 and 1, 4 and 2, 4 and 3
    [4, 3, 2, 1]  =>  6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1

Psuedo Code:
    -declare variable and assign ordered param array, ascending, via .sort()

    -compare sorted array and param array 

    -for each value that is out of order, it's index should represent the amount of inversions/pairs.

    -.so .push() the index of all out of order elements into an array 

    -use .reduce() to find the sum of that array and return 

*/
//-------------------- Solution- version with comments below -------------------------------------

//**solution did not work for arrays with duplicates, such as ex: [ 6, 5, 4, 3, 3, 3, 3, 2, 1 ]
function countInversions( array ){
    let inversions = []
    const sorted = array.slice().sort()
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== sorted[i]) {
          inversions.push(sorted.indexOf(array[i]))
        }
      }
      
      if ( inversions.length > 1) {
      solution = Array.from(new Set(inversions)).reduce((a,b) => a+b)
      } else {
        solution = 0
      }
    
    return solution
  }

//-------------------------- Solution With Comments ------------------------------------

//N/A

//----- Best Practices / Lessons Learned ---------------
//solution did not work. Asses the following successfull solutions:

function countInversions(arr){
    return arr.map((x, i) => arr.slice(i+1).filter(y => y < x).length).reduce((a, b) => a+b, 0);
  }

  function countInversions(array) {
    var numInversions = 0;
    
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        numInversions += array[i] > array[j];
      }
    }
    
    return numInversions;
  }