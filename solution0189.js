/*
--------------- 6 Kyu - Playing with digits ------------------

Instructions:

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(digPow(89, 1), 1)
Test.assertEquals(digPow(92, 1), -1)
Test.assertEquals(digPow(46288, 3), 51)

  });
});

--------------
PREP

Parameters: 
    -n, a positive integer
    -p, a positive integer, representing the successive powers to which we will evaluate each digit of n, incremenetally   

Return: 
    -if it exists, k, a number which when multiplied by param n, equals the sum of all the digits of n after each being taken to the successive powers of p. 
    -if k does not exist, -1


Example:
    digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
    digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
    digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
    digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Psuedo Code:
    -declara array powers to hold successive increments of p

    -.split() n into an array of integers

    -use .map() to map array of integers to successive powers of p via **, iterating p via ++

    -use .reduce() to find sum

    -use for() loop to iterate:
            -starting with 0
            -stopping when n * i is greater than sum
            
    -if n*i == sum we have valid k, return, if not return -1


*/

function digPow(n, p){
  
    //separate n into an array of digits, save as variable
    let digits = n.toString().split('')
    
    //use .map() to create and array of each digit evaluated to the successive powers of p
    //use the increment (++) operator so that p increments as we evaluate each digit of n
    //find sum via .reduce()
    let sum = digits.map((x) => x** p++).reduce((a, b) => a + b)
  
    //declare variable k to hold solution
    let k 
    
    ////iterate through numbers, starting at 0 and stopping when (i * n) is greater than our sum
    //if (i * n) == sum, k is valid, return it
    for (let i = 0; n * i <= sum; i++) {
    if (n * i == sum) {
      k = i
    } else {
      k = -1
    }
  } 
    return k
  }

  //----- Best Practices / Lessons Learned ---------------

  //Clean solution!!

