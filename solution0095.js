/*
--------------- 8 Kyu - Basic Training: Add item to an Array  ------------------

Instructions:

Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Checking Content", () => {
  it("Should not be empty", () => {
    assert.isNotEmpty(websites, 'The array is still empty')
  })
  it('Should contain "codewars"', () => {
    assert.include(websites, 'codewars', 'The array does not contain the correct value "codewars"')
  });
  it("Should only contain 1 item", () => {
    assert.lengthOf(websites, 1)
  })
});


--------------
PREP

Parameters: none, an array is defined

Return: add the string 'codewars' to the defined array

Example: var websites []; => websites == ['codewars']

Psuedo Code:
websites.push('codewars')

*/

// add the value "codewars" to the already defined websites array
websites.push('codewars');