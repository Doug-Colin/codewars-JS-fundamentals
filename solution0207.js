/*
--------------- 6 Kyu - Find the unique number ------------------

Instructions:

There is an array with some numbers. All numbers are equal except for one. Try to find it!

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
  it("Tests", () => {
    assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
    assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
    assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
    assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
  });
});

--------------
PREP

Parameters: 
    -arr, an array of integers containing one unique number

Return: 
    -the unique number


Example:
    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

Psuedo Code:
    -sort Array

    -if (arr[0]==arr[1]), return arr.pop(), otherwise return arr[0]



*/
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }



//----- Best Practices / Lessons Learned ---------------

//Due to the warning about large array tests/timeouts, I initially tried to solve this using .sort & .slice() with Math.max/Math.min(...arr). However, all attempts with this timed out. The solution was to make the code I had even simpler. So, sometimes if timing out, the solution might not be another approach, but simplifying what you have to the point where simple bracket notation or quick methods like .pop() are all you have.   