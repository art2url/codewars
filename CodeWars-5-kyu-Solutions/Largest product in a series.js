/*
Description:
Complete the method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.

The input string always has more than five digits.

Adapted from Project Euler.
*/

function greatestProduct(input) {
  let maxProduct = 0;

  for (let i = 0; i <= input.length - 5; i++) {
    const digits = input.slice(i, i + 5);
    const product = digits
      .split('')
      .reduce((prod, digit) => prod * Number(digit), 1);
    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
}

console.log(greatestProduct('123834539327238239583')); // 3240
console.log(greatestProduct('92494737828244222221111111532909999')); // 5292
