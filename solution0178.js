/*
--------------- 8 Kyu - Thinkful - Logic Drills: Traffic light
 ------------------

Instructions:

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(updateLight("green"), "yellow");
    assert.strictEqual(updateLight("yellow"), "red");
    assert.strictEqual(updateLight("red"), "green");
  });
});

--------------
PREP

Parameters: 
    -current, a string representing the current stage of a traffic light

Return: 
    -the next stage of the traffic light. 


Example: N/A


Psuedo Code:
    -create Object with key-value pairs of current : nextLight

    -return the next light by passing current into the Object via bracket notation
*/


function updateLight(current) {
  
    // create Object with key-value pairs, where the keys (or properties) are current lights,  
    // and the value of each of those keys is the next light.
    
    const lightOrder = {
      'green' : 'yellow',
      'yellow' : 'red',
      'red' : 'green'
    }
    
    // by using bracket notation (Object[key]), we can access the value of any key in an object. 
    // return the next light by doing so 
      
    return lightOrder[current];
  }