/*
---------------  Kyu - ------------------

Instructions:



-------------
Sample Tests



--------------
PREP

Parameters: 
    -
    -  

Return: 
    -

Example:
    -
    -

Psuedo Code:
    -declare/assign variable to hold solution as array
        let solution = [];

    -turn string into array via .split()
        word.split('')

    -use forEach to access elements of split array
        .forEach(function (element, index) {}

    -declare/assign variable to hold capital letter matches via regex
        let capital = element.match(/[A-Z]/);

    -if (element is capital), push index of element into solution array
         if (element == capital) {
        solution.push(index)
        }

    -return solution array
*/
//refactored:

var capitals = function (word) {
    //declare/assign variable to hold solution as array
    let solution = [];
    
    //use forEach to access elements & indices of split array
    //declare/assign variable to hold capital letter matches via regex
    //if (element is capital), push index of element into solution array
    word.split('').forEach(function (element, index) {
    let capital = element.match(/[A-Z]/);
    if (element == capital) {
      solution.push(index)
    }
  })
  
  return solution
};