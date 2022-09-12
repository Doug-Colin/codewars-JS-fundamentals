/*
--------------- 7 Kyu - Minimize Sum Of Array (Array Series #1) ------------------

Instructions:

Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product.
    -Array/list will contain positives only.
    -Array/list will always have even size.


-------------
Sample Tests

describe("Basic Tests", function(){
  it("should return the minimum sum", function(){
    Test.assertEquals(minSum([5,4,2,3]), 22);
    Test.assertEquals(minSum([12,6,10,26,3,24]), 342);
    Test.assertEquals(minSum([9,2,8,7,5,4,0,6]), 74);
  });
});

--------------
PREP

Parameters: An array of integers.

Return: 

Example:

Psuedo Code:
-declare variable to hold solution

-use while loop to multiply first and last (or lowest and highest) array elements, so long as the arr.length === true. Once the arrays elements are depleted via pop/shift, it will evaluate to false stop executing the code.

-use while loop to multiply first and last (or lowest and highest) array elements, so long as the arr.length === true. Once the arrays elements are depleted via pop/shift, it will evaluate to false stop executing the code.

*/

function minSum(arr) {
  //declare variable to hold solution
    let solution = 0
  
  //sort array in ascending order 
    arr.sort((a, b) => a - b);
    
  //use while loop to multiply first and last (or lowest and highest) array elements, so long as the arr.length === true. Once the arrays elements are depleted via pop/shift, it will evaluate to false stop executing the code.

    while (arr.length) {
        solution += (arr.pop()) * (arr.shift())
    }
    return solution;
  }