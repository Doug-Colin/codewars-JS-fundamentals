/*
--------------- 6 Kyu - Delete occurrences of an element if it occurs more than n times ------------------

Instructions:

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

-------------
Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(deleteNth([20,37,20,21], 1), [20,37,21])
    assert.sameOrderedMembers(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
  });
});

--------------
PREP

Parameters: 
    -arr, an array of integers
    -n, the number of max occurences of each array item  

Return: 
    -the param array in the same order, with occurences > n removed

Example:
    [1,2,3,1,2,1,2,3],2 --> [1,2,3,1,2,3]

Psuedo Code:
    -declare count Object
    
    -iterate through array, populating object with key-value pairs of element:count

    -iterate through original array, if (Count[element] > n) n ='x'

    -use .filter() on array and return


*/

//-------------------- Solution (without comments) -------------------------------------

function deleteNth(arr,n){
  
    
    let counter = {}
    
   
    for (const x of arr) {
      counter[x] ? counter[x] += 1 : counter[x] = 1
    }
    
    
    for (let count in counter)  {
      for (let i = 1; i <= counter[count]-n; i++) {
        arr.splice(arr.lastIndexOf(Number(count)), 1)
      }
    }
    
    return arr
  }

//-------------------- Solution (with comments) ----------------------------------------

function deleteNth(arr,n){
  
    //declare counter Object to hold our count or arr elements
    let counter = {}
    
    //use for...of loop to populate counter object with key:value pairs of arr element:occurrences
    for (const x of arr) {
      counter[x] ? counter[x] += 1 : counter[x] = 1
    }
    
    //use for...in loop to iterate through properties of counter object 
    for (let count in counter)  {
      //for each property/element, iterate from 1 through that element's occurrences - n (or, # of times we need to delete an occurrance)
      //on each iteration, use .splice() to remove that element
      for (let i = 1; i <= counter[count]-n; i++) {
        arr.splice(arr.lastIndexOf(Number(count)), 1)
      }
    }
    
    //return the arr
    return arr
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
//this is an interesting way to count and remove elements from an array by number of occurrences

function deleteNth(arr, x) {
    // Create an empty object to store how many times each object exists
    var cache = {};
    // Call the filter function, the delegate is called once for each item (https://en.wikipedia.org/wiki/Delegation_(object-oriented_programming))
    // in the array and you return true or false depending on if it should
    // be kept or not
    return arr.filter(function(n) {
      // Use the item as key and store the number of times the item has appeared.
      // (cache[n]||0) fetches the current value of cache[n] or zero if it doesn't
      // exist. Then add one to it and store it.
      cache[n] =(cache[n]||0) + 1;
      // If the number of times it has appeared in the array is less or equal to
      // the limit then return true so the filter function keeps it.
      return cache[n] <= x;
    });
  }