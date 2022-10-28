/*
--------------- 7 Kyu - Squares sequence ------------------
Instructions:

Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.



-------------
Sample Tests

const { assert } = require('chai');

describe("Sample tests", () => {
  it("Examples", () => {
    assert.sameOrderedMembers(squares(2,5),[2,4,16,256,65536]);   
    assert.sameOrderedMembers(squares(3,3),[3,9,81]);  
    assert.sameOrderedMembers(squares(5,3),[5,25,625]);  
    assert.sameOrderedMembers(squares(10,4),[10,100,10000,100000000]);  
  });

--------------
PREP

Parameters: 
    -n, representing the length of array
    -x, representing the first value in the array  

Return: 
    -the array with each element after the first being the square of the previous element

Example:

  2, 5  -->  [2, 4, 16, 256, 65536]
  3, 3  -->  [3, 9, 81]

Psuedo Code:
    -declare variable 'solution' and assign empty array to later hold solution
    -use for() loop to loop through numbers 0 through n
    -.push(x) into array with each iteration
    -reassign value of x as multiplication of itself upon each iteration (x *= x)
*/

function squares(x, n) {
  let solution = [];
  for(let i=0; i<n; i++){
    solution.push(x);
    x*= x;
  }
  return solution;
}
