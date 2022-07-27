/*  

---------- 8 Kyu Is n divisible by x and y? -------------------

Instructions 

Create a function that checks if a number n is divisible by two numbers x AND y. 
All inputs are positive, non-zero digits.

xamples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

---------------
Sample tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(isDivisible(3,3,4),false);
    assert.strictEqual(isDivisible(12,3,4),true);
    assert.strictEqual(isDivisible(8,3,4),false);
    assert.strictEqual(isDivisible(48,3,4),true);
  });
});

---------------
Psuedo Code
-need to determine if n mod x || y is an integer or a float
-this can be done by checking if that value % 1 = 0, as integers%1=0 and floats%1 do not.

Lessons Learned:
-you don't ned the ternary operator here; whenever you are seeking a single condition to return boolean values, it will automatically
 resolve to true or false
-----------------
*/

function isDivisible(n, x, y) {
    return (n / x) % 1 === 0 && (n / y) % 1 === 0 ? true : false;
  }