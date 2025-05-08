/*
Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;
*/

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

function chain(input, fs) {
  let result = input;

  for (const fn of [...fs]) {
    result = fn(result);
  }

  return result;
}

console.log(chain(2, [add, mult])); // 90
console.log(chain(5, [add, mult])); // 180
console.log(chain(2, [mult, add])); // 61 (2 * 30 = 60, then +1)
