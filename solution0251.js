/*
--------------- 7 Kyu - Sum of Minimums! ------------------

Instructions:

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

-------------
Sample Tests

describe("Basic tests", () => {
  it("Testing for [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]", () => assert.strictEqual(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9));
  it("Testing for [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]", () => assert.strictEqual(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76));
});


--------------
PREP

Parameters: 
    -arr, an array with subarrays of number values

Return: 
    -the sum of the minumum values of the subarrays 

Example:

    [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
    , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
    , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
    ]

    So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Psuedo Code:
    -use .forEach() and Math.min(...) to create array of min values 

    -use .reduce() to sum values and return
*/

//-------------------- Solution (without comments) -------------------------------------

function sumOfMinimums(arr) {r
    let mins = []
    
    arr.forEach((x) => {
      mins.push(Math.min(...x))
    })
    
    return mins.reduce((a, b) => a + b)
  }

//-------------------- Solution (with comments) ----------------------------------------

function sumOfMinimums(arr) {
    //declare empty array to hold the minimum values of each subarray in arr
    let mins = []
    
    //use .forEach() and Math.min() to find min. value of each subarray, and .push() it into mins array  
    arr.forEach((x) => {
      mins.push(Math.min(...x))
    })
    
    //use .reduce() sum function to add together all values of mins array
    return mins.reduce((a, b) => a + b)
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
//interesting approach that skips iteration
function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
  }