/*
--------------- 8 Kyu - Sum without highest and lowest number ------------------

Instructions:

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

-------------
Sample Tests



--------------
PREP

Parameters: 
    -an array, containing integers or null 

Return: 
    -the sum of the array minus the highest and lowest values (null --> 0, arr.length <= 2 --> 0)


Example:
    { 6, 2, 1, 8, 10 } => 16
    { 1, 1, 11, 2, 3 } => 6

Psuedo Code:
    -return 0 if array is null or less than three elements in length

    -otherwise sort() array ascending, remove highest and lowest values via .pop() & shift()

    -return sum via .reduce()


*/
//refactored:

//----- Best Practices / Lessons Learned ---------------


function sumArray(array) {
  
    //if array is null or 2 values or less, return 0
    if (array == null || array.length <= 2) {
      return 0
      } else {
        //otherwise, sort array ascending, remove highest element via .pop() and lowest via .shift()
        //return sum via .reduce()
        array.sort((a,b) => a - b).pop()
        array.shift()
        return array.reduce((a, b) => a + b);
      }
    }