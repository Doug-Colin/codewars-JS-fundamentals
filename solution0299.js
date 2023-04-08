/*
--------------- 6 Kyu - The Vowel Code ------------------

Instructions:

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

-------------
Sample Tests

describe("Sample tests", function() {
  it("Tests", function() {
    assert.equal(encode('hello'), 'h2ll4');
    assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
    assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
    assert.equal(decode('h2ll4'), 'hello');
  });
});

--------------
PREP

Parameters: 
    -sting, a string

Return: 
    -the same string will vowels converted to digits as demonstrated
    -in decode function, return the above string with numbers converted back to vowels 

Example:


Psuedo Code:
    -use Object as dictionary, reversed for decode function

    -.split() each string and use .map to convert acc. to dictionary Object


*/

//-------------------- Solution (without comments) -------------------------------------

function encode(s) {
    //declare object with key-value pairs to serve as dictionary
    const encodeDict = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5
    }
    return s.split('').map(x => Object.keys(encodeDict).includes(x) ? encodeDict[x] : x).join('')
  }
  
  function decode(s) {
      const decodeDict = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u'
      }
     return s.split('').map(x => Object.keys(decodeDict).includes(x) ? decodeDict[x] : x).join('')
  }

//-------------------- Solution (with comments) ----------------------------------------

function encode(s) {
    //declare object with key-value pairs to serve as dictionary
    const encodeDict = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5
    }
    //.split() param string into array of chars, and .map() that array.
    //if any chars are keys in our dictionary Object, return the corresponding value.
    //otherwise return char as is; .join() string back together and return it
    return s.split('').map(x => Object.keys(encodeDict).includes(x) ? encodeDict[x] : x).join('')
  }
  
  function decode(s) {
      const decodeDict = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u'
      }
     return s.split('').map(x => Object.keys(decodeDict).includes(x) ? decodeDict[x] : x).join('')
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

