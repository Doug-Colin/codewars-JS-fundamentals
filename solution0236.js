/*
--------------- 7 Kyu - Functional Addition ------------------

Instructions:

Create a function add(n)/Add(n) which returns a function that always adds n to any number

-------------
Sample Tests

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(add(1)(3), 4, 'add one to three equals four')
  });
});


--------------
PREP

Parameters: 
    -n, an integer

Return: 
    -a fucntion which always adds n to any number (any number being said function's param)


Example:
    var addOne = add(1);
    addOne(3); // 4

    var addThree = add(3);
    addThree(3); // 6

Psuedo Code:
    -return ES6 arrow function that adds n to it's param x 


*/
//-------------------- Solution- version with comments below -------------------------------------
function add(n) {
    return  addN = x => x+n
  }
  

//-------------------------- Solution With Comments ------------------------------------

function add(n) {
    //return ES6 arrow function that adds n to it's param x 
    return  addN = x => x+n
  }
  

//----- Best Practices / Lessons Learned ---------------
