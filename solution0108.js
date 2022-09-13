/*
--------------- 7 Kyu - Product Of Maximums Of Array (Array Series #2) ------------------

Instructions:

Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
    Array/list size is at least 3 .

    Array/list's numbers Will be mixture of positives , negatives and zeros

    Repetition of numbers in the array/list could occur.

-------------
Sample Tests

describe("Basic tests",() =>{
  Test.assertEquals(maxProduct([4,3,5], 2), 20);
  Test.assertEquals(maxProduct([10,8,7,9], 3), 720);
  Test.assertEquals(maxProduct([8,6,4,6], 3), 288);
  Test.assertEquals(maxProduct([10,2,3,8,1,10,4], 5), 9600);
  Test.assertEquals(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5), 247895375);
  Test.assertEquals(maxProduct([-4,-27,-15,-6,-1], 2), 4);
  Test.assertEquals(maxProduct([-17,-8,-102,-309], 2), 136);
  Test.assertEquals(maxProduct([10,3,-27,-1], 3), -30);
  Test.assertEquals(maxProduct([14,29,-28,39,-16,-48], 4), -253344);
  Test.assertEquals(maxProduct([1], 1), 1);
});

--------------
PREP

Parameters: 
    -[numbers], an array of integers which may be positive, negative, or zero.
    -(size), an integer representing the the amount of array elements that we must find the maximal product of.   

Return: The maximal product of (size) integers

Example:
    {4, 3, 5}, 2) ==>  20  (The maximal product of 2 integers in this array is 5*4=20)
    {8, 10 , 9, 7}, 3) ==>  720  (The maximal product of 3 integers in this array is 8*9*10=720)

Psuedo Code:

    -sort array descending via sort((a, b) => b - a)

    -Multiply the (size) parameter # of first elements in the array by each other.
    
        -first use .slice(0, size) to return the 'size' # of array elements
        -multiply all those elements via .reduce((a, b) => a * b)

        -return result

*/
//refactored:

function maxProduct(numbers, size){
                //sort() array descending
    return numbers.sort((a, b) => b - a)
                //.slice() array to contain only the first 'size' # of elements
                  .slice(0, size)
                //multiply those elements via .reduce()            
                  .reduce((a, b) => a * b);
  }