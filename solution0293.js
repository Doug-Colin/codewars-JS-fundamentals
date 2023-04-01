/*
--------------- 5 Kyu - Weight for weight ------------------

Instructions:

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

-------------
Sample Tests

const { assert } = require('chai');

describe("Order Weights",function() {
  it("Basic tests",function() {
    assert.strictEqual(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
    assert.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
  })
})

--------------
PREP

Parameters: 
    -strng, a string of numbers, that may have 'leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers'

Return: 
    -the string with all separate numbers converted to their weight, that being the sum of their digits. If two numbers have an equal weight, classify them as strings(alphabetical ordering- so 180 is before 90, because 9 is both their weight, bu 180 comes before as a string. Unclear if they mean string.toLocaleCompare() alphabetical or that the word one-eighty is before nine in the alphabet)  

Example:
    "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

Psuedo Code:
    -separate numbers by space

    -use .map() to trim whitespace if necessary and convert each to a sum

    -iterate through arr, and find all equal weights, and convert to string, use .toLocaleCompare to compare

    -here is the tricky part, inerspersing them back into the array... 
        -maybe take a count of all elements/weights via an object. 
        -iterate through the object to identify which values have multiple occurrences
        -use Object.entries to get subarrays of each value and occurennces
        -iterate through the entries array... if muiltiple occurrences have same wweight, .push into an array that is named the value/weight.
        -.sort() that array by toLocaleCompare.
        -iterate through entries array again, and place elements/weights from alpha .sorted array back into their indices in order.
        -.filter entries array for weights only and return, reconverting to string if neceassary 


*/

//-------------------- Solution (without comments) -------------------------------------

function orderWeight(strng) {
    if (strng == '') return strng
    strng = strng.split(' ')
    
    let weights = strng.map((x) =>  {
      return [x, x.split('').map(y => Number(y)).reduce((a, b) => a + b)]
    }).sort((a, b) => a[1] - b[1])
    
    let count = {}
    for (const x of weights) {
      count[x[1]] ? count[x[1]] += 1 : count[x[1]] = 1  
    }
    
    let sameWeight = Object.entries(count).filter(x => x[1] > 1).map((x) => {
    return Number(x[0])
    })
    
    for (let i = 0; i < sameWeight.length; i++) {
      weights.sort(function(a,b) {
        if (a[1] == sameWeight[i] && b[1] == sameWeight[i]) {
            return a[0].localeCompare(b[0])
        }
      })
    }
    return weights.map(x => x[0]).join(' ')
    
  }

//-------------------- Solution (with comments) ----------------------------------------

function orderWeight(strng) {
  
    //return param string if empty
    if (strng == '') return strng
    
    //split param string into arr
    strng = strng.split(' ')
    
    //.map strng to an array of subarrays, each including string and its weight value 
    //sort the mapped array by each strings 'weight' value.
    let weights = strng.map((x) =>  {
      return [x, x.split('').map(y => Number(y)).reduce((a, b) => a + b)]
    }).sort((a, b) => a[1] - b[1])
    
  
    //Use an Object to count occurrences of each weight, so we can identify
    //the strings with identical weights, as they need to be sorted alphabetically
    let count = {}
    for (const x of weights) {
      count[x[1]] ? count[x[1]] += 1 : count[x[1]] = 1  
    }
    
    //convert count occurrences Obj to array of weights and occurrences via .entries()
    //.filter() for occurnces > 1,  
    //.map() that so we have an array of only the weights which occur multiple times
    let sameWeight = Object.entries(count).filter(x => x[1] > 1).map((x) => {
    return Number(x[0])
    })
    
    
    //loop through the multiple occurrence weights
    //on each iteration, sort the weights array elements,
    //but only if they have one of the multiple occurrence weights we're iterating through
    //if so, use localeCompare to sort by alphabetical value
    for (let i = 0; i < sameWeight.length; i++) {
      weights.sort(function(a,b) {
        if (a[1] == sameWeight[i] && b[1] == sameWeight[i]) {
            return a[0].localeCompare(b[0])
        }
      })
    }
    //now that the weights array is fully sorted,
    //use map tp return the strings only, joined back together. 
    return weights.map(x => x[0]).join(' ')
    
  }

//--------------- Best Practices / Lessons Learned -------------------------------------
/*
Wow. More than any other challenge, this one had a best practices solution that made mine look like a bucket of smashed crabs. I was exhausted for this, but still...

This function is a Matisse whereas mine looks like a Jackson Pollock ... that is, a Paint-By-Numbers Pollock made by a sixth grader. (It did work first try though.)  
*/
function orderWeight(strng) {
    //arrow function to return sum of number string
    const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
    //if the sum of the strings digits is identical, it sorts them via localeCompare
    //otherwise it sorts them by the sum of their digits via the above arrow fn
     function comp(a,b){
       let sumA = sum(a);
       let sumB = sum(b);
       return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
      };
      //return the string split into individual elements, sorted via the above compare function, and joined back together
    return strng.split(' ').sort(comp).join(' ');
   }