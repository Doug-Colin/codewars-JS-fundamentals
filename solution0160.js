/*
--------------- 7 Kyu - Find the middle element ------------------

Instructions:

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

-------------
Sample Tests

const strictEqual = require('chai').assert.strictEqual;

function doTest (triplet, expected) {
	const actual = gimme(triplet);
	strictEqual(actual, expected, `for [${triplet}], expected ${expected} but got ${actual}`);
}

describe("Basic Test", function () {
	it("Tests for integers", function () {
		doTest([2, 3, 1], 0);
		doTest([5, 10, 14], 1);
	});
	it("Tests for floats", function () {
		doTest([2.1, 3.2, 1.4], 0);
		doTest([5.9, 10.4, 14.2], 1);
	});
	it("Tests for negative numbers", function () {
		doTest([-2, -3, -1], 0);
		doTest([-5, -10, -14], 1);
	});
	it("Tests for mixed numbers", function () {
		doTest([-2, -3.2, 1], 0);
		doTest([-5.2, -10.6, 14], 0);
	});
});

--------------
PREP

Parameters: 
    -an array of three integers (a triplet) 

Return: 
    -the index of the middle value, meaning the value that is neither the max nor min


Example:
    gimme([2, 3, 1]) => 0

Psuedo Code:
    -sort() will not work because it mutates the array.

    -we can use filter() with Math.max() and Math.min() to filter for the middle value

    -then return the index of that value in the orgiinal array via .indexOf()


*/


function gimme (triplet) {
    // use filter() with Math.max() and Math.min() to filter for the middle value
    let middle = triplet.filter(x => x != Math.min(...triplet) && x != Math.max(...triplet))
    //return index of that value in the orginal array via .indexOf()
    return triplet.indexOf(middle[0])
    }

//----- Best Practices / Lessons Learned ---------------

//you can do this more efficiently by creating a new array from the orginal via concat(), sorting that, and returning the middle index

function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }