/*
--------------- 6 Kyu - Rectangle into Squares ------------------

Instructions:

The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different). Can you translate this drawing into an algorithm?

You will be given two dimensions- a positive integer length, and a positive integer width

You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

-------------
Sample Tests

const chai=require('chai')
const assert=chai.assert
chai.config.truncateThreshold = 0;

describe("Basic tests",function(){
  it("Basic tests",function(){
    assert.deepEqual(sqInRect(5, 5), null)
    assert.deepEqual(sqInRect(5, 3), [3, 2, 1, 1])
    assert.deepEqual(sqInRect(3, 5), [3, 2, 1, 1])
    assert.deepEqual(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])
  })
});


--------------
PREP

Parameters: 
    -lng and wdth, positive integers representing the length/width of a rectangle, if possible 

Return: 
    -an array wherein each element is the side length of a square that we can divide a rectangle into until complete.
    -if dimensions are square and not rectangular, return null

Example:
    sqInRect(5, 3) should return [3, 2, 1, 1]
    sqInRect(3, 5) should return [3, 2, 1, 1]

Psuedo Code:
    -declare empy solution array    

    -return null if length and width are equal

    -using while loop, so long as length and width are positive:
        - if length>width push width into array. otherwise, push length
        - if length is greater than width, the new lenth will be length - width, the new width will be wdth - length

    -return array
*/

//-------------------- Solution (without comments) -------------------------------------

function sqInRect(lng, wdth){

    //declare empty array to hold our solution
    let squares = []
    //if length and width are the same, return null
    if(lng === wdth) return null
    //so long as length and width are both greater than zero
        //.push the width into the array if it's shorter than the length. if it's even or lesser, push the length in. 
        //if length is greather than width, length = length - width, otherwise, width = width - length
    while(lng > 0 && wdth > 0) {
      squares.push(lng > wdth ? wdth : lng)
      lng > wdth ? lng -= wdth : wdth -= lng
    }
    //return our array of squares
    return squares
  }

//-------------------- Solution (with comments) ----------------------------------------

function sqInRect(lng, wdth){


    let squares = []

    if(lng === wdth) return null

    while(lng > 0 && wdth > 0) {
      squares.push(lng > wdth ? wdth : lng)
      lng > wdth ? lng -= wdth : wdth -= lng
    }

    return squares
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

function sqInRect(lng, wdth){

    //declare empty array to hold our solution
    let squares = []
    //if length and width are the same, return null
    if(lng === wdth) return null
    //so long as length and width are both greater than zero
        //.push the width into the array if it's shorter than the length. if it's even or lesser, push the length in. 
        //if length is greather than width, length = length - width, otherwise, width = width - length
    while(lng > 0 && wdth > 0) {
      squares.push(lng > wdth ? wdth : lng)
      lng > wdth ? lng -= wdth : wdth -= lng
    }
    //return our array of squares
    return squares
  }