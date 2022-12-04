/*
--------------- 6 Kyu -  ------------------

Instructions:

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
-------------
Sample Tests

const chai = require('chai');
const assert = chai.assert;

function testing(actual, expected) {
    assert.strictEqual(actual, expected)
}

describe("revrot",function() {
    it("Basic tests",function() {    
        testing(revrot("1234", 0), "")
        testing(revrot("", 0), "")
        testing(revrot("1234", 5), "")
        s = "733049910872815764"
        testing(revrot(s, 5), "330479108928157")
})})

--------------
PREP

Parameters: 
    -str, a string of digits
    -sz, an integer representing the size of substrings to cut param str into. 

Return: 
    -the string cut into chunks and rejoined, wherein each substring is either:
        -reversed, if the sum of the cubes of its digits is divisible by 2
        -rotated to the left one position
    -return "" if str is empty, or sz <= 0, or sz > str.length


Example:
    revrot("123456987654", 6) --> "234561876549"
    revrot("123456987653", 6) --> "234561356789"
    revrot("66443875", 4) --> "44668753"
    revrot("66443875", 8) --> "64438756"
    revrot("664438769", 8) --> "67834466"
    revrot("123456779", 8) --> "23456771"
    revrot("", 8) --> ""
    revrot("123456779", 0) --> "" 
    revrot("563000655734469485", 4) --> "0365065073456944"

Psuedo Code:
    -use if statement/ternary to return "" for specified cases
        if (sz <= 0 || str.length == 0 || sz > str.length) {
            return ""
        }

    - chunk string into sz lengths, via regex or .map()

    - iterate through chunks, checking if the sum of the cubes of its digits is divisible by 2. 

    -if so, reverse chunk. 
    
    -otherwise, rotate chunk to one index lower, unless it is index 0, then .push it onto chunk.

    -join and return
*/

//----------------- Solution- version with comments below -------------------------------------
function revrot(str, sz) {
  
    if (sz <= 0 || str.length == 0 || sz > str.length) {
        return ""
    } else {
      const regex = new RegExp("(.{1,"+ sz +"})", "g")
      const chunks = str.match(regex)
      
      const sumCubedDigits = (x) => x.map(el => el**3).reduce((a, b) => a + b)
      
      return chunks.map((x) => {
        x = x.split("")
        
        if (x.length < sz){
          x = ''
        } else {
          return (sumCubedDigits(x)%2 == 0) ? x.reverse().join('') : x.slice(1).join('')+x[0]
        }
      }).join('')    
     }  
  }
//----------------- Solution- with comments -------------------------------------
function revrot(str, sz) {
    //return "" for specified cases
    if (sz <= 0 || str.length == 0 || sz > str.length) {
        return ""
    } else {
      //using regex constructor, create RegExp to chunk str into pieces of 1-sz length
      //save chunked string to variable
      const regex = new RegExp("(.{1,"+ sz +"})", "g")
      const chunks = str.match(regex)
      
      //write function to cube the digits of a string (if already split), and find their sum via .reduce()
      const sumCubedDigits = (x) => x.map(el => el**3).reduce((a, b) => a + b)
      
      //use .map() to split each string chunks
      //if chunk.length  is shorter than sz, remove/save as empty string
      //otherwise, using ternary
      //use % 2 to find whether chunk sum of chunks cubed digits is divisble by 2, if so, reverse it
      //if not, rotate each digit by using .slice() to remove the first character, then add that character to the end 
      //.join & return 
      return chunks.map((x) => {
        x = x.split("")
        if (x.length < sz){
          x = ''
        } else {
          return (sumCubedDigits(x)%2 == 0) ? x.reverse().join('') : x.slice(1).join('')+x[0]
        }
      }).join('')    
     }  
  }
//----- Best Practices / Lessons Learned ---------------
