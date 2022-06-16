
///////////////////////   Write an function that builds a list structure from an array given as an argument //////////////////////////////////////
origArrayTwo = [1, 2, 3];

function arrayToList(array) {
let list = null;
for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
}
return list;
}

console.log(arrayToList(origArrayTwo));