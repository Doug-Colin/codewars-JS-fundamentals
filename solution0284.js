/*
--------------- 6 Kyu - Two Sum ------------------

Instructions:

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", function() {
  const testCases = [
    [[1,2,3],          4,     [0,2]],
    [[1234,5678,9012], 14690, [1,2]],
    [[2,2,3],          4,     [0,1]],
    [[2,3,1],          4,     [1,2]]
  ];
  for(const [numbers, target, expected] of testCases)
    it(`Testing for numbers = [${numbers.join(", ")}], target = ${target}`, () => check(numbers, target, expected));
  
  const numericalCompare = (a, b) => a - b;
  function check(arr, target, expected) {
    actual = twoSum(arr.slice(), target);
    assert.isArray(actual);
    assert.deepEqual(actual.sort(numericalCompare), expected);
  }
});

--------------
PREP

Parameters: 
    -numbers, an array of integers
    -target, the result of adding two different elements from the integers array

Return: 
    -in an array, the indexes of the two elements that can be added in order to equal target. order and occurrences do not matter

Example:
    twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

Psuedo Code:
    -use for loop to iterate through numbers array (forEach not suitable as well)

    -on each iteration/element, use for loop to iterate through the array. if arr[i]!==current element && elem + arr[i] == target, .push() indices of elemnt and arr[i] into a solution array
*/

//-------------------- Solution (without comments) -------------------------------------

function twoSum(numbers, target) {
    let solution = []
    
    for (let i = 0; i < numbers.length; i++) {
      const addend = numbers.find(x => numbers.indexOf(x) != i && numbers[i] + x === target)  
      if (addend) {
        solution.push(i)
        solution.push(numbers.indexOf(addend))
        break
      }
    }
    return solution
  }

//-------------------- Solution (with comments) ----------------------------------------

function twoSum(numbers, target) {
    //declare array to hold solution
    let solution = []
    //use for loop to iterate through numbers array
    for (let i = 0; i < numbers.length; i++) {
      //use numbers.find() to return the first element that isn't the current element, and can be added to current element to equal target
      const addend = numbers.find(x => numbers.indexOf(x) != i && numbers[i] + x === target)
      //if that's valud, push the relevant indices into the solution array and return 
      if (addend) {
        solution.push(i)
        solution.push(numbers.indexOf(addend))
        break
      }
    }
    return solution
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
//sometimes the simplest way is also the least code
function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
} 
