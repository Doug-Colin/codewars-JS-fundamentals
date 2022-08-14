/*
--------------- 7 Kyu - Credit Card Mask ------------------

Instructions:

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

-------------
Sample Tests

describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});

--------------

Psuedo Code:
-use slice() to separate last four digits of string and the beginning to the last four
-use replace regEx (/./g, '#) on beginning of string
-return both combined 

-------------
Lessons Learned
-this could be done more succinctly by placing everything in one statement, without decalring/assigning variables
-
*/

function maskify(cc) {

 let hiddenDigits = cc.slice(0, -4)
 let lastFour = cc.slice(-4)

    return hiddenDigits.replace(/./g, '#') + lastFour;
  }


//   -----------------------------------------

function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
  }