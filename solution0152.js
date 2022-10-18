/*
--------------- 6 Kyu - Find The Parity Outlier ------------------

Instructions:

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(findOutlier([0, 1, 2]), 1)
    Test.assertEquals(findOutlier([1, 2, 3]), 2)
    Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
    Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
    Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
  });
});


--------------
PREP

Parameters: 
    -an array composed of even integers, with one odd integer, or odd integers, with one even integer 

Return: 
    -the single outlier integer


Example:
    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number)

Psuedo Code:
    -filter array for even numbers via %2===0, save to variable
    -do the same for %2===1, save to variable
    -if the length of the even filtered array is one, return that single element, otherwise return the odd filtered array's single element 


*/
//NOTE: my orginal solution (below this one) did not work for all test cases. 

function findOutlier(integers){
  
    let evenN = integers.filter(x => x%2==0);
    let oddN = integers.filter(x => x%2!==0);
    
    return evenN.length == 1 ? evenN[0] : oddN[0];
    
  }
//------------------ My Orignal Solution, didn't work due to '===1'. It appears that the strict equality operator is caising the tests to fail because negative odd numbers return a negative one. This doesn't matter for 0 because negative even #'s would still return 0. ------------------------------------------------------------------------ 
  function findOutlier(integers){
  
    // .filter()  array of even 
    let evenN = integers.filter(x => x%2===0);
    let oddN = integers.filter(x => x%2===1);
    
    return evenN.length === 1 ? evenN[0] : oddN[0];
    
  }