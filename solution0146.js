/*
--------------- 7 Kyu - Two Oldest Ages ------------------

Instructions:

The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

-------------
Sample Tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    
    let results1 = twoOldestAges([1,5,87,45,8,8]);
    let results2 = twoOldestAges([6,5,83,5,3,18]);
  
    assert.strictEqual(results1[0], 45, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
    assert.strictEqual(results1[1],87, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
    
    assert.strictEqual(results2[0], 18, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
    assert.strictEqual(results2[1], 83, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
    })
  })

--------------
PREP

Parameters: 
    -an array of integers representing ages
    -  

Return: 
    -[second oldest age, first oldest]


Example:

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

Psuedo Code:
    -.sort() array

    -return [second highest, higest]

*/


// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){

    ages = ages.sort((a, b) => b - a) 
    
    return [ages[1], ages[0]]
  }
  