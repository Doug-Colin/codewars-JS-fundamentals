/*
--------------- 7 Kyu - Triangular Treasure ------------------

Instructions:

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

-------------
Sample Tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual( triangular(2), 3 )
    assert.strictEqual( triangular(4), 10 )
    assert.strictEqual( triangular(-454), 0 )
  })
})


--------------
PREP

Parameters: 
    -n, a number

Return: 
    -the amount of 'dots' required to complete a drawing of a triangle or pyramid, if the given number is laid out as dots that for the base of the triangle.   

Example:
    1st (1)   2nd (3)    3rd (6) 4th (10?)
    *          **        ***     ****   
               *         **      ***
                         *       **   
                                 *
    0 --> 0
    2 --> 3
    3 --> 6
    -10 --> 0

    Psuedo Code:
    -if num is <= 0, return 0 

    -otherwise, iterate from 1 through num, incrementing count, and return count



*/

//-------------------- Solution (without comments) -------------------------------------


function triangular( n ) {
    let count = 0

    for (let i = 1; i <= n; i++) {
      count+=i
    }
    
    return count
  }

//-------------------- Solution (with comments) ----------------------------------------

// Return the nth triangular number
function triangular( n ) {
    //declare variable to hold our count, assign 0
    let count = 0
    //use for loop to iterate from 1 through n, add each value to our cont variable
    for (let i = 1; i <= n; i++) {
      count+=i
    }
    //return count
    //if n < 0, our count will remain at its assigned 0
    return count
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

