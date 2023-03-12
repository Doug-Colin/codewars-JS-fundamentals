/*
--------------- 6 Kyu - Make the Deadfish Swim ------------------

Instructions:

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals( parse("iiisdoso"), [ 8, 64 ] );
Test.assertDeepEquals( parse("iiisxxxdoso"), [ 8, 64 ] );
});
});


--------------
PREP

Parameters: 
    -data, a string

Return: 
    -the string parsed as Deadfish commands

Example:
parse("iiisdoso") => [ 8, 64 ]

Psuedo Code:
    -.split() string into chars, save

    -declare empty solution array

    -declare value variable as 0

    -declare object of Deadfish commands and corresponding execution statements

    -call .forEach() on string chars, using bracket notation on our commands Object,  execute each letter 

    -return array


*/

//-------------------- Solution (without comments) -------------------------------------

function parse(data) {
 
    data = data.split('')
    let solution = []
    let value = 0
    
 
    data.forEach((command) => {
      switch (command) {
      case 'i' : value += 1
      break;
      case 'd' : value -= 1
      break;
      case 's' : value *= value
      break;
      case'o' : solution.push(value);
      break;
      }
    })
    return solution
  }

//-------------------- Solution (with comments) ----------------------------------------

// Return the output array, and ignore all non-op characters
function parse(data) {
    //.split data into array of letters and save, declare array to hold solution, declare value
    data = data.split('')
    let solution = []
    let value = 0
    
    //forEach() letter of our data string, use switch-case statement to perform the relevant operation, depending on letter. 
    data.forEach((command) => {
      switch (command) {
      case 'i' : value += 1
      break;
      case 'd' : value -= 1
      break;
      case 's' : value *= value
      break;
      case'o' : solution.push(value);
      break;
      }
    })
    return solution
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

