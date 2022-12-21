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
//-------------------- Solution- version with comments below -------------------------------------
152/36
//**gotta subtract the inner cubes. tricky fucker
//36 + 36,( cuts+1) -2 = 4 permiter layers. (4 permiter layers * outer ring = sections * 2 + sections  + section -2 * 2)
36 + 36 
(6-2) * ()

//-------------------------- Solution With Comments ------------------------------------


//----- Best Practices / Lessons Learned ---------------
