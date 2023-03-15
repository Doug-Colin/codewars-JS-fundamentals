/*
--------------- 8 Kyu - Surface Area and Volume of a Box ------------------

Instructions:

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(getSize(4, 2, 6), [88, 48]);   
    assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
    assert.deepEqual(getSize(4, 2, 6)[0], 88);
    assert.deepEqual(getSize(4, 2, 6)[1], 48);
  })
});

--------------
PREP

Parameters: 
    -three params each representing the width, height, and depth of a box

Return: 
    -an array, with the first element being the box's are and second its volume

Example:
    (4, 2, 6) --> [88, 48]

Psuedo Code:
    -declare empty array to hold solution
    
    -surface area = 2*l*w + 2*l*h + 2*w*h

    -.push surface area

    -volume= l*w*h, .push volume, return
*/

//-------------------- Solution (without comments) -------------------------------------

function getSize (w, h, l) {

    const sa = 2*l*w + 2*l*h + 2*w*h
    const volume = l*w*h

    return [sa, volume]
  }

//-------------------- Solution (with comments) ----------------------------------------

function getSize (w, h, l) {
    //use formulas for surface area and volume to find each and save to variable
    const sa = 2*l*w + 2*l*h + 2*w*h
    const volume = l*w*h
    //return an array with those variables in the requested order
    return [sa, volume]
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

