/*
--------------- 7 Kyu - Tea for two ------------------

Instructions:

Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(tea42(2), 't', 'Twos you lose!') 
Test.assertEquals(tea42('2'), 't', 'Twos you lose!')
Test.assertEquals(tea42(102), '10t', 'Twos you lose!')
Test.assertEquals(tea42('m2'),'mt', 'Twos you lose!')
Test.assertEquals(tea42('pre2ty'),'pretty', 'Twos you lose!')
  });
});

--------------
PREP

Parameters: 
    -a string or number

Return: 
    -the same string or number, with every '2' replaced by a 't'. Seems like all examples/tests are lower case. 

Example:
    -tea42('2ea') //should return 'tea'
    -tea42(9022) //should return '90tt'  

Psuedo Code:
    -use .toString() to convert num values to strings
    
    -.split('') string so we can map() it as an array
    
    -.map() array and use ternary to return 't' if character is '2', otherwise return element as-is 

    -.join('') array of characters so it becomes a string, return
    

*/


function tea42(input) {

            // use .toString() to convert num values to strings
            // .split('') string so we can map() it as an array
            // .map() array and use ternary to return 't' if character is '2', otherwise return element as-is 
            // .join('') array of characters so it becomes a string, return 

    return  input.toString()
                 .split('')
                 .map(function (element) {return element == '2' ? 't' : element })
                 .join('');
    };

    //Lessons Learned: you could have accomplished this more concisely & efficiently via .toString() & .replace(/2/g, 't') 