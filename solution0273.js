/*
--------------- 7 Kyu - Complementary DNA ------------------

Instructions:

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
  })
})

--------------
PREP

Parameters: 
    -dna, a string of capital letter

Return: 
    -the string converted to the 'other side' of the DNA according to the given corresponding values

Example:
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

Psuedo Code:
    -creat dictionary Object of key:values representing corresponsing/complimentary letters
    -.split param string into letters and .map it, passing letters into dictionary Object


*/

//-------------------- Solution (without comments) -------------------------------------

function DNAStrand(dna){

    const dict = {
      A : "T",
      T : "A",
      G : "C",
      C : "G"
    }
    return dna.split('').map(x=>dict[x]).join('')
  }

//-------------------- Solution (with comments) ----------------------------------------

function DNAStrand(dna){
    //create dictionary Object of key:values representing corresponsing/complimentary letters
    const dict = {
      A : "T",
      T : "A",
      G : "C",
      C : "G"
    }
    
    //.split param string into letters and .map it, passing letters into dictionary Object
    //.join into string and return
    return dna.split('').map(x=>dict[x]).join('')
  }

//--------------- Best Practices / Lessons Learned -------------------------------------

