/*
Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
*/

function sudoku(puzzle) {
  function isValidPlacement(puzzle, row, col, num) {
    return (
      !isInRow(puzzle, row, num) &&
      !isInColumn(puzzle, col, num) &&
      !isInSubgrid(puzzle, row, col, num)
    );
  }

  function isInRow(puzzle, row, num) {
    for (let col = 0; col < 9; col++) {
      if (puzzle[row][col] === num) return true;
    }
    return false;
  }

  function isInColumn(puzzle, col, num) {
    for (let row = 0; row < 9; row++) {
      if (puzzle[row][col] === num) return true;
    }
    return false;
  }

  function isInSubgrid(puzzle, row, col, num) {
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (puzzle[r][c] === num) return true;
      }
    }
    return false;
  }

  function findEmptyCell(puzzle) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (puzzle[row][col] === 0) return {row, col};
      }
    }
    return null;
  }

  function solvePuzzle(puzzle) {
    const emptyCell = findEmptyCell(puzzle);
    if (!emptyCell) return true;

    const {row, col} = emptyCell;

    for (let num = 1; num <= 9; num++) {
      if (isValidPlacement(puzzle, row, col, num)) {
        puzzle[row][col] = num;

        if (solvePuzzle(puzzle)) return true;

        puzzle[row][col] = 0;
      }
    }

    return false;
  }

  solvePuzzle(puzzle);
  return puzzle;
}

sudoku([
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
]); //  [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]
