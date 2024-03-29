/*
--------------- 7 Kyu - Remove the minimum------------------

Instructions:

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

-------------
Sample Tests

describe("removeSmallest", function() {
  it("works for the examples", function() {
    Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
    Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
    Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
    Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");
  });
  
  it("returns [] if the list has only one element", function() {
    for (let i = 0; i < 10; ++i) {
      let x = ~~(Math.random() * 400);
      Test.assertSimilar(removeSmallest([x]), [], `Wrong result for ${[x]}`);
    }
  });
  
  function randomArray(length) {
    return Array.from({length: length}, () => ~~(Math.random() * 400));
  }
  
  it("returns a list that misses only one element", function() {
    for(let i = 0; i < 10; ++i) {
      let arr = randomArray(~~(Math.random() * 10) + 1);
      let l = arr.length;
      Test.assertSimilar(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
    }
  });
});

--------------
PREP

Parameters: 
    -an array of positive integers

Return: 
    -The same array, in the same order, with the lowest value removed; if there are duplicates of that value, remove the element with lowest index

Example:
    - Input: [1,2,3,4,5], output= [2,3,4,5]
    - Input: [5,3,2,1,4], output = [5,3,2,4]
    - Input: [2,2,1,2,1], output = [2,2,2,1]
    
Psuedo Code:
    -find lowest value of first occurence via indexOf and Math.min() and declare/assign to variable
    
        let firstIndexOfMin = numbers.indexOf(Math.min(...numbers));

    -return ...everything in array before lowest value's first occurrence and ...everything after
        return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)]
*/


function removeSmallest(numbers) {

    //find lowest value of first occurence via indexOf and Math.min() and declare/assign to variable
    let firstIndexOfMin = numbers.indexOf(Math.min(...numbers));

    //return ...everything in array before lowest value's first occurrence, and ..everything after
    return [...numbers.slice(0, firstIndexOfMin), ...numbers.slice(firstIndexOfMin + 1)];
  }