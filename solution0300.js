/*
--------------- 6 Kyu - Odd-heavy Array ------------------

Instructions:

An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

eg.

Array [11,4,9,2,8] is odd-heavy,
because its odd elements [11,9] are greater than all the even elements [4,2,8]

Array [11,4,9,2,3,10] is not odd-heavy,
because one of its even elements (10 from [4,2,10]) is greater than two of
its odd elements (9 and 3 from [11,9,3])

Array [] is not odd-heavy,
because it does not contain any odd numbers

Array [3] is odd-heavy,
because it does not contain any even numbers.
write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.

-------------
Sample Tests

describe("Odd-heavy", () =>{
  it("sample tests", () =>{
Test.assertDeepEquals(isOddHeavy([0,2,19,4,4]),true);
Test.assertDeepEquals(isOddHeavy([1,-2,-1,2]),false);
  });
});

--------------
PREP

Parameters: 
    -n, an array of integers 

Return: 
    -true if array is odd-heavy, false if not
    -return [] if passing empty array

Example:
    see above

Psuedo Code:
    -create two arrays of odd and even numbers via .map() & %2.

    -use .every() to compare all elements of odd array to highest element in even array.

    -return false if param array is empty or contains no odd #'s 


*/

//-------------------- Solution (without comments) -------------------------------------

function isOddHeavy(n){
    const even = n.filter(x=>x%2==0)
    const odd = n.filter(x=>x%2!==0) 
    
    return odd.length == 0 ? false : odd.every(x => x > Math.max(...even))
  }

//-------------------- Solution (with comments) ----------------------------------------

function isOddHeavy(n){
   //use .filter() to create arrays of even and odd integers
    const even = n.filter(x=>x%2==0)
    const odd = n.filter(x=>x%2!==0)
    
   //use .every() to iterate through every element in our odd array, 
   //checking if they're all greater than the highest number in the even array.
   //(.every() returns true if all elements in array meet condition, otherwise false)
    return odd.length == 0 ? false : odd.every(x => x > Math.max(...even))
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

