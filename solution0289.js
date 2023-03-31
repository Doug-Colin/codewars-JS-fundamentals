/*
--------------- 6 Kyu - Data Reverse ------------------

Instructions:

A stream of data is received and needs to be reversed. Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)

The total number of bits will always be a multiple of 8. The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Data Reverse", function(){
  it("Example Tests", function(){
    const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
    const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
    assert.deepEqual(dataReverse(data1),data2)
    const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
    const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
    assert.deepEqual(dataReverse(data3),data4)
  });
});

--------------
PREP

Parameters: 
    -data, an array of ones and zeros, with each 8-char (or bit) segment representing a byte

Return: 
    -the array, separated into 8-char bytes, then reversed and rejoined.

Example:
    -see above

Psuedo Code:
    -use for loop starting at 0 and in increments of 8 to push segments into new array.

    -reverse that array and rejoin. 

    -


*/

//-------------------- Solution (without comments) -------------------------------------

function dataReverse(data) {
  
    //declare variables to hold length, and an empty array for our solution 
    let length = data.length,
        bitReverse = []
    
    for (let i = length; i > 0; i-=8) {  
      start = length -= 8
      bitReverse.push(data.slice(start, i))
    }

    return bitReverse.flat()
  }

//-------------------- Solution (with comments) ----------------------------------------

function dataReverse(data) {
  
    //declare variables to hold length, and an empty array for our solution 
    let length = data.length,
        bitReverse = []
    
    //use decremental for loop to iterate from length of data arr down to 0 in increments of 8
    //use start to do the same on each iteration, but 8 ahead/behind of i
    //use start as the index to start .slice() and i as the end
    //push each 'byte' into our empty solution array 
    for (let i = length; i > 0; i-=8) {  
      start = length -= 8
      bitReverse.push(data.slice(start, i))
    }
    //solution array now has each byte as a nested array, so flatten it and return it
    return bitReverse.flat()
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

//Could have used an incremental for loop and .unshift() to pull from front of array, saving 