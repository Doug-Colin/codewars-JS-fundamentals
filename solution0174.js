/*
--------------- 7 Kyu - Don't give me five! ------------------

Instructions:

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("KataTests", function(){
  it("exampleTests", function(){
    Test.assertEquals(dontGiveMeFive(1,9), 8);
    Test.assertEquals(dontGiveMeFive(4,17), 12);
  });
});

--------------
PREP

Parameters: 
    -start, a number representing the beginning of a range.
    -end, a number representing the end of the same range.

Return: 
    -all of the numbers from start through end, except those witha 5 in it. 


Example:
    1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
    4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

Psuedo Code:
    -use for loop to loop through all nums between

    -use .filter() function to return all nums except those including a 5
        -will likely need to stringify the nums, (String(), + '', etc. )

    -return length of filtered array

*/

function dontGiveMeFive(start, end) {

    //declare empty array to hold range of numbers
    let range = []
  
    //loop through all integers between start and end via for loop
    //push() integers into range array, converting them to strings so we can check if they include 5 
    for (let i = start; i <= end; i++) {
      range.push(i+'')
    }
    
    //filter range array for elements that don't include 5, and return length
    return range.filter(x => !x.includes(5)).length
   
  }

//----- Best Practices / Lessons Learned ---------------
