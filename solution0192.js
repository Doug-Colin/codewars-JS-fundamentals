/*
--------------- 6 Kyu - Give me a Diamond ------------------

Instructions:

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

-------------
Sample Tests

const { assert } = require('chai');

describe( "diamond()", function(){

  it("Valid diamonds", () => {
    assert.strictEqual(diamond(1), "*\n")
    assert.strictEqual(diamond(3), " *\n***\n *\n")
    assert.strictEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
  });
  
  it("Invalid diamonds", () => {
    assert.strictEqual(diamond(2), null)
    assert.strictEqual(diamond(-3), null)
    assert.strictEqual(diamond(0), null)
  });
});


--------------
PREP

Parameters: 
    -n, an integer representing the number of lines taken up by the diamond we will illustrate via function. 

Return: 
    -a 'diamond-shaped' string when printed *on the screen,* using asterisks
    -trailing spaces should be removed
    -every line must be terminated with a newline character (/n)


Example:
    A size 3 diamond:
     *
    ***
     *
    A size 5 diamond:
      *
     ***
    *****
     ***
      *

Psuedo Code:
    -if () param n is an even number, it cannot be a diamond, so return null. Otherwise:
       if (n % 2 == 0) {return null}

    -create empty array variable to hold bottom of diamond
        let bottom = []

    -use for() loop to decrement from n through 1. 
        for  (let i = n;  i >= 1; i--)

    -on each iteration, if i is odd (), .repeat('*') (i)times, append /n via +, and push() as new string in solution array.  
            {if (i % 2 !== 0) { } }...

    -we still need to add spaces to the string, so .map() the bottom array and add the necessary # of spaces

    -Create the top of the array by using .slice() to return the elements/strings we need mirrored, and .reverse() to mirror them

    -join('') arrays, concatenate them, and return. 


*/


function diamond(n){
  
    if (n % 2 <= 0) {
      return null
    } else {
      //declare empty array to hold 'bottom' of diamond
      let bottom = []
      
      //use for loop to decrement from n through 1
      //if i is odd, push() a string into the bottom array
      //the string is '*' repeated (i) times + new line
      for  (let i = n;  i >= 1; i--) {
        if (i%2 !== 0) {
          bottom.push(`${'*'.repeat(i)}\n`)
          }
        }
      
      //we still need to add spaces to the strings.
      //fortunately the num of spaces needed in each string is the same as that string/element's index!
      //use a template literal to .repeat() the number of spaces and append string/element 
      let bottomSpaced = bottom.map((element, index) => {
        return (`${' '.repeat(index)}`+element)
        })
      
      //create the top half of the diamond by mirroring part of the bottom
      //use .slice(1) to grab the elements we'll need, and .reverse() to 'mirror' them
      let top = bottomSpaced.slice(1).reverse()
      
      //join('') the top and bottom arrays, and concatenate them, to return the necessary string 
      return top.join('')+bottomSpaced.join('')
      
    }
  }

//----- Best Practices / Lessons Learned ---------------
