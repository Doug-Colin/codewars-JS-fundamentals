/*
--------------- 7 Kyu - Drone Fly-By ------------------

Instructions:

The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Drone Fly-By", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
    assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
    assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
  })
})

--------------
PREP

Parameters: 
    -Two strings, argument 'lamps' and 'drone', of unknown length. 
        -the lamps string consists of x's representing lamps: 'xxxxxx'  
        -the drone string consists of '=' and 'T', representing the 'path' of the drone from left to right. W
Return: 
    -string 'lamps', with as many x's coverted to o's as the length of string drone

Example:
    -('xxxxxx', '====T') => 'ooooox'
    -('xxxxxxxxx', '==T') => 'oooxxxxxx')

Psuedo Code:
    -use .split('') to convert to array
    -use .map to convert elements <= to drone.length into 'o'

    lamps.split('').map((element, index) => { ... index <= drone.length? 'o' etc}

    -return
    
*/


function flyBy(lamps, drone){
  
    //split('') lamps to convert to array
    return lamps.split('').map((element, index) => {
      
      //map() lamps array to return 'o' for elements <= the length of drone string
      //join('') back into string, return
      return index < drone.length? 'o' : 'x';}).join('');
    }