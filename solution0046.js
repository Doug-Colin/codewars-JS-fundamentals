/*  

---------- 7 Kyu - Highest and Lowest  -------------------

Instructions 

In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"


Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

---------------
Sample tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Test 1", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });
});

---------------
Psuedo Code


-we have a string with #'s separated by a space, so use .split(' ') to separate them 
into single numbers
-we can then use Math.max(...) and Math.min(...) to find highest/lowest


Lessons Learned:
-you can use the spread operator ('...') from ES6 in order to apply Math.max&min to an array


-----------------
*/


function highAndLow(numbers){
    let splitNum = numbers.split(' ');
    return `${Math.max(...splitNum)} ${Math.min(...splitNum)}`;
    }
