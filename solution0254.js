/*
--------------- 8 Kyu - Area of a Square (via quarter circle arc) ------------------

Instructions:

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

(image pictured is a square with an arc 'A' from corner to opposite corner)

-------------
Sample Tests

const { assert } = require('chai')

describe("Example tests", () => {
  
  it("squareArea(2)", function() {
    assert.closeTo(squareArea(2), 1.62, 1e-2);
  });

  it("squareArea(0)", function() {
    assert.closeTo(squareArea(0), 0, 1e-2);
  });

  it("squareArea(14.05)", function() {
    assert.closeTo(squareArea(14.05), 80, 1e-2);
  });  
});

--------------
PREP

Parameters: 
    -a, the length of a quarter of a circle

Return: 
    -the are of a square if arc a formed its opposite corners

Example:
    squareArea(2), 1.62, 1e-2

Psuedo Code:
    -this arc is 1/4 of a circle. so by mulitplying it by 4, we have circumference from which we can find the area of the circle (C=2*pi*2) (use Math.pi() or whatever it is)

    -we can then find the formula for a square circumscribed by a circle (google)

    -dive that by 4 and return

    -ACTUALLY, working through it, we can just find the radius and square that to get the area
*/

//-------------------- Solution (without comments) -------------------------------------

function squareArea(A){

    const circumference = A*4
    
    const radius = circumference/(2*Math.PI)
    
    const area = radius**2
    
    return area
  }

//-------------------- Solution (with comments) ----------------------------------------

function squareArea(A){
    //an arc between opposite corners of a square is 1/4 of a circle's circumference
    //find the circumference of that circle 
    const circumference = A*4
    
    //find the radius of that circle, which will be the length of one side of our square. 
    const radius = circumference/(2*Math.PI)
    
    //the area of the square diagram is the radius squared
    //use exponenet operator (**) to find and return 
    const area = radius**2
    
    return area
  }

//--------------- Best Practices / Lessons Learned -------------------------------------