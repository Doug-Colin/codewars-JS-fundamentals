/*
--------------- 6 Kyu - Tortoise racing ------------------

Instructions:

Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

-------------
Sample Tests

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tortoise Racing",function() {
  it("Basic tests ",function() {            
    assert.deepEqual(race(720, 850, 70), [0, 32, 18])
    assert.deepEqual(race(80, 91, 37), [3, 21, 49])
    assert.deepEqual(race(80, 100, 40), [2, 0, 0])
    assert.deepEqual(race(720, 850, 37), [0, 17, 4])
})})

--------------
PREP

Parameters: 
    -v1 andn v2, representing the speeds of two objects in feet per hour
    -g, representing the lead v1 has over v2, in feet

Return: 
    -the time needed for v2 to catch v1, as array [hours, minutes, seconds]
    -if v1 is >= v2, return null 


Example:
    race(720, 850, 70) => [0, 32, 18] or "0 32 18"
    race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

Psuedo Code:

    --use ternary to return null if v1 >= v2, otherwise:

    -you can calculate how long it willl take an object ot catch up to another by their difference in speed.
        so find difference in speed: let catchUpSpeed = v2 - v1 

    -caluclate time to catchup
        let time = g/catchUpSpeed

    -convert decimal time to [hours, min, sec]:
        find total hours by rounding decimal down via Math.floor(), so that we don't include seconds & minutes
        
        find *total* minutes by multiplying decimal by 60, then subtract hours from that via %60. Round down via Math.floor, so that we're not including the seconds.
        
        find *total* seconds by multiplying decimal by 60 twice, or by multiplying it by 3600, then subtract minutes from that via %60, and round down via Math.floor(), so that we're not including whatever comes after seconds.
*/


function race(v1, v2, g){
  
    //find speed that object 2 will catch up to object 1 by difference in their speeds
    let catchUpSpeed = v2-v1
    
    //find time it will take to catch up  by dividing distance by catchUpSpeed
    let time=g/catchUpSpeed
  
    /*  
    Declare solution that holds the time in an array of [hr, min, sec]
      -find hours by rounding decimal down via Math.floor()
      
      -find total minutes (time * 60) and subtract hours (% 60). Use Math.floor() to round down, so 
       we're not including seconds.
       
      -find total seconds (time * 60 * 60) and subtract minutes (% 60). Use Math.floor() to round down, so 
       we're not including sub-seconds.
    */
      let solution = [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)]
    
    //use ternary to return null if v1 >= v2, otherwise return solution
    return v1>=v2 ? null : solution;
  }