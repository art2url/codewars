/*
Description:
You will be given an array of cordinates and a radius. The function should return if the coordinates describe a point within the given radius of the origin.

In two dimensions the condition that any [x, y] coordinate lies in a given radius (= a circle) is:

x2+y2≤r2x 2 +y 2 ≤r 2

This generalises to higher dimensions as follows:

x
2
+
y
2
+
z
2
+
.
.
.
≤
r
2
x 
2
 +y 
2
 +z 
2
 +...≤r 
2
 

Note: a point with no coordinates should return true, as in zero dimensions all points are the same point
*/

function inSphere(coords, radius) {
  const sumOfSquares = coords.reduce((sum, x) => sum + x * x, 0);
  return sumOfSquares <= radius * radius;
}

console.log(inSphere([0.5, 0.5], 1)); // true
console.log(inSphere([1, 0, 0.1], 1)); // false
console.log(inSphere([3, 4, 5], 6)); // false
console.log(inSphere([], 1)); // true
console.log(inSphere([0, 0, 0, 0, 0], 0)); // true
console.log(inSphere([0.1, -2, -3], 0)); // false
