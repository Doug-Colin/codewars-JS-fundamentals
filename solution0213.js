/*
--------------- 8 Kyu - Filter out the geese ------------------

Instructions:

Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Basic tests",function(){
  it("Mixed list",function(){
    Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
  });
  it("No geese",function(){
    Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
  });
  it("All geese",function(){
    Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
  });
});

--------------
PREP

Parameters: 
    -birds, and array of strings representing types of birds

Return: 
    -the param array with any birds that are also in the given 'geese' array removed.

Example:
     ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] ---> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

Psuedo Code:
    -declare empty array to hold solution

    -iterate through the birds array via .forEach(), and if elements are not present in the geese array, .push() them into the solution array 

*/
//-------------------- Solution-------------------------------------


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    
    let solution = []
  
    birds.forEach((x) => {
      if (!geese.includes(x)) {
        solution.push(x)
      }
    })
    
    return solution;
  };

