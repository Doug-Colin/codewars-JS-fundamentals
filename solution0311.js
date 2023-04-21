/*
--------------- 7 Kyu - Factorial ------------------

Instructions:

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

-------------
Sample Tests

describe("Basic tests",() =>{
Test.assertEquals(factorial(0), 1);
Test.assertEquals(factorial(1), 1);
Test.assertEquals(factorial(4), 24);
Test.assertEquals(factorial(7), 5040);
Test.assertEquals(factorial(17), 355687428096000);
})

--------------
PREP

Parameters: 
    -n, an integer (seems positive)

Return: 
    -the product of all integers less than or equal to n

Example:
    none given

Psuedo Code:
    -use for or while loop to decrement from n to 0, adding each value to count 


*/

//-------------------- Solution (without comments) -------------------------------------
function factorial(n){

    for (let i = n-1; i > 0; i--) {
      n*=i
    }

    return n || 1
  }


//-------------------- Solution (with comments) ----------------------------------------

function factorial(n){
    //use decremental for loop to decrement from n through 1
    //on each iteration, reassign the value of n to n*i via the *= operator
    for (let i = n-1; i > 0; i--) {
      n*=i
    }
    //return n, which should now be our factorial value
    //the factorial of 0 is 1 for some fucking reason so alternately return 1
    return n || 1
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

