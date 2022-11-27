/*
--------------- 7 Kyu - Sum of angles ------------------

Instructions:

Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(angle(3), 180);
    assert.strictEqual(angle(4), 360);
  });
})


--------------
PREP

Parameters: 
    -n, the number of sides of apolygon 

Return: 
    -the sum of the angles within the polygon       


Example:
    n/a

Psuedo Code:
    -formula for sum of angles of polygon is (sides - 2) * 180 , so return (n-2) * 180


*/

function angle(n) {
    return (n-2) * 180;
  }