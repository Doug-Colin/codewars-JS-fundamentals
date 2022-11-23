/*
--------------- 7 Kyu -  ------------------

Instructions:

There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

-------------
Sample Tests

describe("Example Tests", function() {
    Test.assertSimilar(nextPal(11), 22)
    
    Test.assertSimilar(nextPal(188), 191)
    
    Test.assertSimilar(nextPal(191), 202)
    
    Test.assertSimilar(nextPal(2541), 2552)
});

--------------
PREP

Parameters: 
    -val, a positive integer 

Return: 
    -the smallest palindrom number higher than val


Example:
    nextPal(11) == 22

    nextPal(188) == 191

    nextPal(191) == 202

    nextPal(2541) == 2552

Psuedo Code:
    -use for loop to iterate from the number above val to highest possible test case

    -if iteration is a palindromic number, stop the loop and save to variable

    -retrun variable


*/

function nextPal(val) {
    //declare variable to hold solution/valid iteration
    let nextPalindrome

    //iterate through nums from val+1 to highest possible
    for (let i = val+1; i <= 999999999; i++) {

     //in order to find if number is palindrome:
        //see if it == itself reversed.
        //to reverse, convert to string, split to array of chars, reverse, join, and use parseInt to convert to number.
     if (i == parseInt(i.toString().split('').reverse().join(''))) {
       nextPalindrome = i;
       //stop iteration if palindrome is found.
       break
     }
    }
}
//----- Best Practices / Lessons Learned ---------------

//Better for loop:

//no stopping condition necessary if iterating to higher nums
//you can convert a num to string quickly and efficiently by reassigning it and adding an empty string
function nextPal(val) {
    for(var i=val+1;;i++){
      var str=i+'';
      if(str.split('').reverse().join('')==str)return i;
    }
}

/* Best Practice solution.
    -use multiple functions for more legible code.
        Three things necessary here:
            1) reverse a number

            2) see if a number is a palindrome by checking if it == itself reversed

            3) use do ... while loop within main function, and increment operator with condition that states, do {i++} while (num !== reverseNum) 
*/
function nextPal(val) {
    do {
      val++;
    } while(!isPalindrome(val))
    return val;
  }
  
  function isPalindrome(num) {
    return num === reverseNum(num);
  }
  
  function reverseNum(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }

