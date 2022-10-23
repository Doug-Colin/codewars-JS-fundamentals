/*
--------------- 6 Kyu - Calculate the area of a regular n sides polygon inside a circle of radius r ------------------

Instructions:

Write the following function:

function areaOfPolygonInsideCircle(circleRadius, numberOfSides)
    It should calculate the area of a regular polygon of numberOfSides, inside a circle of radius circleRadius, which passes through all the vertices of the polygon (AKA a circumscribed circle or circumcircle). The answer should be a number rounded to 3 decimal places.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example Tests", function() {

  it("ex1", function() {
    assert(areaOfPolygonInsideCircle(3, 3), 11.691);
  });
  
  it("ex2", function() {
    assert(areaOfPolygonInsideCircle(2, 4), 8);
  });
  
  it("ex3", function() {
    assert(areaOfPolygonInsideCircle(2.5, 5), 14.86);
  });
  
});

--------------
PREP

Parameters: 
    -numberOfSides, the number of sides of the polygon inscribed to a circle.
    -circleRadius, the radius of the circumscribed circle.

Return: 
    -the area of the polygon


Example:
    areaOfPolygonInsideCircle(3, 3) // returns 11.691
    areaOfPolygonInsideCircle(5.8, 7) // returns 92.053
    areaOfPolygonInsideCircle(4, 5) // returns 38.042

Psuedo Code:
    -find forumale via google
        polygon area 'Sp' = (1/2  * nr)squared * sine (2*Pi/n), wherein n = numOfSides and r = circleRadius

    -convert to JS via * & ** operators, Math.sin() method, Math.PI property

    -return with the toFixed(3) method to specify the number of decimal places (returns a string but passes tests)


*/

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    /*Some googling tells us the area for a polygon 'inscribed to a circle' can be found via the following formula:
      polygon area 'Sp' = (1/2  * nr)squared * sine (2*Pi/n), wherein n = numOfSides and r = circleRadius. 
      
      We can convert that formula to JS with the operators for multiplication (*) and exponentiation (**), 
      the Math.sin() method, and  the Math.PI property. 
      
      We then return the formula, using the toFixed() method to specify the number of decimal places. 
      Note that toFixed() converts a num to a string, though it seems not to matter here. 
      */ 
  return .5 * circleRadius * numberOfSides**2 * Math.sin(2*Math.PI/3).toFixed(3)
  }

//----- Best Practices / Lessons Learned ---------------
