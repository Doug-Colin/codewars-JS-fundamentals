/*
--------------- 7 Kyu - Maximum Multiple ------------------

Instructions:

Task
    Given a Divisor and a Bound , Find the largest integer N , Such That:

Conditions :
    -N is divisible by divisor
    -N is less than or equal to bound
    -N is greater than 0.

Notes
    -The parameters (divisor, bound) passed to the function are only positive values .
    -It's guaranteed that a divisor is Found .

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(maxMultiple(2,7),6);
    assert.strictEqual(maxMultiple(3,10),9);
    assert.strictEqual(maxMultiple(7,17),14);
    assert.strictEqual(maxMultiple(10,50),50);
    assert.strictEqual(maxMultiple(37,200),185);
    assert.strictEqual(maxMultiple(7,100),98);
  });
})


--------------
PREP

Parameters: 
    -divisor, a number the solution must be divisible by, and
    -bound, the upper limit of the solution

Return: 
    -the largest integer divisble by param divisor and less than or equal to param bound.


Example:
    maxMultiple (2,7) ==> return (6)
    maxMultiple (10,50)  ==> return (50)
    maxMultiple (37,200) ==> return (185)


Psuedo Code:
    -declare solution variable to store solution if necessary
     
    -use for loop to decrement from bound through divisor 

    -if (i % divisor == 0) {
        break 
        solution = i
    }

    -return solution


*/
//-------------------- Solution- version with comments below -------------------------------------

function maxMultiple(divisor, bound){

    let solution
  
    for (let i = bound; i >= divisor; i--) {
      if (i % divisor == 0) {
        solution = i;
        break
      } 
    }
  
    return solution;
  }

//-------------------------- Solution With Comments ------------------------------------

function maxMultiple(divisor, bound){
    //declare solution variable to hold solution
    let solution
  
    //use for loop to decrement from bound down through divisor
    //use modulus operator (%) to determine if i is divisible by divisor
    //if so, save i to solution variable, and break loop
    for (let i = bound; i >= divisor; i--) {
      if (i % divisor == 0) {
        solution = i;
        break
      } 
    }
    //return solution
    return solution;
  }

//----- Best Practices / Lessons Learned ---------------
//Top solution

//By determining the remainder after dividing bound by divisor, we know the difference between bound and the next divisible number. So simply subtract that remainder from bound to find solution. 
function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }
