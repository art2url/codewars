/*
Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]
*/

function reject(array, predicate) {
 if (typeof predicate === "string") {
  return array.filter((el) => typeof el !== predicate);
 } else if (typeof predicate === "number") {
  return array.filter((el) => el % 2 !== predicate % 2);
 } else if (typeof predicate === "function") {
  return array.filter((el) => !predicate(el));
 }
}


console.log(reject(['a', 'b', 3, 'd'], 'number')) // ['a', 'b', 'd']
console.log(reject(['a', 'b', 3, 'd'], 'string')) // [3]
console.log(reject([1, 2, 3, 4, 5, 6], 2)) // [1, 3, 5]