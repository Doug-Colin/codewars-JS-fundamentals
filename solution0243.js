/*
--------------- 7 Kyu -  ------------------

Instructions:

Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

-------------
Sample Tests

describe("Basic Tests",() =>{
  Test.assertSimilar(productArray([12,20]), [20,12]);
  Test.assertSimilar(productArray([3,27,4,2]), [216,24,162,324]);
  Test.assertSimilar(productArray([13,10,5,2,9]), [900,1170,2340,5850,1300]);
  Test.assertSimilar(productArray([16,17,4,3,5,2]), [2040,1920,8160,10880,6528,16320]);
});

--------------
PREP

Parameters: 
    -numbers, an array of integers

Return: 
    -an array of the same size, with each element being the product of all array elements except itself.

Example:
    productArray ({12,20}) ==>  return {20,12}

Psuedo Code:
    -.map() array with index variable

    -for each element, return product of all other array elements via array.reduce()

*/
//-------------------- Solution (without comments) -------------------------------------

function productArray(numbers) {
    return numbers.map((x, i) => {
      return numbers.slice(0, i).concat(numbers.slice(i+1, numbers.length)).reduce((a, b) => a * b)
    })
  }

  //-------------------- Solution (with comments) ----------------------------------------

  function productArray(numbers) {
    //use .map() to iterate through the numbers array (with index param)
    //create array without current element using .slice(), .concat(), and index param
    //use .reduce() to return product of all array elements except current
    return numbers.map((x, i) => {
      return numbers.slice(0, i).concat(numbers.slice(i+1, numbers.length)).reduce((a, b) => a * b)
    })
  }