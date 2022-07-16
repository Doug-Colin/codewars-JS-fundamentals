/*
7Kyu - Reduce My Fraction

Instructions:

Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

*/


function reduce(fraction){
    // This would be quicker if we were looping through primes.
    // Since to determine a prime would take an `additional` 2 calculations, 
    // it's more efficient to perform the 2 here on each number
    for (var i = fraction[0]; i > 0; i--) {
      if (0 == fraction[0] % i && 0 == fraction[1] % i) {
        var numerator = (fraction[0] / i);
        var denominator = (fraction[1] / i)
        return [numerator, denominator];
      }
    }
  }