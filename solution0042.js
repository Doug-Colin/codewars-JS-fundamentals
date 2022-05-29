/*
--------------- 7 Kyu - Descending Order ------------------

Instructions:

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
-------------
Sample Tests



--------------

Psuedo Code:
To rearrange a number in descending order of integers, you must first:
-convert to an Array (.toString())
-.split('') array
-.sort() array, which is ascending
-.reverse() array
-.join('') array 
-turn that array into a Number

this ultimately worked, but I was forgetting the last step. Wrapped the statement with Number() and good to go.
*/

function descendingOrder(n){
    return Number(n.toString().split('').sort().reverse().join(''));
    }