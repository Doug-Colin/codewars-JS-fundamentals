/*
--------------- 5 Kyu - Moving Zeros To The End ------------------

Instructions:

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

-------------
Sample Tests

const {assert, config} = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  });
});

--------------
PREP

Parameters: 
    -arr, an array of digits

Return: 
    -the same array, with all of the zeros moved to the end of the array


Example:
    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

Psuedo Code:
    -use .filter() to isolate zeros and zon-zeros into different arrays (save as variables)

    -use loop of .forEach() to .push() all zeros from zero array onto end of non-zero arrray 

*/
//-------------------- Solution- version with comments below -------------------------------------
function moveZeros(arr) {

    const zeros = arr.filter(x => x === 0)

    const endZeros = arr.filter(x => !(x === 0))

    zeros.forEach(zero => endZeros.push(zero))

    return endZeros  
  }

//-------------------------- Solution With Comments ------------------------------------
function moveZeros(arr) {
  
    //save zeros to array by filtering for 0's with strict equality operator (===)
    const zeros = arr.filter(x => x === 0)
    
    //save non-zeros to array by filtering for elements not striictly equal to 0
    const endZeros = arr.filter(x =>  !(x === 0))
    
    //Use forEach to .push() each zero from our zero array onto the end of our non-zero array 
    zeros.forEach(zero => endZeros.push(zero))
    
    //return
    return endZeros  
  }

//----- Best Practices / Lessons Learned ---------------

//nice and concise solution here using .concat()
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }