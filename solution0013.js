// Solution 13 COMMITTED

// /////////////////////////    Decremental Loop, or  ITERATING THROUGH AN ARRAY BACKWARDS   //////////////////////////////////////


// How this works:
// In order to make a loop iterate from the back to front of an array, we need to have the starting point at the end. How do we describe that? Remember that 'i' represents the index #, and arr.length returns the amount of elements. Since the index starts at 0, in any array, the index # of the final element will be the # of elements - 1.
//So you're iterating through, and on second iteration the array is one less long, but it keeps goign with that -1 index
// then you use unshift to add to the beginning of the new array...  

let origArray = [1,3,5,7,9];

function reversedArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {                 
    newArr.push(arr[i]);
    }
    return newArr;
    }

console.log(reversedArray(origArray));


