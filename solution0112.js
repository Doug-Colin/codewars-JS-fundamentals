/*
--------------- 7 Kyu - Minimum Steps (Array Series #6) ------------------

Instructions:

Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

    List size is at least 3.

    All numbers will be positive.

    Numbers could occur more than once , (Duplications may exist).

    Threshold K will always be reachable.



-------------
Sample Tests

describe("Basic tests",() =>{
  Test.assertEquals(minimumSteps([4,6,3], 7), 1);
  Test.assertEquals(minimumSteps([10,9,9,8], 17), 1);
  Test.assertEquals(minimumSteps([8,9,10,4,2], 23), 3);
  Test.assertEquals(minimumSteps([19,98,69,28,75,45,17,98,67], 464), 8);
  Test.assertEquals(minimumSteps([4,6,3], 2), 0);
});

--------------
PREP

Parameters: 
    - numbers- an array of integers
    - value - a single integer

Return: 
    - if you  sort() [numbers] ascending, starting from the lowest integer, how many times must you add the following integer until you reach a number >= given value.

Example:
    - [1, 10, 12, 9, 2, 3], 6 => 2
    - first we add elements 1 + 3, then + 3, equaling 6. So we return 2 as two operations were required.  

Psuedo Code:

    -declare variables to hold sums and accumulator

    -sort() array ascendinhg
        -numbers.sort((a,b) => a - b)

    -loop through array finding sums

    -push sums into array; each element index + 1 represents a sum operation
    
    -return how many sum operations are necessary to reach value
*/

function minimumSteps(numbers, value){

    //declare array to hold sums
    let sums = []

    //declare sum to accumulate sums
    let sum = 0

    //sort array ascending
    numbers.sort((a, b) => a - b);

    //loop through array, adding elements to each other, and pushing result of each operation to sums array
    for (let i = 0; i < numbers.length; i++) {
        sums.push(sum += numbers[i]);
      }

    //filter sums array for sum >= value, once reached, return # of operations via array length. 
      return sums.filter(x => xs < value).length;
  }
