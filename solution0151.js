/*
--------------- 6 Kyu - Bit Counting ------------------

Instructions:

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

-------------
Sample Tests



--------------
PREP

Parameters: 
    -a positive integer

Return: 
    -total occurrences of 1 in the parameter integer's binary equivalent.


Example:
    - The binary representation of 1234 is 10011010010, so the function should return 5 in this case

Psuedo Code:
    -use .toString(2) to convert number to base 2 / binary equivalent

    - .split('') string so we can work with it as an array

    -use .filter() on the array to return 1's


*/

var countBits = function(n) {
  
    //use .toString() with argument of base 2 to convert number to binary equivalent in string form 
    //.split('') string so we can work with it as an array
    //use .filter() on the array to return 1's
    return n.toString(2).split('').filter(x => x > 0).length
  
  };

