/*
--------------- 7 Kyu - Product Array ------------------

Instructions:

Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
    
    -Array/list size is at least 2.

    -Array/list's numbers Will be only Positives

    -Repetition of numbers in the array/list could occur.

-------------
Sample Tests

describe("Basic Tests",() =>{
  Test.assertSimilar(productArray([12,20]), [20,12]);
  Test.assertSimilar(productArray([3,27,4,2]), [216,24,162,324]);
  Test.assertSimilar(productArray([13,10,5,2,9]), [900,1170,2340,5850,1300]);
  Test.assertSimilar(productArray([16,17,4,3,5,2]), [2040,1920,8160,10880,6528,16320]);
});

--------------
PREP

Parameters: 
    - An array of integers

Return: 
    - An array of equal size to the given param, wherin each element is the multiplication product of all elements in param array **except** the element with index corresponding to that product. For example, the third element in our product array will be the result of multiplying all param array elements **except** the third element.   

Example:
    - Using the below ex., first retrurned element 10 is the result of multiplying all elements in param arary **except** 1, because that is the element with corresponding index.

    -({1,5,2}) ==> return {10,2,5}
    

Psuedo Code 
    -create empty array to hold solution    

    -map() the param array/forEach element, applying .reduce() ot the array without that element 
    
    -But how to remove each element, and then add it back? 

Lessons Learned

    -removing each element, applying a function, then reinsterting the element and repeating for all elements is surprisingly difficult. 

    -Most top solutions to this were math-based; multiply all elements, then divide  by the current iterated element, to reverse that elements product rather than actually find the array's product without the element.
    
    -consider whether mathematical challenges can be solved mathematically, instead of through manual manupulation of arrays.
*/


function productArray(numbers){
    return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
  }