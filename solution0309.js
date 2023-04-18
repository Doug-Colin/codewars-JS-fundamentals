/*
--------------- 7 Kyu - Deodorant Evaporator ------------------

Instructions:

This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(evaporator(10,10,10),22);
  });
});

--------------
PREP

Parameters: 
    -content, the amount in the evaporator
    -evap_per_day, the amount that evaporates each day
    -threshold, the percentage of content beyond which the evaporator is no longer useful  

Return: 
    -the amount of days until evaporator is no longer useful

Example:
    evaporator(10, 10, 5) -> 29

Psuedo Code:
    -convert threshold to an amount: content*threshold/100

    -use while loop to, so long as content>threshold amount, push each days lower content into an array

    -array length should be days required till content is below threshold, so return .length


*/

//-------------------- Solution (without comments) -------------------------------------

function evaporator(content, evap_per_day, threshold){ 
    threshold = threshold/100 * content 
    let arr = []

    while (content > threshold) {
      content = content - content * (evap_per_day/100)
      arr.push(content)
    }
    return arr.length
  }

//-------------------- Solution (with comments) ----------------------------------------

function evaporator(content, evap_per_day, threshold){ 
    //convert threshold to an amount of content
    threshold = threshold/100 * content
    
    //declare empty array to hold content of each day 
    let arr = []
    
    //while the content is greater than the threshold amount,
    //reassign the value of content to it's lower value after evaporation
    //.push() the value into an array
    while (content > threshold) {
      content = content - content * (evap_per_day/100)
      arr.push(content)
    }
    //each array element represents a day
    //return length of array
    return arr.length
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

