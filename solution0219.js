/*
--------------- 6 Kyu - Matrix Transpose ------------------

Instructions:

Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

Notes
The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(transpose([[1]]), [[1]]);
Test.assertSimilar(transpose([[1,2,3],[4,5,6]]), [[1,4],[2,5],[3,6]]);
  });
});


--------------
PREP

Parameters: 
    -matrix, an array of nested arrrays of the same length.

Return: 
    -the nested arrays, transposed


Example:
    the transpose of:

        | 1 2 3 |
        | 4 5 6 |
            
            is

        | 1 4 |
        | 2 5 |
        | 3 6 |

Psuedo Code:
    -.map() the first inner array of our param array. include element and index parameters.

    -for each element of the first inner array, create a new array by returning another .map() of the entire/outer/param array.

    -Now we are returning a new array for each element of array[0], ensuring we have as many 'columns' as 'rows'.
    
    -In the second .map(), return element[index of first map]. This will populate each of our new arrays with all the elements of the same index from each array. 


*/
//-------------------- Solution- version with comments below -------------------------------------

function transpose(matrix) { 
    return matrix[0].map((el, idx) => {
             return matrix.map((element) => {
                return element[idx]
            })
    })
  }

//-------------------------- Solution With Comments ------------------------------------

function transpose(matrix) {
    //use .map() to iterates through the elements of our first nested array (use index parameter)
    return matrix[0].map((el, idx) => {
      //for each element of the first nested array, create a new array, by returning another .map()
      //this one will be a .map() of the entire/outer param array
      //populate the array's we are creating with the elements of corresponding indexes from each each nested array
      //(.map(element) here refers to each inner nested array)
             return matrix.map((element) => {
                return element[idx]
            })
    })
  }

//----- Best Practices / Lessons Learned ---------------

//Could write this more succintly via es6 arrow function:
var transpose = m => m[0].map((_, i) => m.map(r => r[i]));

//Also, could use parameter names that reflect rows/columns

function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
  }
  
  function transpose(matrix) {
    return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
  }