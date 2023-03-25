/*
--------------- 8 Kyu - You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned. ------------------

Instructions:

calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

-------------
Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(calculator(1,2,"+"), 3, "calculate");
Test.assertEquals(calculator(1,2,"-"), -1, "calculate");
Test.assertEquals(calculator(3,5,"*"), 15, "calculate");
Test.assertEquals(calculator(6,2,"/"), 3, "calculate");
Test.assertEquals(calculator(6,2,"$"), "unknown value", "calculate"); 
Test.assertEquals(calculator(6,"h","*"), "unknown value", "calculate");   
     

  });
});

--------------
PREP

Parameters: 
    -a and b, numbers
    -sign, the operation to perform with the numbers

Return: 
    -the value of the operation || "unknown value" if params aren't valud

Example:
    calculator(1,2,"+"); //=> result will be 3
    calculator(1,2,"&"); //=> result will be "unknown value"
    calculator(1,"k","*"); //=> result will be "unknown value"

Psuedo Code:
    -since sign param is string it will not work with num values as operator, so use eval()

    -use try...catch statement to accomodate errors caused by non-operator sign strings, and return appropriate message
*/

//-------------------- Solution (without comments) -------------------------------------

function calculator(a, b, sign) {
    try {
      return eval(a + sign + b)
    } catch (e) {
      return "unknown value"
    }
}

//-------------------- Solution (with comments) ----------------------------------------

function calculator(a, b, sign) {
    //use eval() method to return the completion value of JS code in string form.
    //use try...catch statement to accomodate for error caused by sign param not being an operator
    try {
      return eval(a + sign + b)
    } catch (e) {
      return "unknown value"
    }
}

//--------------- Best Practices / Lessons Learned -------------------------------------

