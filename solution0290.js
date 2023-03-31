/*
--------------- 6 Kyu - Simple Encryption #1 - Alternating Split ------------------

Instructions:

Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Solution", function(){
  it("EncryptExampleTests", function(){    
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){    
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){    
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});

--------------
PREP

Parameters: 
    -text, a string
    -n, the number of times to encrypt/decrypt the string

Return: 
    -the string encrypted as described, starting with all odd indexed chars together chronologically, then all even, n times.
    -And, the opposite, in a 'decrypt' function

Example:
    encrypt("012345", 1)  =>  "135024"
    encrypt("012345", 2)  =>  "135024"  ->  "304152"
    encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

Psuedo Code:
    -0even 1odd 2even 3odd 4even --> 1odd(i0) 3odd(i1) 0even(i2) 2even(i3) 4even(i4) 
    decrypt
    -1 3 0 2 4 --> 0even(i2-->0) 1odd(i0-->1) 2even(i3-->2) 3odd(i1-->3) 4even(i4-->4) 
    o1o2e1e2e3 --> e1o2

    -use for loop that starts at 1 and ends at n times

    -on each loop, return text.filter((x, i)=>i%)


*/

//-------------------- Solution (without comments) -------------------------------------

function encrypt(text, n) {

    if (text == null || text.length < 1 ||n <= -1) return text
    
    text = text.split('')

    const encrypter = x => {
      let odd = text.filter((x,i) => {return i%2!==0 ? x:'' })
      let even = text.filter((x,i) => {return i%2==0 ? x:'' })
      text = odd.concat(even)    
      }
      for (let i = 1; i <= n; i++ ) {
       encrypter(text)
      }
    return text.join('')
  }
  
  function decrypt(encryptedText, n) {

    if (encryptedText == null || encryptedText.length < 1 ||n <= -1) return encryptedText

    let text = encryptedText
    
    const decrypter = x => {
      let solution = []
      let even = text.slice(text.length/2, text.length)
      let odd = text.slice(0, text.length/2)
      for (let i = 0; i <= odd.length; i++) {
       solution.push(even[i])
        solution.push(odd[i])
      text = solution.filter(x=>x!==undefined).join('')
      }
    }
      for (let i = 1; i <= n; i++ ) {
       decrypter(text)
      }
    return text 
  }

//-------------------- Solution (with comments) ----------------------------------------

function encrypt(text, n) {
    //if text value is null, or empty string, or n is negative, return first param as is
    if (text == null || text.length < 1 ||n <= -1) return text
    
    //split text into array of chars, save 
    text = text.split('')
    
    //function creates separate arrays of odd/even indexed chars via .filter(),
    //and joins them together via .concat(), saving them to text variable
    const encrypter = x => {
      let odd = text.filter((x,i) => {return i%2!==0 ? x:'' })
      let even = text.filter((x,i) => {return i%2==0 ? x:'' })
      text = odd.concat(even)    
      }
    //This loop runs the above encrypter function n times 
      for (let i = 1; i <= n; i++ ) {
       encrypter(text)
      }
    return text.join('')
  }
  
  function decrypt(encryptedText, n) {
    //if text value is null, or empty string, or n is negative, return first param as is
    if (encryptedText == null || encryptedText.length < 1 ||n <= -1) return encryptedText
    //save param to shorter variable name so we don't have to write 'encrypted' 6 times
    let text = encryptedText
    
    //function creates arrays of what would be formerly even and odd indexed chars of a string before encryption,
    //and uses a for loop to alternatingly push them into the empty solution array
    const decrypter = x => {
      let solution = []
      let even = text.slice(text.length/2, text.length)
      let odd = text.slice(0, text.length/2)
      for (let i = 0; i <= odd.length; i++) {
       solution.push(even[i])
        solution.push(odd[i])
      text = solution.filter(x=>x!==undefined).join('')
      }
    }
      //for loop runs above decrypter function n times 
      for (let i = 1; i <= n; i++ ) {
       decrypter(text)
      }
    return text 
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

