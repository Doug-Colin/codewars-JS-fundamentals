/*
--------------- 6 Kyu - Does array x contain all values within array y? ------------------

Instructions:

We want to extend the array class so that it provides a contains_all? method. This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.

-------------
Sample Tests

const {assert,config} = require("chai"); config.truncateThreshold = 0;

it("example tests",()=>{
  assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([1,2,3,4,5]), true );
  assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([9,2,5,4,10]), true );
  assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([12,15]), false );
  assert.strictEqual( [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([]), true );
  assert.strictEqual( [].containsAll([12,15]), false );
  assert.strictEqual( [].containsAll([]), true );
});

--------------
PREP

Parameters: 
    -a, an array

Return: 
    -via the class extension 'containsAll', true if this.array contains all values of the array passed in via param a


Example:
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    items.containsAll([1, 2, 3]);  =>  true
    items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array

Psuedo Code:
    -use .forEach() on the param array 'a' to check if each value is in this.array
        -if (this.includes(x)) ... 
        -if so, .push(x) into another array

    -Compare .length of array a with .length of declared inclusion array
    
    -using ternary, if same length, return true, otherwise false


*/
//-------------------- Solution- version with comments below -------------------------------------

Object.defineProperty(Array.prototype, 'containsAll', {
    value: function(a) {
      
      let inclusions = []
      
      a.forEach((x) => {
        if (this.includes(x)) {
          inclusions.push(x)
        }
      })
      
      return inclusions.length == a.length ? true : false;
    
    },
    //these didn't affect tests, but without them, I kept getting errors in my environment (runJS)
      enumerable: false,   
      configurable: true,
      writable: true
  });

//-------------------------- Solution With Comments ------------------------------------

Object.defineProperty(Array.prototype, 'containsAll', {
    value: function(a) {
      //declare empty array to hold values that are included
      let inclusions = []
      
      //use .forEach() on our param array a, to check if each value is in this.array
      //if so, .push() it into our inclusions array
      a.forEach((x) => {
        if (this.includes(x)) {
          inclusions.push(x)
        }
      })
      //using ternary statement, compare .length of inclusions array and array a, returning true if equal, otherwise false
      return inclusions.length == a.length ? true : false;
    
    },
    //these didn't affect tests, but without them, I kept getting errors in my environment (runJS)
    //   enumerable: false,   
    //   configurable: true,
    //   writable: true
  });

//----- Best Practices / Lessons Learned ---------------

//this could be accomplished far more concisely via the .every() method

Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
    return a.every(e => this.includes(e))
  } } );