/*
--------------- 8 Kyu - Sorted? yes? no? how? ------------------

Instructions:

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("isSortedAndHow", function() {

  it("[1, 2]", function() {
    Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
  });
  
  it("[15, 7, 3, -8]", function() {
    Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
  });
  
  it("[4, 2, 30]", function() {
    Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
  });

});

--------------
PREP

Parameters: 
    -array, an array of integers 

Return: 
    -the instructed message depending on how the array is sorted

Example:
    N/A

Psuedo Code:
    -use .sort to create ascending and descending versions of array, save

    -use array comparison function with .every() to compare param array to ascending and descending versions 

    -pass arrays into our compare fucntion and use ternary to return message
*/

//-------------------- Solution (without comments) -------------------------------------

function isSortedAndHow(arr) {

    let asc = [...arr].sort((a,b) => a-b)
    let dsc = [...arr].sort((a,b) => b-a)
    
    const compareArrays = (a, b) => a.every((element, index) => element === b[index]);
    
    return compareArrays(arr, asc) ? "yes, ascending" :
           compareArrays(arr, dsc) ? "yes, descending" :
          "no"
}

//-------------------- Solution (with comments) ----------------------------------------

function isSortedAndHow(arr) {
  
    //use arr.sort() to create ascending and descending versions of param array
    //*note*: you must use the spread operator(...) here or the compareArrays function will not work.
    let asc = [...arr].sort((a,b) => a-b)
    let dsc = [...arr].sort((a,b) => b-a)
    
    //function compares arrays by element and index via .every()
    const compareArrays = (a, b) => a.every((element, index) => element === b[index]);
    
    //pass arrays into our compare function to compare
    //use chained ternary statement to return corresponding message
    return compareArrays(arr, asc) ? "yes, ascending" :
           compareArrays(arr, dsc) ? "yes, descending" :
          "no"
}

//--------------- Best Practices / Lessons Learned -------------------------------------

