/*
---------------6  Kyu - Multiplication table ------------------

Instructions:

Your task, is to create N×N multiplication table, of size provided in parameter.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
  });
});


--------------
PREP

Parameters: 
    -
    -  

Return: 
    -a multiplication table of the size given by parameter, in an array, with each row in the form of a subarray.

Example:
    When given size 3, output should be:
    1 2 3
    2 4 6
    3 6 9

Psuedo Code:
    -first row iterates by 1, second row iterates by two, third row three, etc. 

    -declare empty array to hold solution
    
    -use for... loop to increment from 1 through size, creating an array with subarrays of each increment, and pushing them into solution array

    -call .map() or forEach on the the solution array, and for each element/subarray, use another for... loop to loop size times, and .push the additional elements in, in increments of each subarrays original element. 

    -return
*/

//-------------------- Solution (without comments) -------------------------------------
multiplicationTable = function(size) {
    let solution = []
    
    for (let i = 1; i <= size; i++) {
    solution.push([i])
    }
    
    solution.map((x) => {
      for (let j = x[0] + x[0]; j <= x[0]*size; j+=x[0]) {
        x.push(j)
      }
    })
    
    return solution
  }
//-------------------- Solution (with comments) ----------------------------------------

multiplicationTable = function(size) {
    //declare empty array to hold our solution/subarrays
    let solution = []
    //build the initial values of each row of our multiplication table by:
        //using for loop to iterate from 1 through size, in increments of 1, pushing each value into solution array as a subarray  
    for (let i = 1; i <= size; i++) {
    solution.push([i])
    }
    //Now that we have the initial values of each row, fill them out by:
        //.mapping our solution array and running a for loop on each element, that iterates from that initial value + itself, through that value*size, in increments of that value 
        //on each loop iteration, .push() the increment into the subarray
    solution.map((x) => {
      for (let j = x[0] + x[0]; j <= x[0]*size; j+=x[0]) {
        x.push(j)
      }
    })
    
    return solution
  }
