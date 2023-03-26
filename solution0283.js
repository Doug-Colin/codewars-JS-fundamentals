/*
--------------- 7 Kyu - Decreasing Inputs ------------------

Instructions:

This kata is all about adding numbers.

You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.
-------------
Sample Tests

describe("Basic tests", function() {

  Test.assertEquals(add(), 0,'No arguments should return 0');
  Test.assertEquals(add(100, 200, 300), 300);
  Test.assertEquals(add(2), 2);
  Test.assertEquals(add(4, -3, -2), 2);
  Test.assertEquals(add(-1, -2, -3, -4) ,-4);

});

--------------
PREP

Parameters: 
    -func should accept a series of integers

Return: 
    -the sum of the param integers, after dividing each by its place in the array (index+1)
    -if no params return 0

Example:
    add(); //=> 0
    add(1,2,3); //=> 3
    add(1,4,-6,20); //=> 6

Psuedo Code:
    -create Array.from(arguments)

    -use .map() with index param to perform division on arguments and .reduce() to find sum 

    -return
*/

//-------------------- Solution (without comments) -------------------------------------

function add() {
    return arguments.length == 0 ? 0 : 
    Math.round( Array.from(arguments)
                      .map((x,i) => { return x/(i+1)})
                      .reduce((a,b) => a + b) )
}

//-------------------- Solution (with comments) ----------------------------------------

function add() {
    //if no arguments are passed into func, return zero. 
    //Otherwise, create an Array.from(arguments), so we can map it, dividing each element by its index + 1
    //use .reduce() to find sum and Math.round() to round
    return arguments.length == 0 ? 0 : 
    Math.round( Array.from(arguments)
                      .map((x,i) => { return x/(i+1)})
                      .reduce((a,b) => a + b) )
}

//--------------- Best Practices / Lessons Learned -------------------------------------



