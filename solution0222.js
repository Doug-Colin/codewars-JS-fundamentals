/*
--------------- 5 Kyu - Pete, the baker ------------------

Instructions:

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

-------------
Sample Tests

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

--------------
PREP

Parameters: 
    -recipe, an Object representing necessary ingredients
    -available, an Object representing available ingredients

Return: 
    -the possible amount of cakes we can bake


Example:
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); => return 2

Psuedo Code:
    -use for .... in loop to iterate through the properties of recipe Object
    
    -find how many cakes are possible per ingredient by dividing available amount/recipe amount

    -round down via Math.floor
    
    -if # is >=1, it's enough of that ingredient for a cake. .push() it into an array.

    -compare the length of that array with the length of recipe object to ensure we had enough of all ingredients
                (Object.entries)
    
    -if so, return lowest number in array. I not return 0


*/
//-------------------- Solution (commented version below) -------------------------------------

function cakes(recipe, available) {
  
    let cakes = []
  
    for (const x in recipe) {
      let stock = Math.floor(available[x]/recipe[x])
      if (stock >= 1) {
        cakes.push(stock)
      }
    }
    
    return Object.entries(recipe).length === cakes.length ? Math.min(...cakes): 0;
  
  }

//-------------------------- Solution (with comments) ------------------------------------
function cakes(recipe, available) {
  
    //declare variable 'cakes' and assign empty array to hold possible cakes per ingredient
    let cakes = []
  
    //use for .... in loop to iterate through the properties of our recipe Object (our 'necessary ingredients')
    //declare 'stock' variable to represent how possible cakes per ingredient (available amount/recipe amount)
    //use Math.floor to round down, baking a fraction of a cake is like cooking a bite of steak. Insanity. 
    //if stock # is >=1, it's  enough of that ingredient for a cake (or more), so .push() it into our cakes array.
    for (const x in recipe) {
      let stock = Math.floor(available[x]/recipe[x])
      if (stock >= 1) {
        cakes.push(stock)
      }
    }
    
    //using ternary statement, check if we had enough of all ingredients by: 
    //using Object.entries to convert recipe Object into array, and comparing .length with our cakes array 
    //if length is ===, we have enough ingredients. .
    //use Math.min() and spread (...) operator to return amount of possible cakes, otherwise 0
    return Object.entries(recipe).length === cakes.length ? Math.min(...cakes): 0;
  
  }

//----- Best Practices / Lessons Learned ---------------

//interesting alternative solutions

function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }

  const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )