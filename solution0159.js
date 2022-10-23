/*
--------------- 6 Kyu - The Supermarket Queue ------------------

Instructions:

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

-------------
Sample Tests

describe("example tests", function() {
Test.assertEquals(queueTime([], 1), 0);
Test.assertEquals(queueTime([1,2,3,4], 1), 10);
Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);

//add some more example tests here, if you like

})

--------------
PREP

Parameters: 
    - customers, an array of positive integers representing individual customers and how much time they each take at the registers
    - n, a positive integer, the number of registers 

Return: 
    -the total time required for all customers to check out. 


Examples:
    queueTime([5,3,4], 1)
        should return 12
        because when there is 1 till, the total time is just the sum of the times

    queueTime([10,2,3,3], 2)
        should return 10
        because here n=2 and the 2nd, 3rd, and 4th people in the 
        queue finish before the 1st person has finished.

    queueTime([2,3,10], 2)
        should return 12


Psuedo Code:
    -I tried variations of this in my RunJS environment, to no avail, so am breaking down the top solution here.

    -create array to represent num of tills via Array(n), and assign all tills 0 via .fill(0)

    -iterate through customers/times array via forEach(), adding each customer/time to the time taken at each till. 

    -in order to represent the next available till, we'll need to find the index of the value in the tills arary that is lowest, via .indexOf(Math.min(...tills)). save as variable nextTill

    -On each iteration, add the next customer/time to the next available till (till with lowest customer/time value), via addition-assignment operator 

    -after customers.forEach((customer)... completes, return the time needed at the tills by finding the highest summed value via Math.max(...tills)  
*/


function queueTime(customers, n) {
    //create Array to reprent the tills by passing (n) Array(), and fill each index with 0 via .fill()
    let tills = Array(n).fill(0);
    
    //iterate through customer/time array via forEach(), populating the tills array with each customer/time.
    customers.forEach((customer) => {
      
      //create variable representing the index of the next available slot in the tills array by finding .indexOf() lowest total customer/time
      let nextTill = tills.indexOf(Math.min(...tills))

      //On each iteration, add the current customer/time val to the next available till via addition-assignment operator
      tills[nextTill] += customer;
    });
  
    //return the highest accumulated customer/time total in the tills array via Math.max(...tills)
    return Math.max(...tills);
  }
