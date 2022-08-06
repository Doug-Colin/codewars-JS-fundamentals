/*
--------------- 6 Kyu - Multiples of 3 or 5 ------------------

Instructions:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

-------------
Sample Tests

const { assert } = require("chai")

function test(n, expected) {
  let actual = solution(n)
  it(`Expected ${expected}, got ${actual}`, () => {  
  assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function(){
  test(10,23)
})

--------------

Psuedo Code:

-Goal is to iterate from 1 through the given number and find each number below the given number that is a multiple of 3 or 5, and then find the sum of those
-if it's a multiple of 3 and 5, only count it once
-if the number is negative just return 0

- if number < 0 return 0
- use a loop to iterate through number finding the multiples of 3 or 5 by %3 and %5 = 0
-declare and assign an empty array
-put multiples of 3 and 5 into the array
-use .reduce to find sum

Lessons Learned:
-you could have made this more brief, skipping the array and .reduce() steps, by:
    -instead declaring a variable sum = 0;  
    -running the for loop and with the same conditional and reassigning sum +=i
    -then simply return sum; whcih should give 0 in event of neg. param, as the loop won't be performed
(see second solution below)
*/

function solution(number){
    if (number < 0) {
      return 0 
    } else {
    let arr = []
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0)  {
      arr.push(i)}
    }
      return arr.reduce((a, b) => a + b, 0)
  }
}

// -----------------------------------------------------------------

function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }