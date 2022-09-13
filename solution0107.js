/*
--------------- 7 Kyu - Nth Smallest Element (Array Series #4) ------------------

Instructions:

Task
    Given an array/list [] of integers , Find the Nth smallest element in this array of integers

Notes:
    Array/list size is at least 3 .

    Array/list's numbers could be a mixture of positives , negatives and zeros .

    Repetition in array/list's numbers could occur , so don't Remove Duplications .

-------------
Sample Tests

describe("Basic tests",() =>{
  Test.assertEquals(nthSmallest([3,1,2],2),2);
  Test.assertEquals(nthSmallest([15,20,7,10,4,3],3),7);
  Test.assertEquals(nthSmallest([-5,-1,-6,-18],4),-1);
  Test.assertEquals(nthSmallest([-102,-16,-1,-2,-367,-9],5),-2);
  Test.assertEquals(nthSmallest([2,169,13,-5,0,-1],4),2);
});

--------------
PREP

Parameters: An array of integers, and a single integer representing the Nth smallest integer of the array

Return: The Nth smallest integer of the array.

Example:

nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 

Psuedo Code:

-sort array via sort((a, b) => a - b)

-return arr[Nth - 1] 

*/

function nthSmallest(arr, pos){
    //sort array in ascending order 
    arr.sort((a, b) => a - b);
    //return the Nth lowest number, the index of which will be Nth/pos - 1.
    return arr[pos - 1];
  }