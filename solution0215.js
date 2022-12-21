/*
--------------- 8 Kyu - Count the number of cubes with paint on ------------------

Instructions:

Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

-------------
Sample Tests

describe("Basic tests",() =>{
Test.assertSimilar(countSquares(5),152)
Test.assertSimilar(countSquares(16),1538)
Test.assertSimilar(countSquares(23),3176)
})

--------------
PREP

Parameters: 
    -cut, the num of cuts made into each plane of the cube

Return: 
    -number of new cubes with at least one  red side


Example:


Psuedo Code:
    -

    -

    -


*/
//-------------------- Solution -------------------------------------
var countSquares = function(cuts){
    if (cuts == 0) {
    return 1
    } else {
    const sections = cuts + 1;
    const totalCubes = (sections ** 2) * sections;
    const fullyBlueCubes = (sections - 2) ** 3;
    return totalCubes - fullyBlueCubes;
    }
  }


//----- Best Practices / Lessons Learned ---------------
//more math is less code
let countSquares = c => c ? 6 * c * c + 2 : 1;