/*
--------------- 6 Kyu - Emotional Sort ( ︶︿︶) ------------------

Instructions:

You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad

Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

-------------
Sample Tests



--------------
PREP

Parameters: 
    -
    -  

Return: 
    -the array sorted descending if param order == true, or ascending if its false.
    -if array is empty return empty array

Example:
    If order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]
    If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Psuedo Code:
    -use Object to store key-value pairs of emotion : number so that we can use the number values to sort

    -use custom .sort() to sort array by accessing object 
*/

//-------------------- Solution (without comments) -------------------------------------

function sortEmotions(arr, order){

    const emoRank = {
     ':D' : 1,
     ':)' : 2,
     ':|' : 3,
     ':(' : 4,
    'T_T' : 5,
    }

    return arr == [] ? [] :
           order ? arr.sort((a,b) => emoRank[a] - emoRank[b]) : arr.sort((a,b) => emoRank[b] - emoRank[a])
}

//-------------------- Solution (with comments) ----------------------------------------

function sortEmotions(arr, order){
  
    //declare Object and give each emotion a number value so we can use it to sort the arr
    const emoRank = {
     ':D' : 1,
     ':)' : 2,
     ':|' : 3,
     ':(' : 4,
    'T_T' : 5,
    }
    
    //If arr is empty, return empty arr. 
    //If order is true, return descending arr with .sort(),
    //by passing each emotions rank into our emoRank object. If false, return ascending version.
    return arr == [] ? [] :
           order ? arr.sort((a,b) => emoRank[a]-emoRank[b]) : arr.sort((a,b) => emoRank[b]-emoRank[a])
}

//--------------- Best Practices / Lessons Learned -------------------------------------

