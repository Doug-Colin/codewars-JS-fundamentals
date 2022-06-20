// 8 kyu - Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
    return  operation == '+' ? value1 + value2 :
            operation == '-' ? value1 - value2 :
            operation == '*' ? value1 * value2 :
            operation == '/' ? value1 / value2 : 'Wrong Operation';
  }
  
  //Note that this can be done more concisely with switch & case statements. 
  
  function basicOp(operation, value1, value2)
  {
    switch(operation){
      case '+': return value1 + value2;
      case '*': return value1 * value2;
      case '-': return value1 - value2;
      case '/': return value1 / value2;
    }
  }
  

// Test Cases
// describe("Tests", () => {
//   it("test", () => {
// console.log("Basic tests\n");
// Test.assertSimilar(basicOp('+', 4, 7), 11);
// Test.assertSimilar(basicOp('-', 15, 18), -3);
// Test.assertSimilar(basicOp('*', 5, 5), 25);
// Test.assertSimilar(basicOp('/', 49, 7), 7);

// console.log("Random tests\n");
// console.log("+\n");
// for (let i = 0; i < 5; i++)
// {
//   let temp = Math.floor(Math.random() * 1005);
//   let temp2 = Math.floor(Math.random() * 1005);
//   Test.assertSimilar(basicOp('+', temp, temp2), temp + temp2);
// }
// console.log("-\n");
// for (let i = 0; i < 5; i++)
// {
//   let temp = Math.floor(Math.random() * 1005);
//   let temp2 = Math.floor(Math.random() * 1005);
//   Test.assertSimilar(basicOp('-', temp, temp2), temp - temp2);
// }
// console.log("*\n");
// for (let i = 0; i < 5; i++)
// {
//   let temp = Math.floor(Math.random() * 1005);
//   let temp2 = Math.floor(Math.random() * 1005);
//   Test.assertSimilar(basicOp('*', temp, temp2), temp * temp2);
// }
// console.log("/\n");
// for (let i = 0; i < 5; i++)
// {
//   let temp = Math.floor(Math.random() * 1005);
//   let temp2 = Math.floor(Math.random() * 1005);
//   Test.assertSimilar(basicOp('/', temp, temp2), temp / temp2);
// }
//   });
// });
// */

