/*
---------------- 8 Kyu - Find out whether the shape is a cube -----------------

Instructions:

To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(cubeChecker(56.3, 1), false);
Test.assertEquals(cubeChecker(-1, 2), false);
Test.assertEquals(cubeChecker(8, 3), false);
Test.assertEquals(cubeChecker(8, 2), true);
Test.assertEquals(cubeChecker(-8,-2), false);
Test.assertEquals(cubeChecker(0, 0), false);
Test.assertEquals(cubeChecker(1, 5),  false);
Test.assertEquals(cubeChecker(125, 5), true);
Test.assertEquals(cubeChecker(125,-5), false);

  });
});

--------------
PREP

Parameters: 
    -volume, the volume of an object
    -side, the length of one side of an object

Return: 
    -true if the cuboid could have equal sides, otherwise false


Example:
    (56.3, 1), false
    (125, 5), true

Psuedo Code:
    -return false if inputs are negative or zero

    -use ternary to return true if side cubed == volume, otherwise return false

*/
//-------------------- Solution- version with comments below -------------------------------------

const cubeChecker = function(volume, side){
    if (volume < 1 || side < 1) {
      return false;
    } else {
     return side**3 == volume ? true : false;
    } 
  }  

//-------------------------- Solution With Comments ------------------------------------

const cubeChecker = function(volume, side){
    //return false if either param is less than one, negative, zero etc.
    if (volume < 1 || side < 1) {
      return false;
    } else {
    //otherwise use ternary statement to check if the side cubed is equal to volume
    //if so, return true as we have a cube. If not, return false.
     return side**3 == volume ? true : false;
    } 
  }


//----- Best Practices / Lessons Learned ---------------
