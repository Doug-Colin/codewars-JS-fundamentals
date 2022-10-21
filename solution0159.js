/*
---------------  Kyu -  ------------------

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

    -

    -


*/


function queueTime(customers, n) {
    //declare variable tills and assign it Array(n), which creates an empty Array with (n) elements. 
    //use .fill(0), to populate each element with the value 0
    let tills = Array(n).fill(0);
    
    //forEach() customer in the given customers array...
    //declare variable nextTill and assign it the till.indexOf(Math.min...tills)
    //for each customer/timecost, tills[nextTill] will add the customer/timecost
    //I'm guessing that by using Math.min we are finding the next available till, but I don't clearly understand the syntax.
    //I'm guessing that returning Math.max(...tills) returns the maximum time that it would take tills to iterate through the customers in order. 
    //But I don't understand how this syntax is accomplishing that. 
    customers.forEach((customer) => {
      let nextTill = tills.indexOf(Math.min(...tills))
      tills[nextTill] += customer;
    });
  
    return Math.max(...tills);
  }

