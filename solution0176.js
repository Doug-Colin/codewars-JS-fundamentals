/*
--------------- 8 Kyu - DNA to RNA Conversion ------------------

Instructions:

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

-------------
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })

--------------
PREP

Parameters: 
    -a string of arbirtrary length. Possibly empty, but otherwise containging only the characters 'G', 'C', 'A' and/or 'T'.
    
Return: 
    -The same string, witht he 'T's replaced by 'U's


Example:
    "GCAT"  =>  "GCAU"

Psuedo Code:
    -use .replaceAll('T', 'U')

    -replaceAll() not working, challenge likely predates ES6

    -use replace() with regex statement and global flag
        .replace(/T/g, 'U)


*/


function DNAtoRNA(dna) {
    //Use .replace() method to return same string
      //first argument is a regex that captures the character T, with g flag for global, to capture all occurences
      //second argument is the replacement character
    return dna.replace(/T/g, 'U');
  }

