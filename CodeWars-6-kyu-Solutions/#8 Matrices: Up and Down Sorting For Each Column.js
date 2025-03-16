/*
You are given a matrix M, of positive and negative integers. It should be sorted in an up and down column way, starting always with the lowest element placed at the top left position finishing with the highest depending on n value: at the bottom right position if the number of columns,n, is odd, or placed at the top right, if n is even.

E.g.:

M = [[-20, -4, -1],
     [  1,  4,  7], 
     [  8, 10, 12]]
     
M_ = [[-20, 7, 8],
      [-4, 4, 10],
      [-1, 1, 12]]
In order to be more understandable we show the directions of the sorting for the new matrix with arrows.

Create the function up_down_col_sort() that receives a matrix as an argument and may do this kind of sorting.

Your function will be tested with square or rectangular matrices of m rows and n columns Features of the random tests:

Number of tests = 120
10 <= m <= 200
10 <= n <= 200
-1000 <= M[i,j] <= 1000
The kata is available at Python 2, Typescript, Javascript and Ruby at the moment. Translations into another languages will be released soon.
*/

function upDownColSort(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const sortedValues = [];
  for (let row of matrix) {
    for (let value of row) {
      sortedValues.push(value);
    }
  }

  sortedValues.sort((a, b) => a - b);

  const sortedMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  let index = 0;

  for (let col = 0; col < cols; col++) {
    if (col % 2 === 0) {
      for (let row = 0; row < rows; row++) {
        sortedMatrix[row][col] = sortedValues[index++];
      }
    } else {
      for (let row = rows - 1; row >= 0; row--) {
        sortedMatrix[row][col] = sortedValues[index++];
      }
    }
  }

  return sortedMatrix;
}

const m1 = [
  [-20, -4, -1],
  [1, 4, 7],
  [8, 10, 12],
];

const m2 = [
  [1, -1, 4, 1],
  [7, -20, 12, 0],
  [8, 10, -4, -3],
];

const m3 = [
  [1, -1, 4, 1],
  [7, -20, 12, 0],
  [8, 10, -4, -3],
  [5, 6, 6, 8],
];

console.log(upDownColSort(m1)); // [[-20, 7, 8], [-4, 4, 10], [-1, 1, 12]]
console.log(upDownColSort(m2)); // [[-20, 1, 1, 12], [-4, 0, 4, 10], [-3, -1, 7, 8]]
console.log(upDownColSort(m3)); // [[-20, 4, 5, 12], [-4, 1, 6, 10], [-3, 1, 6, 8], [-1, 0, 7
