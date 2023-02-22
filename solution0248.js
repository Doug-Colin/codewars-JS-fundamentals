/*
--------------- 5 Kyu - Directions Reduction ------------------

Instructions:

Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]. or { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" }; or [North, South, South, East, West, North, West]

You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

    ["WEST"] or { "WEST" } or [West]
-------------
Sample Tests

const chai = require('chai');
chai.config.truncateThreshold = 0;
const deeepEqual = chai.assert.deepEqual;

function doTest (input, expected) {
	const log = `for ${JSON.stringify(input)}\n`;
	const actual = dirReduc(input);
	deeepEqual(actual, expected, log);
}

describe("Tests", () => {
	it("test", () => {
		doTest(
			["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
			["WEST"]
		);
		doTest(
			["NORTH", "WEST", "SOUTH", "EAST"],
			["NORTH", "WEST", "SOUTH", "EAST"]
		);
		doTest(
			["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"],
			[]
		);
	});
});


--------------
PREP

Parameters: 
    -arr, an array of directions

Return: 
    -the directions simplified, if possible (meaning, opposite directions following each other cancel each other our, and are thus removed).
    -if the directions cancel each other out entirely, return an empty array

Example:
    In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

    The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

    In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Psuedo Code:
    -We need to figure out if arr elements are followed by their opposite, and if so, remove them (alternately, we cna populate a new array with the directions that are not cancelled out). 
            -we will need to iterate through the array via .map(), .forEach(), for .. in, with element and index params
            -we may need to create a new array of subarrays of all pairs (index & index+1, starting at 0, ending at length-1)
            -we will need to check our array of pairs for opposite pairs (could make dictionary Object)- .filter()?



*/

//-------------------- Solution (without comments) -------------------------------------

function dirReduc(arr){
  
    //Declare an object and assign key-value pairs for each pair of redundant directions.
    let Redundant = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      EAST: 'WEST',
      WEST: 'EAST',
    }
    
    //call forEach() on the parameter array. 
    //for each element, check if the following element matches it's redundant value
    //if it does, remove the pair of redundant elements via arr.splice()
    //since there may be additional redundant elements, call our dirReduc() function again
    //this recursive call will stop there are no more elements succeeded by redundant values
    arr.forEach((x, i)=> {
      if (arr[i+1] == Redundant[arr[i]]) {
        arr.splice(i, 2)
        dirReduc(arr)
      }
    })
    //return the arr
    return arr
  }

//-------------------- Solution (with comments) ----------------------------------------

function dirReduc(arr){
  
    //Declare an object and assign key-value pairs for each pair of redundant directions.
    let Redundant = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      EAST: 'WEST',
      WEST: 'EAST',
    }
    
    //call forEach() on the parameter array. 
    //for each element, check if the following element matches it's redundant value
    //if it does, remove the pair of redundant elements via arr.splice()
    //since there may be additional redundant elements, call our dirReduc() function again
    //this recursive call will stop there are no more elements succeeded by redundant values
    arr.forEach((x, i)=> {
      if (arr[i+1] == Redundant[arr[i]]) {
        arr.splice(i, 2)
        dirReduc(arr)
      }
    })
    //return the arr
    return arr
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
/*
-creating a new array via .push() etc. was problematic;  whereas writing a recursive function that removed redundant pairs until there were no more was clean and successfull. 

-I thought there would be a solution with a while() loop... looks like a regex pattern and .test()
*/
function dirReduc(arr) {
    var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern,'');
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
  }