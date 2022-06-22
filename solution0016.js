//////////// 6kyu Equal Sides Of An Array //////////////

function findEvenIndex(arr) {
  let equalIndex = -1
  arr.forEach((item,index) => {
    let leftSide = arr.slice(0,index).reduce((sum, item) => sum + item, 0)
     let rightSide = arr.slice(index + 1).reduce((sum,item) => sum + item, 0)
    if (leftSide == rightSide) {equalIndex = index}
    console.log(index); 
   });
}
//   return equalIndex

// }

// psuedo code

// loop through array

// reduce left and right of each index

// use conditional to check if left and right side are equal

// ------------------------------------------------------------------------------------------------------------