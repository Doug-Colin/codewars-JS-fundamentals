/*
--------------- 7 Kyu - The alphabet product ------------------

Instructions:

I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

-------------
Sample Tests

const {assert} = require("chai");

describe("The alphabet product", function() {
  it("example tests ( d < 21 )", function() {
    assert.strictEqual( alphabet([2,3,4,1,12,6,2,4]), 4 );
    assert.strictEqual( alphabet([2,6,7,3,14,35,15,5]), 7 );
    assert.strictEqual( alphabet([20,10,6,5,4,3,2,12]), 5 );
    assert.strictEqual( alphabet([2,6,18,3,6,7,42,14]), 7 );
    assert.strictEqual( alphabet([7,96,8,240,12,140,20,56]), 20 );
    assert.strictEqual( alphabet([20,30,6,7,4,42,28,5]), 7 );
  });

--------------
PREP

Parameters: 
    -ns, an unordered array of integers (A, B, C, D, AxB, BxC, CxD, DxA) 

Return: 
    -D


Example:
  ([2,3,4,1,12,6,2,4]), 4 )
  ([20,10,6,5,4,3,2,12]), 5 )

Psuedo Code:
    -sort arr

    -remove lowest two values from array

    -lowest two values times each other are A*B, remove that

    -of remaining values, lowest should be C

    -of remaining values, highest should be C*D

    -divide highest by lowest
*/
//-------------------- Solution- version with comments below -------------------------------------

function alphabet(ns) {

    ns.sort((a,b) => a-b)
    let lowest = ns.splice(0,2)
    ns.splice(ns.indexOf(lowest[0]*lowest[1]),1)
    let result = ns[ns.length-1] / ns[0]
    return result
    }

//-------------------------- Solution With Comments ------------------------------------

function alphabet(ns) {
    // sort arr
    ns.sort((a,b) => a-b)
    // remove lowest 2 elms which must be A & B
    let lowest = ns.splice(0,2)
    // multi lowest elms and remove result from arr (AxB)
    ns.splice(ns.indexOf(lowest[0]*lowest[1]),1)
    // div highest and lowest elms (CxD) for val of D
    let result = ns[ns.length-1] / ns[0]
    return result
    }

//----- Best Practices / Lessons Learned ---------------



