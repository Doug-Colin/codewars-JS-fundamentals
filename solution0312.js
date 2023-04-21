/*
--------------- 6 Kyu - The Span Function ------------------

Instructions:

Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

Example:

-------------
Sample Tests



--------------
PREP

Parameters: 
    -arr, an array
    - pred, a predicate function

Return: 
    -an array of the elements in param arr, ending before the first element that pred function returns false for. 

Example:
    sequence : [2,4,6,8,1,2,5,4,3,2]
    predicate: is an even number
    result   : [2,4,6,8]

Psuedo Code:
    -pass the false value returning predicate function into findIndex(). 

    -Once we have the index of the first element in the array that does not satisfy the pred function, use .slice to return the array until there

    -this didn't work as findIndex & slice left off the final element of the arr when all elements evaluated to true. 

    -use for loop instead


*/

//-------------------- Solution (without comments) -------------------------------------

function takeWhile(arr, pred) {
  let solution = [] 

  for (let i = 0; i < arr.length; i++) {
    if (pred(arr[i])) {
        solution.push(arr[i])
    } else {
        break
    }
  }
  return solution
}
  

//-------------------- Solution (with comments) ----------------------------------------

function takeWhile(arr, pred) {
    //declare empty solution array
  let solution = []
  
  //loop through arr pushing elements into our solution array, and if pred(element) is false, break
  for (let i = 0; i < arr.length; i++) {
  if (pred(arr[i])) {
      solution.push(arr[i])
  } else {
    break
  }
  }
  return solution
  }
  

//--------------- Best Practices / Lessons Learned -------------------------------------

