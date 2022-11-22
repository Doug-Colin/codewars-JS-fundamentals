/*
--------------- 7 Kyu - Next Featured Number Higher than a Given Value ------------------

Instructions:

Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

their digits occur only once

they are odd

they are multiple of three

-------------
Sample Tests

describe("Example Tests", function() {
    Test.assertEquals(nextNumb(12), 15)
    Test.assertEquals(nextNumb(13), 15)
    Test.assertEquals(nextNumb(99), 105)
    Test.assertEquals(nextNumb(999999), 1023459)
    Test.assertEquals(nextNumb(9999999999), "There is no\
 possible number that fulfills those requirements")
});

--------------
PREP

Parameters: 
    -val, an integer

Return: 
    -the next integer higher than val that fulfills the following requirements:
        -must contain digits that only occur once
        -is an odd integer
        -is a multiple of three

    -if none, return string "There is no possible number that
    fulfills those requirements"

Example:
    nextNumb(12) == 15

    nextNumb(13) == 15

    nextNumb(99) == 105

    nextNumb(999999) == 1023459

    nextNumber(9999999999) == "There is no possible number that
    fulfills those requirements"

Psuedo Code:
    -use for loop and +=3 iterator to iterate through multiples of 3/odd #'s greater than val

    -check for unique values via Set()
        if (i == Set(i))

    -if num meets both conditions, return it, otherwise return string


*/
//my solution was wonky, slow, and ineffective. Review best practices/most similar successfull solution.

function nextNumb(val) { 
    let solution = 0
    
    for (let i = val; i > 30; i+=3) {
      
      console.log(i)
      let unique = Array.from(new Set(i.toString().split(''))
      )
      console.log(unique)
      console.log(parseInt(unique.join('')))
      if ( i % 2 !== 0 && i == parseInt(unique.join(''))) {
        break;
      }
      solution += i
    }
     return solution || "There is no\
     possible number that fulfills those requirements"
    }


//----- Best Practices / Lessons Learned ---------------


function nextNumb(val) {
    for (let i = val + 1; i < 9999999999; i++) {
      if (new Set([...String(i)]).size == [...String(i)].length && i % 2 && i % 3 == 0) {
        return i
      }
    }
    return 'There is no possible number that fulfills those requirements'
  }