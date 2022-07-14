/*
--------------- 8 Kyu - Count of positives / sum of negatives ------------------

Instructions:

Count of positives / sum of negatives
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

-------------
Sample Tests



--------------

Psuedo Code:



*/

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) {
      return []}
      else {
    let posArr = (input.filter(x => x > 0));
    let negArr = (input.filter(x => x < 0));
    
    const initialValue = 0;
    const sumWithInitial = negArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue);
    
    return [(posArr.length), (sumWithInitial)];}
    
    }
/*  Lessons learned:
.map() vs .filter():
use .filter() when you want to apply a condition to each element of an array
use .map() when you want to apply a function to each element of an array

-DO NOT keep coding in the Codewars sandbox. 
-Read the instructions slowly and carefully, and then again.

I had the correct solution when writing in Chromeconsole, but kept failing tests and couldn't understand why.

There were two reasons why:

1- I didn't take time to clearly read instructions and missed that I needed to return an empty array if the input was an empty array, or if it was null

2-In the Codewars sandbox my commented out code had an opening multi line comment tag (/*) and not a closing one, this caused it to repeatedly fail tests while they were working in the console. 
*/