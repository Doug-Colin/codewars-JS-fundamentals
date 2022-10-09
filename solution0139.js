/*
--------------- 7 Kyu - Find the stray number ------------------

Instructions:

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

-------------
Sample Tests



--------------
PREP

Parameters: 
    - an array of identical integers, except for one element. Array will always have odd length.  

Return: 
    -the unique integer 

Examples:
    - [1, 1, 2] ==> 2
    - [17, 17, 3, 17, 17, 17, 17] ==> 3

Psuedo Code:
    -loop through array element

    -compare equality of .indexOf and .lastIndexOf each element, if equal, element is unique

    -return unique element


*/


function stray(numbers) {
 
    //use for loop to loop through numbers array
    //use .indexOf() to traverse array forward from first element, for the index of each element
    //use .lastIndexOf() to traverse array backward from last element, for the index of each element
    //if the index of an element is the same whether traversing array fowards or backwards, it must once in the array
    //return that element
      
      for (let i = 0; i < numbers.length; i++) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
          return(numbers[i])
        }
      }
      
    }