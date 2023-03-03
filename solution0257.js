/*
--------------- 6 Kyu - Are they the "same"? ------------------

Instructions:

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

-------------
Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    assert.isTrue(comp(a1, a2));
  });
});


--------------
PREP

Parameters: 
    -array1, an array of integers
    -array2, an array of integers

Return: 
    -if param is empty, false
    -true if array2 contains the square of all the values in array 1, including duplicates 

Example:
Returns True
    a = [121, 144, 19, 161, 19, 144, 19, 11]  
    b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
Returns False (36100 is not the square of any value in array1)
    a = [121, 144, 19, 161, 19, 144, 19, 11]  
    b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361] 

Psuedo Code:
    -.sort() arrays ascending

    -use .map() to return new array, squaring each element in array1

    -compare equality of new squared array and array2 by converting .toString() and comparing (cannot use equality operator on array to compare directly)


*/

//-------------------- Solution (without comments) -------------------------------------

function comp(a, b){
    
    if (a == null || b == null) {
      return false
    } else {
    
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)  
   
    return a.map(x=>x**2).toString() === b.toString() ? true : false  
    }
  }

//-------------------- Solution (with comments) ----------------------------------------

function comp(a, b){
    //if either array is null, return false
    if (a == null || b == null) {
      return false
    } else {
    //otherwise, use .sort() to sort arrays ascending
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)  
    //use .map() to square all elements in sorted array a
    //check if that equals array by by converting both .toString() and comparing
    //if so, return true, otherwise false
    return a.map(x=>x**2).toString() === b.toString() ? true : false  
    }
  }

//--------------- Best Practices / Lessons Learned -------------------------------------