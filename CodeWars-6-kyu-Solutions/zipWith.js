/*
Task
zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions

Input validation
Assume all input is valid.
*/

function zipWith(fn, a0, a1) {
  const length = Math.min(a0.length, a1.length);
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(fn(a0[i], a1[i]));
  }

  return result;
}

// Test functions
const plus = (a, b) => a + b;
const max = (a, b) => Math.max(a, b);
const pow = (a, b) => Math.pow(a, b);

// Test cases
console.log(zipWith(plus, [0, 1, 2, 3], [0, 1, 2, 3])); // [0, 2, 4, 6]
console.log(zipWith(max, [1, 4, 7, 1], [4, 2, 6, 0])); // [4, 4, 7, 1]
console.log(zipWith(pow, [10, 10, 10, 10], [0, 1, 2, 3])); // [1, 10, 100, 1000]
console.log(zipWith(plus, [1, 2], [1, 2, 3])); // [2, 4]
console.log(zipWith(plus, [1, 2, 3], [1])); // [2]
console.log(zipWith((a, b) => `${a}${b}`, ['a', 'b'], ['x', 'y'])); // ['ax', 'by']
