/*
The prime factorization of a positive integer is a list of the integer's prime factors, together with their multiplicities; the process of determining these factors is called integer factorization. The fundamental theorem of arithmetic says that every positive integer has a single unique prime factorization.

The prime factorization of 24, for instance, is (2^3) * (3^1).

Write a class called PrimeFactorizer whose constructor accepts exactly 1 number (a positive integer) and has a property factor containing an object where the keys are prime numbers as strings and the values are the multiplicities.

new PrimeFactorizer(24).factor //should return { '2': 3, '3': 1 }
*/

function PrimeFactorizer(n) {
  this.factor = {};
  let divisor = 2;

  while (n > 1) {
    while (n % divisor === 0) {
      this.factor[divisor] = (this.factor[divisor] || 0) + 1;
      n /= divisor;
    }
    divisor++;
  }
}

new PrimeFactorizer(24).factor; // { '2': 3, '3': 1 }
new PrimeFactorizer(13).factor; // { '13': 1 }
